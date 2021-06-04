var db = { history: [], previous : new Object() };

function observer() {
  const users = getUsers()
  const [result, change] = process(users);
  db.previous = result
  console.log('Change:', change)
}

function getUsers() {
  const query = document.querySelectorAll('.GvcuGe')
  const names = new Array
  return Object.values(query).map(user => {
    let name = user.querySelector(".ZjFb7c").innerText;
    if (names.indexOf(name) !== -1) {
      setError("There more than one users with the name" + name)
      name = name + ".";
      user.querySelector(".ZjFb7c").innerText = name;
    }
    const muted = !!user.querySelector(".FTMc0c");
    names.push(name);
    return { name: name, muted: muted, events: [], query: user };
  });
}

function process(users) {
  const result = new Object();
  const change = new Array();

  users.forEach(user => {
    const id = user.name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-");
    if (!(id in db.previous)) {
      { !user.muted && user.events.push("unmuted"); }
      user.events.push("new");
    } else if (db.previous[id].muted !== user.muted) {
      if (user.muted) { user.events.push("muted"); }
      else { user.events.push("unmuted"); }
    }
    delete db.previous[id];
    console.log(user.name, ":", ...user.events);
    if (user.events.length > 0) { change.push(user); }
    result[id] = user;
  });

  for (const [key, user] of Object.entries(db.previous)) {
    user.events.push("leave");
    console.log(user.name, ":", ...user.events);
    change.push(user);
    result[key] = user;
  }
  return [result, change];
}

function setError(message, error = '', important = false) {
  console.log(message, error)
  if(important) { alert(message) }
}

observer()
observer()
observer()
observer()