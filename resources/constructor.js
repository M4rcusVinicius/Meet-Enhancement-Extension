function openListener() {
	try {
    const button = document.querySelector('.ov7jof > span:nth-child(1) > button:nth-child(1)')
    console.log('Button', button)
    button.addEventListener('click', () => { constructor() })
  } catch(error) {
    console.log('Error on constructor')
  }
}

openListener()

function constructor() {
	try {
    console.log('Constructor')
    const title = document.querySelector('div.WUFI9b:nth-child(6) > div:nth-child(1) > div:nth-child(1)')
    const wrapper = document.querySelector('div.WUFI9b:nth-child(6) > div:nth-child(2)')
  	title.innerText = 'Dashboard'
  	wrapper.innerHTML = 'Hello world'
  } catch(error) {
    console.log('Error on constructor')
  }
}