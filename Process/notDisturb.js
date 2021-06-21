function block(user) {
  try {
    const userQuery = Object.values(document.getElementsByClassName(user.id + 'microphone'))
    if (user.id in db.blocked) {
      message(user.name + ' desbloqueado', 'auto_awesome')
      userQuery.map(item => item.style.color = "#6d6d6f")
      print(`Remove ${user.name} (${user.id}) from blocked list`, [
        ["Deleted user info: ", db.blocked[user.id]],
        ["Current user info:", user]
        ["Blocked list:", db.blocked],
      ]);
      delete db.blocked[user.id];
    } else {
      message(user.name + ' bloqueado', 'block', 'warn')
      db.blocked[user.id] = user;
      print(`Add ${user.name} (${user.id}) in blocked list`, [["User:", user]]);
      userQuery.map(item => item.style.color = "rgb(26, 115, 232)")
    }
  } catch (err) {
    error("Error on block person", [
      ["Blocked list:", db.blocked],
      ["User:", user],
    ], err);
  }
}

function activeNotDisturb() {
  try {
    message('Modo não perturbe ativado', 'do_not_disturb_on', 'warn')
    const button = document.querySelector('#notDisturb')
    button.style.backgroundColor = '#1f6ed8'
    db.notDisturb = true
    newClick("#notDisturb", desativeNotDisturb, activeNotDisturb)
    print("Active not disturb", [ ["Button:", button] ])
  } catch (err) {
    error("Error on active not disturb", [
      ["Data base:", db]
    ], err)
  }
}

function desativeNotDisturb() {
  message('Modo não perturbe desativado', 'do_not_disturb_off', 'warn')
  const button = document.querySelector('#notDisturb')
  button.style.backgroundColor = '#5da0f6'
  db.notDisturb = false
  db.muted = false
  Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = false)
  Object.values(document.querySelectorAll('.temporary-alert-marker')).map(item => item.classList.remove("temporary-alert-marker"))
  newClick("#notDisturb", activeNotDisturb, desativeNotDisturb)
}

function warn(users, hasChanges) {
  if (db.notDisturb && users.length > 0) {
    message('Alerta - Ativando som', 'warn', 'warn')
    if (hasChanges) {Object.values(document.querySelectorAll('.temporary-alert-marker')).map(item => item.classList.remove("temporary-alert-marker"))}
    if (!db.muted) { clearTimeout(db.warnTimeout) }
    Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = false)
    db.muted = false
    db.warnTimeout = setTimeout(() => {
      message('Desativando som', 'volume_off')
      console.log('>> Timer finished')
      Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = true)
      Object.values(document.querySelectorAll('.temporary-alert-marker')).map(item => item.classList.remove("temporary-alert-marker"))
      db.muted = true
    }, db.timer)
    print('>> Not disturb warn', [
      ['Users', users]
    ])
  }
}