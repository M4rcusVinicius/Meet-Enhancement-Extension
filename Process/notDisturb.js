function block(ev) {
  try {
    console.log('Click')
    const tr = ev.target
    const id = tr.attributes.user.value
    const user = {
      id: id,
      name: tr.querySelector('.userName').innerText,
      image: tr.querySelector('img').src
    }
    if (tr.attributes.blocked.value) {
      print(`Remove ${user.name} (${id}) from blocked list`, [
        ['Deleted user info: ', db.blocked[id]]
        ['Current user info:', user]
        ['Blocked list:', db.blocked]
      ])
      tr.attributes.blocked.value = false
      delete db.blocked[id]
    } else { 
      db.blocked[id] = user 
      tr.attributes.blocked.value = true
      print(`Add ${user.name} (${id}) in blocked list`, [
        ['User:', user]
        ['Blocked list:', db.blocked]
      ])
    }
  } catch(err) {
    error('Error on block person', [
      ['Blocked list:', db.blocked]
      ['Event:', ev]
      ['Target:', ev.target]
    ])
  }
}