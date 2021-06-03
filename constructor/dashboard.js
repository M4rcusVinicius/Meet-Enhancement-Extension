const dashboard = (callback = () => {}) => {
  try {
    console.log('>> Inject XML dashboard')
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
        console.log('>> XML dashboard complete')
      } else { console.log("Dashboard XML file not found"); }
    };
    xml.open("GET", browser.extension.getURL("resources/dashboard.html"), true);
    xml.send();
    xml.onloadend = callback

  } catch (error) { console.log('Error on constructor dashboard', error) }
}