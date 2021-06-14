function buttons() {
  try {
    const listener = [
      ['.ov7jof > span:nth-child(1) > button:nth-child(1)', openConfig],
      ['div.r6xAKc:nth-child(1) > span:nth-child(1) > button:nth-child(1)', close],
      ['.SGP0hd > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)', open],
      ['div.r6xAKc:nth-child(3) > span:nth-child(1) > button:nth-child(1)', close],
      ['#start', start],
      ['#mute', mute],
      ['#openMutedList', openMutedList],
      ['#openSetMuted', openSetMuted],
      ['#closeBlock', openMutedList],
    ]
    listener.forEach(button => {
      console.log('Button:', button)
    	document.querySelector(button[0]).addEventListener('click', button[1])
    })
  } catch (error) { setError('Error on add event listener in buttons', error, true) }
}

// ========================================================================================== //

function open() {
  try {
    document.getElementById('dash').style.display = 'block'
    document.getElementById('configuration').style.display = 'none'
    document.getElementById('mutedConfig').style.display = 'none'
    document.getElementById('setMuted').style.display = 'none'
  } catch(error) { setError('Error on open dashboard', error) }
}

function close() {
  try {
    document.getElementById('configuration').style.display = 'none'
    document.getElementById('dash').style.display = 'none'
    document.getElementById('mutedConfig').style.display = 'none'
    document.getElementById('setMuted').style.display = 'none'
  } catch(error) { setError('Error on close dashboard', error) }
}

function openConfig() {
  try {
    document.getElementById('dash').style.display = 'none'
    document.getElementById('configuration').style.display = 'block'
    document.getElementById('mutedConfig').style.display = 'none'
    document.getElementById('setMuted').style.display = 'none'
  } catch(error) { setError('Error on open dashboard', error) }
}

function openMutedList() {
  document.getElementById('configuration').style.display = 'none'
  document.getElementById('dash').style.display = 'none'
  document.getElementById('mutedConfig').style.display = 'block'
  document.getElementById('setMuted').style.display = 'none'
}

function openSetMuted() {
  document.getElementById('configuration').style.display = 'none'
  document.getElementById('dash').style.display = 'none'
  document.getElementById('mutedConfig').style.display = 'none'
  document.getElementById('setMuted').style.display = 'block'
  usersForBlock()
}

// ========================================================================================== //

function mute() {
  try {
    const button = document.getElementById('mute')
    button.removeEventListener('click', mute)
    button.innerHTML = '<div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">volume_up</i><span class="VfPpkd-vQzf8d">Ativar som</span>'
    button.id = 'unmute'
    button.addEventListener('click', unmute)
    Object.values(document.querySelectorAll('audio')).map(audio => {
      audio.muted = true
    })
  } catch(error) { setError('Error on mute button', error, true) }
}

function unmute() {
  try {
    const button = document.getElementById('unmute')
    button.removeEventListener('click', unmute)
    button.innerHTML = '<div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">volume_off</i><span class="VfPpkd-vQzf8d">Desativar som</span>'
    button.id = 'mute'
    button.addEventListener('click', mute)
    Object.values(document.querySelectorAll('audio')).map(audio => {
      audio.muted = true
    })
  } catch(error) { setError('Error on start button', error, true) }
}

function start() {
  try {
    const button = document.getElementById('start')
    button.removeEventListener('click', start)
    button.innerHTML = '<div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">stop</i><span class="VfPpkd-vQzf8d">Parar</span>'
    button.id = 'stop'
    button.addEventListener('click', stop)
    db.play = true
    db.observer = setTimeout(observer, 1000);
  } catch(error) { setError('Error on start button', error, true) }
}

function stop() {
  try {
    const button = document.getElementById('stop')
    button.removeEventListener('click', stop)
    button.innerHTML = '<div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-RLmnJb"></div><i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">play_arrow</i><span class="VfPpkd-vQzf8d">Iniciar</span>'
    button.id = 'start'
    button.addEventListener('click', start)
    db.play = false
    clearTimeout(db.observer)
  } catch(error) { setError('Error on stop button', error, true) }
}