/* =========================================================== "/" 

  Message: Console identifier 
  URL: HTML relative path ( browser.extension.getURL() )
  ID: html id
  HTML: DOM element object
  Style: {
    src: style relative path
    id: style ID
  }

/" =========================================================== */


function injector(message, url, id, html, style) {
  try {

  } catch(err) { }
}

function injectHTML(message, url, id, html) {
  const xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      element.html.innerHTML = this.responseText;
      document.querySelector(element.place).appendChild(element.html)
    }
  };
  xml.open("GET", element.url, true);
  xml.send();
  xml.onerror = err => { 
    error('Error on create XML', [
      ['Message: ', element.message],
      ['Path: ', element.url],
      ['ID: ', element.id],
      ['HTML: ', element.id],
      ['Style: ', element.id],
    ], error )
  }
  xml.onloadend = callback
}