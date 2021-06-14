const dashboard = (callback = () => {}) => {
  try {
    clearDashboard() // Clear previous dash on developer mode 
    
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        const wrapper = document.querySelector('.R3Gmyc')
        const container = document.createElement('div') 
        container.innerHTML = this.responseText;
        container.id = "meetUpgrade"
        container.style.zIndex = 10000
        wrapper.appendChild(container)
      }
    };
    xml.open("GET", browser.extension.getURL("resources/dashboard.html"), true);
    xml.send();
    xml.onerror = error => { setError('Error on generate XML', error, true) }
    xml.onloadend = callback

  } catch (error) { setError('Error on constructor dashboard', error, true) }
}

function clearDashboard() {
  console.log('Clear previous dash')
  const backDash = document.querySelectorAll('#meetUpgrade')
  for (let index = 0; index < backDash.length; index++ ) {
    backDash[index].remove()
  }
}