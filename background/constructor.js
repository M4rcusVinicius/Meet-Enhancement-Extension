const constructor = () => {

  const xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var div = document.createElement("div");
      div.innerHTML = this.responseText;
      document.body.insertBefore(div, document.body.firstChild);
    } else {
      console.log("files not found");
    }
  };

  xml.open("GET", browser.extension.getURL("resources/dashboard.html"), true);
  xml.send();
};


constructor();
