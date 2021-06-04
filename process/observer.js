function observer() {
  try {
    const previous = () => {
      const prev = localStorage.getItem('previous')
      console.log('Previous:', prev)
      if(!prev) { return {} }
      return prev
    }
    const users = getUsers()
    const [result, change] = process(users, previous);
    localStorage.setItem('previous', result)
    console.log('Observer changes:', change)
    console.log('Observer result:', result)
  } catch(error) {
    setError('Error on observer', error, true)
  }
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

function process(users, previous) {
  const result = new Object();
  const change = new Array();

  users.forEach(user => {
    const id = user.name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-");
    if (!(id in previous)) {
      { !user.muted && user.events.push("unmuted"); }
      user.events.push("new");
    } else if (previous[id].muted !== user.muted) {
      if (user.muted) { user.events.push("muted"); }
      else { user.events.push("unmuted"); }
    }
    delete previous[id];
    if (user.events.length > 0) { change.push(user); }
    result[id] = user;
  });

  for (const [key, user] of Object.entries(previous)) {
    user.events.push("leave");
    change.push(user);
    result[key] = user;
  }
  return [result, change];
}