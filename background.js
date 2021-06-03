function background()  {
  if (document.querySelector('.R3Gmyc')) {
    console.log('Iniciando pacote de aprimoramento')
    dashboard(() => {
      console.log('Dashboard callback')
      buttons()
    })
  } else {
    console.log('O pacote de aprimoramento do Google Meet não pode ser carregado')
    setTimeout(background, 1000)
  }
}

background()