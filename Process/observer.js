function observer() {
  try {
    message('Reiniciando observador', 'flag')
    const users = getUsers();
    const [result, change, warnUsers] = process(users);
    warn(warnUsers, change.length > 0)
    db.previous = result;
    print('Observer loop compete', [
      ["Result", result],
      ["Change", change],
    ])
    display(change)
    if (db.observer) { setTimeout(observer, 1000); }
  } catch (err) {
    error("Error on observer", [["Data base:", db]], err);
  }
}

function getUsers() {
  message('Extraindo informações', 'travel_explore')
  const query = document.querySelectorAll(".KV1GEc");
  if (query.length === 0) {
    const err = new Error("Query on get users return 0 elements")
    error('Query on get users return 0 elements', [["Query", query]], err)
    throw err
  }
  const names = new Array();
  return Object.values(query).map((user, index) => {
    let name = user.querySelector(".ZjFb7c").innerText;
    if (names.indexOf(name) !== -1) { name = name + ` (${index})`; }
    const id = name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-")
    names.push(name);
    return {
      name: name,
      id: id,
      muted: !!user.querySelector(".FTMc0c"),
      events: [],
      image: user.querySelector(".G394Xd").src,
      color: 'blue',
      blocked: id in db.blocked,
      warn: false
    };
  });
}

function process(users) {
  message('Processando dados', 'account_tree')
  const result = new Object();
  const change = new Array();
  const warnUsers = new Array();

  users.forEach((user) => {
    if (!(user.id in db.previous)) { user.events.push("new") }
    else if (db.previous[user.id].muted !== user.muted) {
      if (user.muted) { user.events.push("muted") } 
      else { user.events.push("unmuted") }
    }
    delete db.previous[user.id];
    if ( !user.muted && !user.blocked) { warnUsers.push(user); user.warn = true } 
    if (user.events.length > 0) { change.push(user) }
    result[user.id] = user;
  });

  for (const user of Object.values(db.previous)) {
    user.events.push("leave");
    change.push(user);
  }
  return [result, change, warnUsers];
}
