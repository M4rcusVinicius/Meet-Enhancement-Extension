function buttons() {
  try {
    console.log('Add event listener in buttons')
    const listener = [
      ['.ov7jof > span:nth-child(1) > button:nth-child(1)', open],
      ['div.r6xAKc:nth-child(1) > span:nth-child(1) > button:nth-child(1)', close],
      ['.SGP0hd > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)', close],
      ['div.r6xAKc:nth-child(3) > span:nth-child(1) > button:nth-child(1)', close],
    ]
    listener.forEach(button => {
    	document.querySelector(button[0]).addEventListener('click', button[1])
    })
  } catch (error) {
    console.log('Error on add event listener in buttons', error)
  }
}

// ========================================================================================== //

function open() {
  try {
    console.log('Open dashboard')
    document.getElementById('dash').style.display = 'block'
  } catch(error) {
    console.log('Error on open dashboard', error)
  }
}

function close() {
  try {
    console.log('Close dashboard')
    document.getElementById('dash').style.display = 'none'
  } catch(error) {
    console.log('Error on close dashboard', error)
  }
}