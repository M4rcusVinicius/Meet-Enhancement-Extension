function initButton() {
  const element = document.createElement('div')
  element.id = 'initButton'
  element.classList.add('initButton')
  element.innerHTML = `<i class="google-material-icons initIcon" aria-hidden="true">view_in_ar</i>`
  const style = {
    css: `
      .initButton {
        position: absolute;
        top: 40%;
        left: 0;
        border-radius: 0 5px 5px 0;
      }
    `,
    id: 'initCSS'
  }
  console.log(element, 'body', style)
  quickBuild(element, 'body', style)
}