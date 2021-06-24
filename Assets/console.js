function error(message, extend,  error) {
  try {
    console.groupCollapsed(message)
    extend.forEach(element => {
      if (Array.isArray(element)) {
        console.log(...element)
      } else {
        console.log(element)
      }
    });
    console.error(error)
    console.groupEnd()
    alert(message)
  } catch {
    console.log('Error on print message')
    console.log('Message:', message)
    console.log('Extend:', extend)
    console.log('Error:', error)
    console.groupEnd()
  }
}

const msgTypes = { warn: { color: "#be9000", back: "#ffebad" }, error: { color: "#e81a1a", back: "#f4c0c0"} }

function message(message, icon, type) {
  try {
    const msg = document.querySelector('#message')
    msg.querySelector('div').innerHTML = message
    msg.querySelector('i').innerHTML = icon
    if (type) {
      msg.style.color = msgTypes[type].color
      msg.style.backgroundColor = msgTypes[type].back
    } else {
      msg.style.color = '#1a73e8'
      msg.style.backgroundColor = '#c0d6f4'
    }
  } catch(err) {
    error('Error on display message', [
      ['Message:', message],
      ['Icon', icon]
    ], err)
  }
}