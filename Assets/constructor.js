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


function constructor(message, url, id, html, place, style, callback) {
  try { 
    buildStyle(style, message)
    build(message, url, id, html, place, callback)
  } catch(err) { 
    print('Error - ' + message, [
      ['Message: ', message],
      ['Path: ', url],
      ['ID: ', id],
      ['HTML: ', html],
      ['Place: ', place],
      ['Style: ', style],
      ['Callback: ', callback],
    ])
  }
}

function buildStyle(style, message) {
  const link = document.createElement('link');
  link.rel = 'stylesheet'; 
  link.type = 'text/css';
  link.href = style.src;
  link.id = style.id
  document.querySelector('head').appendChild(link); 
  print('Style - ' + message, [
    ['SRC: ', style.src],
    ['ID: ', style.id],
  ])
}

function build(message, url, id, html, place, callback) {
  const xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      html.innerHTML = this.responseText;
      document.querySelector(place).appendChild(html)
      print('Complete - ' + message, [
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


// =========================================================== //


function quickBuild(element, place, style) {
  try {
    const css = document.createElement('style');
    css.id = style.id;
    css.innerHTML = style.css
    document.querySelector('head').appendChild(css); 
    document.querySelector(place).appendChild(element)
  } catch (err) {
    error('Error on quick build', [
      ['Element:', element],
      ['Place:', place],
      ['Style', style]
    ], err)
  }
}

// =========================================================== //

function onClick(query, func, type = 'click') {
  try {
    document.querySelectorAll(query).forEach(element => {
      element.addEventListener(type, func)
    })
    print('Add event listener - ' +  query, [
      ['Function:', func],
      ['Query:', query],
      ['Type:', type]
    ])
  } catch (err) {
    error('Error on add event listener - ' +  query, [
      ['Function:', func],
      ['Query:', query],
      ['Type:', type]
    ], err)
  }
}

// =========================================================== //

function remove(query, message = 'Remove elements') {
  try {
    console.groupCollapsed(message)
    document.querySelectorAll(query).forEach(element => {
      console.log('Remove: ' + query, element)
      element.remove()
    })
    console.groupEnd()
  } catch (err) {

  }
}