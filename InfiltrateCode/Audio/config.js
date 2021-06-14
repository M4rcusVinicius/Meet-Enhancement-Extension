function usersForBlock() {
	const users = getUsers()
  var list = '' 
  users.map(user => {
    if (db.muted.indexOf(user.name) !== -1) { return }
    const item = toBlockConstructor(user.name, user.image)
    list += item
  })
  document.querySelector('#toBlockList').innerHTML = list
  usersForBlockEventListener()
}

function usersForBlockEventListener() {
  const list = document.querySelectorAll('#toBlockList > .user')
 	Object.values(list).map(item => item.addEventListener('click', blockUser))
}

function blockUser(ev) {
  const name = ev.target.querySelector('.userName').innerText
  console.log('Muted:', name)
  db.muted.push(name)
  openMutedList()
}

const toBlockConstructor = (name, image) => `
	<div class="user toBlock">
    <div class="userInfo">
      <img aria-hidden="true" alt="" src="${image}" class="userImage" data-iml="2680963">
      <div class="UserNameWrapper">
        <span class="userName">${name}</span>
      </div>
    </div>
  </div>
`;