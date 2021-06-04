const dashboard = (callback = () => {}) => {
  try {
    clearDashboard() // Clear previous dash on developer mode 
    
    console.log('Inject XML dashboard')
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        const wrapper = document.querySelector('.R3Gmyc')
        const container = document.createElement('div') 
        container.innerHTML = this.responseText;
        container.classList.add('WUFI9b')
        container.id = 'dash'
        container.style.display = 'none'
        container.style.zIndex = 10000
        wrapper.appendChild(container)
        console.log('XML dashboard complete')
      } else { console.log("Dashboard XML file not found"); }
    };
    xml.open("GET", browser.extension.getURL("resources/dashboard.html"), true);
    xml.send();
    xml.onerror = error => {
      console.log('Error on generate XML', error)
    }
    xml.onloadend = callback

  } catch (error) { console.log('Error on constructor dashboard', error) }
}

function clearDashboard() {
  console.log('Clear previous dash')
  const backDash = document.querySelectorAll('#dash')
  for (let index = 0; index < backDash.length; index++ ) {
    console.log('Clear:', backDash[index])
    backDash[index].remove()
  }
}