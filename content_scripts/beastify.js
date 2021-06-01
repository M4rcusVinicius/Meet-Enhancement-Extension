
const init = () => {
  if (window.hasRun) { return; }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    console.log('Message:', message)
  });
};


(() => {
  try { init(); } 
  catch (err) {
    console.log("There was an error loading the extension:", err);
  }
})();