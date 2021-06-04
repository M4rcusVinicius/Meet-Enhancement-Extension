function setError(message, error = '', important = false) {
  console.log(message, error)
  if(important) { alert(message) }
}

