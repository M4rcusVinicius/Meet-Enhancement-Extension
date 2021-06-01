const constructor = () => {
  console.log('Constructor')
  const iFrame  = document.createElement ("iframe");
  iFrame.src = browser.extension.getURL('dashboard/home.html');
  document.body.insertBefore(iFrame, document.body.firstChild);
}

constructor()