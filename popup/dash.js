
const print = (...message) => {
  function send(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "print",
      message: message
    });
  }
  
  browser.tabs
  .query({ active: true, currentWindow: true })
  .then(send)
}

function listenForClicks() {
  document.addEventListener("click", () => {
    print('Teste', 123, {teste: 'Teste', 123: 123})
  });
}

function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  print('There was an error loading the extension:', error)
}

browser.tabs
  .executeScript({ file: "/scripts/watch.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
