function observer() {
  try {
    const users = getUsers();
    const [result, change] = process(users);
    db.previous = result;
    print('Observer loop compete', [
      ["Result", result],
      ["Change", change],
    ])
    if (db.observer) { setTimeout(observer, 1000); }
  } catch (err) {
    error("Error on observer", [["Data base:", db]], err);
  }
}

function getUsers() {
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
    names.push(name);
    return {
      name: name,
      id: name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-"),
      muted: !!user.querySelector(".FTMc0c"),
      events: [],
      image: user.querySelector(".G394Xd").src,
    };
  });
}

function process(users) {
  const result = new Object();
  const change = new Array();

  users.forEach((user) => {
    const id = user.name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-");
    if ( !user.muted | db.ignore.indexOf(user.name) === -1) { console.log('Alert !!!') } 
    if (!(id in db.previous)) { user.events.push("new") }
    else if (db.previous[id].muted !== user.muted) {
      if (user.muted) { user.events.push("muted") } 
      else { user.events.push("unmuted") }
    }
    delete db.previous[id];
    if (user.events.length > 0) { change.push(user) }
    result[id] = user;
  });

  for (const user of Object.values(db.previous)) {
    user.events.push("leave");
    change.push(user);
  }
  return [result, change];
}
