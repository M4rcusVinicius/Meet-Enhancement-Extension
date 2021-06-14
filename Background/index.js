console.clear()

console.log(
  '%cStart google meet enhancement pack',
  'background-color: #1a73e8;padding: 40px;color: white;font-size: 17px; font-weight: 600; line-height: 40px;'
)
console.log('%c', 'line-height: 10px;')

const prevComponents = [
  '#initButton',
  '#initCSS'
]

console.groupCollapsed('Remove previous elements')
prevComponents.forEach(query => {
  document.querySelectorAll(query).forEach(element => {
    console.log('Remove ' + query, element)
    element.remove()
  })
})
console.groupEnd()



// Create button to implement all functions
initButton()