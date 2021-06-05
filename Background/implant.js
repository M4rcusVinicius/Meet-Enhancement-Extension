function implant() {

  clearScript()

  const files = [
    'InfiltrateCode/Constructor/buttons.js',
    'InfiltrateCode/Process/observer.js',
    'InfiltrateCode/assets.js',
    'InfiltrateCode/db.js',
    'InfiltrateCode/trigger.js'
  ]

  for ( const index in files ) {
    const script = document.createElement('script');
    script.src = browser.extension.getURL(files[index])
    script.classList.add('InfiltrateCode')
    document.getElementById('yDmH0d').appendChild(script)
  }
}

function clearScript() {
	const scripts = document.querySelectorAll('.InfiltrateCode')
  for (let index = 0; index < scripts.length; index++ ) {
    scripts[index].remove()
  }
}
