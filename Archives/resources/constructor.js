function listener() {
	try {
    const button = document.querySelector('.ov7jof > span:nth-child(1) > button:nth-child(1)')
    // console.log('Button', button)
    button.addEventListener('click', () => { open() })

    const info = document.querySelector('div.r6xAKc:nth-child(1) > span:nth-child(1) > button:nth-child(1)')
    info.addEventListener('click', () => { close() })
    const users = document.querySelector('.SGP0hd > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)')
    users.addEventListener('click', () => { close() })
    const chat = document.querySelector('div.r6xAKc:nth-child(3) > span:nth-child(1) > button:nth-child(1)')
    chat.addEventListener('click', () => { close() })
  } catch(error) {
    setError('Error on constructor')
  }
}

function open() {
  // console.log('Open')
  document.getElementById('dash').style.display = 'block'
}

function close() {
  // console.log('Close')
  document.getElementById('dash').style.display = 'none'
}

function constructor() {
	try {
    // console.log('Constructor')
    const wrapper = document.querySelector('.R3Gmyc')
    const container = document.createElement('div') 
    container.classList.add('WUFI9b')
    container.id = 'dash'
    container.style.display = 'none'
    container.innerHTML = dash
    container.style.zIndex = 10000
  	wrapper.appendChild(container)
  } catch(error) {
    // console.log('Error on constructor')
  }
}

function a(html) {
  document.getElementById('dash').innerHTML = html
}

var dash = `

`


constructor()
listener()