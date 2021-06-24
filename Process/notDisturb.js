function block(user) {
  try {
    const userQuery = Object.values(document.getElementsByClassName(user.id + 'microphone'))
    if (user.id in db.blocked) {
      userQuery.map(item => item.style.color = "#6d6d6f")
      delete db.blocked[user.id];
    } else {
      db.blocked[user.id] = user;
      userQuery.map(item => item.style.color = "rgb(26, 115, 232)")
    }
  } catch (err) {
    message(`Houve um erro ao desativar o modo não perturbe`, 'report_gmailerrorred', 'error' )
    error("Error on block person", [
      ["Blocked list:", db.blocked],
      ["User:", user],
    ], err);
  }
}

function activeNotDisturb() {
  try {
    message(`O modo não perturbe foi ativado`, 'do_not_disturb_on')
    const notDisturbBar = document.querySelector('#notDisturbBar')
    notDisturbBar.style.width = '100%'
    db.notDisturb = true
    newClick("#notDisturb", desativeNotDisturb, activeNotDisturb)
  } catch (err) {
    message(`Houve um erro ao ativar o modo não perturbe`, 'report_gmailerrorred', 'error' )
    error("Error on active not disturb", [
      ["Data base:", db]
    ], err)
  }
}

function desativeNotDisturb() {
  message(`O modo não perturbe foi desativado`, 'do_not_disturb_on')
  const notDisturbBar = document.querySelector('#notDisturbBar')
  notDisturbBar.style.width = '0%'
  clearTimeout(db.warnTimeout)
  db.notDisturb = false
  db.muted = false
  Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = false)
  Object.values(document.querySelectorAll('.temporary-alert-marker')).map(item => item.classList.remove("temporary-alert-marker"))
  newClick("#notDisturb", activeNotDisturb, desativeNotDisturb)
}

function warn(isWarn, hasChanges) {
  if (db.notDisturb && isWarn) {
    if (hasChanges) {Object.values(document.querySelectorAll('.temporary-alert-marker')).map(item => item.classList.remove("temporary-alert-marker"))}
    if (!db.muted) { clearTimeout(db.warnTimeout) }
    Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = false)
    db.muted = false
    document.querySelector('#notDisturbBar').classList.remove("loadNotDisturb")
    setTimeout(() => {
      document.querySelector('#notDisturbBar').classList.add("loadNotDisturb")
    }, 10)
    db.warnTimeout = setTimeout(() => {
      console.log('>> Timer finished')
      Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = true)
      Object.values(document.querySelectorAll('.temporary-alert-marker')).map(item => item.classList.remove("temporary-alert-marker"))
      db.muted = true
    }, db.timer)
  } else if (db.notDisturb) {
    Object.values(document.querySelectorAll('audio')).map(audio => audio.muted = true)
  }
}