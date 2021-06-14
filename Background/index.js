const prevComponents = [
  '#initButton',
  '#initCSS'
]

prevComponents.forEach(query => {
  document.querySelectorAll(query).forEach(element => {
    element.remove()
  })
})



// Create button to implement all functions
initButton()