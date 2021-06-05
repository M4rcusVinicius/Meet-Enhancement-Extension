function setButtons() {
  document.getElementById('start').addEventListener('click', start)
}

function start() {
  // console.log('Start')
  const button = document.getElementById('start')
	button.removeEventListener('click', start)
  button.innerHTML = innerStart
  button.id = 'stop'
  button.addEventListener('click', stop)
}

function stop() {
  // console.log('Stop')
  const button = document.getElementById('stop')
	button.removeEventListener('click', stop)
  button.innerHTML = innerStop
  button.id = 'start'
  button.addEventListener('click', start)
}


var innerStart = `
  <div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">play_arrow</i><span jsname="V67aGc" class="VfPpkd-vQzf8d">Iniciar</span>
`

var innerStop = `
  <div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">stop</i><span jsname="V67aGc" class="VfPpkd-vQzf8d">Parar</span>
`

setButtons()