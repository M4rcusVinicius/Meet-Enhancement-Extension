function observer() {
  try {
    const users = getUsers()
    if(!users) { return }
    const [result, change] = process(users);
    display(change)
    db.previous = result
    if (db.play) { db.observer = setTimeout(observer, 1000); }
  } catch(error) {
    setError('Error on observer', error, true)
  }
}

function getUsers() {
  const query = userQuery()
  if (!query) { return false }
  const names = new Array
  return Object.values(query).map((user, index) => {
    let name = user.querySelector(".ZjFb7c").innerText;
    if (names.indexOf(name) !== -1) {
      setError("There more than one users with the name " + name)
      name = name + ` (${index})`;
    }
    const muted = !!user.querySelector(".FTMc0c");
    names.push(name);
    return { name: name, muted: muted, events: [], image: user.querySelector(".G394Xd").src };
  });
}

function userQuery() {
  const query = document.querySelectorAll('.KV1GEc')
  if ( query.length > 0 ) { return query }
  setError('User query return 0 users', query, true)
  throw new Error('User query return 0 users')
}


function process(users) {
  const result = new Object();
  const change = new Array();
  
  users.forEach(user => {
    const id = user.name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-");
    if (db.muted.indexOf(user.name) !== -1 | user.muted) {
      user.block = true
    } else { alert() }
    if (!(id in db.previous)) {
      { !user.muted && user.events.push("unmuted"); }
      user.events.push("new");
    } else if (db.previous[id].muted !== user.muted) {
      if (user.muted) { user.events.push("muted"); }
      else { user.events.push("unmuted"); }
    }
    delete db.previous[id];
    if (user.events.length > 0) { change.push(user); }
    result[id] = user;
  });

  for (const [key, user] of Object.entries(db.previous)) {
    if(!(key in result)) {
      user.events.push("leave");
      change.push(user);
    }
  }
  return [result, change, alert];
}

function alert() {
  if (db.notDisturb) {
    console.log("Audio ligado")
    clearTimeout(db.timer)
    Object.values(document.querySelectorAll('audio')).map(audio => {
      audio.muted = false
    })
    db.timer = setTimeout(() => {
      console.log("Audio desligado")
      Object.values(document.querySelectorAll('audio')).map(audio => {
        audio.muted = true
      })
    }, 10000)
  }
}