function display(change) {
  change.map((user) => {
    const container = document.createElement("div");
    container.classList.add("user");
    const date = new Date()
    const time = date.getHours() + ':' + date.getMinutes()
    container.innerHTML = userConstructor(user.name, user.image, time);
    let events = ''
    user.events.forEach(event => {
      const icons = {
        muted: 'mic_off',
        unmuted: 'mic_none',
        new: 'person_add',
        leave: 'logout'
      }
      events += eventConstructor(icons[event])
    })
    container.querySelector('#eventContainer').innerHTML = events
    document.getElementById("history").appendChild(container);
  });
}
const userConstructor = (name, image, time) => `
  <div class="userInfo">
    <img aria-hidden="true" alt="" src="${image}" class="userImage" data-iml="2680963">
    <div class="UserNameWrapper">
      <span class="userName">${name}</span>
    </div>
  </div>
  <div class="events">
    <div class="events" id="eventContainer"></div>
    <div class="time">${time}</div>
  </div>
`;

function eventConstructor(event, color) {
  return `<i aria-hidden="true" ${color ? `style="color: ${color}; "` : ""}class="google-material-icons event" >${event}</i>`
} 