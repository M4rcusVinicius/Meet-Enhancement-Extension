
const init = () => {
  if (window.hasRun) { return; }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((context) => {
    switch (context.command) {
      case 'print': console.log(...context.message); break;
    }
  });
};


(() => {
  try { init(); } 
  catch (err) {
    console.log("There was an error loading the extension:", err);
  }
})();