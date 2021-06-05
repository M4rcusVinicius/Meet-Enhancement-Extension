const onClick = (ev) => {
  const id = ev.target.id
  if (!id) { return; }
  switch (id) {
    case 'openDash': openDash(); break;
  }
}

const openDash = () => {
  const dash = document.querySelector('.dashboard')
  dash.style.left = 0
} 