function block(user) {
  try {
    const userQuery = Object.values(document.getElementsByClassName(user.id + 'microphone'))
    if (user.blocked) {
      userQuery.map(item => item.style.color = "#6d6d6f")
      print(`Remove ${user.name} (${user.id}) from blocked list`, [
        ["Deleted user info: ", db.blocked[user.id]][
          ("Current user info:", user)
        ][("Blocked list:", db.blocked)],
      ]);
      delete db.blocked[user.id];
    } else {
      db.blocked[user.id] = { id: user.id, image: user.image, name: user.name };
      print(`Add ${user.name} (${user.id}) in blocked list`, [["User:", user]]);
      userQuery.map(item => item.style.color = "#ea4335")
    }
  } catch (err) {
    error("Error on block person", [
      ["Blocked list:", db.blocked][("User:", user)],
    ]);
  }
}
