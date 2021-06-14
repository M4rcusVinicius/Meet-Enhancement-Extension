function error(message, extend,  error) {
  alert(message)
  console.groupCollapsed(message)
  extend.forEach(element => {
    console.log(element)
  });
  console.error(error)
  console.groupEnd()
}