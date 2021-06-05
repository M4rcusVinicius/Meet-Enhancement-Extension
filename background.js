function background()  {
  try {
    if (document.querySelector('.R3Gmyc')) {
      console.clear()
      dashboard(() => { buttons() })
    } else {
      console.count('O pacote de aprimoramento do Google Meet não pode ser carregado')
      setTimeout(background, 2000)
    }
  } catch (error) {
    setError('Error on start meet enhancement package', error, true)
  }
}

const db = {
  observerTimer: 0,
  previous: {}
}

background()