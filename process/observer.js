function observer() {
  try {
    const users = getUsers()
    const [result, change] = process(users);
    localStorage.setItem('previous', result)
    console.log('Observer changes:', change)
    console.log('Observer result:', result)
    db.previous = result
  } catch(error) {
    setError('Error on observer', error, true)
  }
}

function getUsers() {
  const query = userQuery()
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

function userQuery() {
  const query = document.querySelectorAll('.GvcuGe')
  if ( query.length > 0 ) { return query }
  console.log('>> Open user section to try to load users')

  document.querySelector('.SGP0hd > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)').click()
  setTimeout(() => {
  	document.querySelector('.ov7jof > span:nth-child(1) > button:nth-child(1)').click()
    const query = document.querySelectorAll('.GvcuGe')
    if (query.length = 0) { throw new Error('User query return 0 users') }
    return query
  }, 1000)
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
    if (user.events.length > 0) { change.push(user); }
    result[id] = user;
  });

  for (const [key, user] of Object.entries(db.previous)) {
    
    user.events.push("leave");
    change.push(user);
    result[key] = user;
  }
  return [result, change];
}