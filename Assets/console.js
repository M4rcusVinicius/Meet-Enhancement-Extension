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

function print(message, extend) {
  try {
    console.groupCollapsed(message)
    extend.forEach(element => {
      if (Array.isArray(element)) {
        console.log(...element)
      } else {
        console.log(element)
      }
    });
    console.groupEnd()
  } catch(err) {
    console.log('Error on print message')
    console.log('Message:', message)
    console.log('Extend:', extend)
    console.groupEnd()
  }
}

function message(message, icon) {
  try {
    document.querySelector('#message > div').innerHTML = message
    document.querySelector('#message > i').innerHTML = icon
  } catch(err) {
    error('Error on display message', [
      ['Message:', message],
      ['Icon', icon]
    ], err)
  }
}