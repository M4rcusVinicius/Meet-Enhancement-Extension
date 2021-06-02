const onClick = (ev) => {
  const id = ev.target.id
  console.log("Event:", id, ev)
  if (!id) { return; }

  switch (id) {
    case 'openDash': openDash(); break;
  }
}

const openDash = () => {
  const dash = document.querySelector('.dashboard')
  dash.style.left = 0
} 