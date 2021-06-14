/* =========================================================== "/" 

  Message: Console identifier 
  URL: HTML relative path ( browser.extension.getURL() )
  ID: html id
  HTML: DOM element object
  Place: Query for parent element
  Style: {
    src: style relative path
    id: style ID
  }

/" =========================================================== */


function injector(message, url, id, html, place, style, callback) {
  try {
    injectHTML(message, url, id, html, place, callback)
  } catch(err) { }
}

function injectHTML(message, url, id, html, place, callback) {
  const xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      html.innerHTML = this.responseText;
      document.querySelector(place).appendChild(html)
      print(message, [
        ['Message: ', message],
        ['Path: ', url],
        ['ID: ', id],
        ['HTML: ', html],
        ['Place: ', place],
        ['Callback: ', callback],
      ])
    }
  };
  xml.open("GET", url, true);
  xml.send();
  xml.onerror = err => { 
    error('Error - ' + message, [
      ['Message: ', message],
      ['Path: ', url],
      ['ID: ', id],
      ['HTML: ', html],
      ['Place: ', place],
      ['Callback: ', callback],
    ], err )
  }
  xml.onloadend = callback
}