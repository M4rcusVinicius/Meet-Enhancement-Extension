function trigger()  {
  try {
    console.log('Start infiltrate script')
    buttons()
    unmute()
  } catch (error) {
    console.log('Error on trigger infiltrate code', error)
    alert('Error on trigger infiltrate code')
  }
}

trigger()