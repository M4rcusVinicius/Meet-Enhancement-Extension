function display(change) {
  console.table(change)
  change.map(user => {
    const container = document.createElement('div')
    container.classList.add('user')
    container.innerHTML = userConstructor(user.name, user.image)
    document.getElementById('history').appendChild(container)
  })
}

const userConstructor = (name, image) => `
  <div class="userInfo">
    <img aria-hidden="true" alt="" src="${image}" class="userImage">
    <div class="UserNameWrapper">
      <span class="userName">${name}</span>
    </div>
  </div>
`