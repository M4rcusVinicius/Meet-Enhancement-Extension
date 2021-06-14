function error(message, extend,  error) {
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
}

function print(message, extend) {
  console.groupCollapsed(message)
  extend.forEach(element => {
    if (Array.isArray(element)) {
      console.log(...element)
    } else {
      console.log(element)
    }
  });
  console.groupEnd()
}