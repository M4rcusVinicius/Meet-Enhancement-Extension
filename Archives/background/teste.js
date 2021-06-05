const dashboard = () => {
  const xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const div = document.createElement("div");
      div.innerHTML = this.responseText;
      document.body.insertBefore(div, document.body.firstChild);
    } else { // console.log("files not found"); }
  };
  xml.open("GET", browser.extension.getURL("resources/dashboard.html"), true);
  xml.send();
  xml.onloadend = addListener()
}

const styles = () => {
  const link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = browser.extension.getURL("resources/dashboard.css");
  link.media = 'all';
  document.querySelector('head').appendChild(link)
}

const addListener = () => {
  const buttons = document.querySelectorAll('.btn')
  // console.log('Listening buttons', buttons)
  for (const button in buttons) {
    // console.log('Listening:', button)
    button.addEventListener('click', onClick)
  }
}

dashboard()
styles()