function buttons() {
  try {
    const listener = [
      ['.ov7jof > span:nth-child(1) > button:nth-child(1)', open],
      ['div.r6xAKc:nth-child(1) > span:nth-child(1) > button:nth-child(1)', close],
      ['.SGP0hd > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)', close],
      ['div.r6xAKc:nth-child(3) > span:nth-child(1) > button:nth-child(1)', close],
      ['#start', start],
    ]
    listener.forEach(button => {
    	document.querySelector(button[0]).addEventListener('click', button[1])
    })
  } catch (error) { setError('Error on add event listener in buttons', error, true) }
}

// ========================================================================================== //

function open() {
  try {
    document.getElementById('dash').style.display = 'block'
  } catch(error) { setError('Error on open dashboard', error) }
}

function close() {
  try {
    document.getElementById('dash').style.display = 'none'
  } catch(error) { setError('Error on close dashboard', error) }
}

// ========================================================================================== //

function start() {
  try {
    const button = document.getElementById('start')
    button.removeEventListener('click', start)
    button.innerHTML = '<div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">stop</i><span class="VfPpkd-vQzf8d">Parar</span>'
    button.id = 'stop'
    button.addEventListener('click', stop)
    observer()
  } catch(error) { setError('Error on start button', error, true) }
}

function stop() {
  try {
    const button = document.getElementById('stop')
    button.removeEventListener('click', stop)
    button.innerHTML = '<div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">play_arrow</i><span class="VfPpkd-vQzf8d">Iniciar</span>'
    button.id = 'start'
    button.addEventListener('click', start)
    observer()
  } catch(error) { setError('Error on stop button', error, true) }
}