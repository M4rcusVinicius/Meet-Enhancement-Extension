const icons = { muted: "mic_off", unmuted: "mic_none", new: "person_add", leave: "logout" };

function display(change, unmuted) {
  if (unmuted.length > 0) {
    document.querySelector('#unmuted').innerHTML = ''
    unmuted.map((user) => {
      const container = createUser(user)
      container.classList.add('userContainerTalking')
      const element = document.createElement("i");
      element.classList.add("google-material-icons", "event");
      element.innerHTML = icons['unmuted'];
      element.classList.add(user.id + "microphone");
      if (user.blocked) { element.style.color = "rgb(26, 115, 232)"; }
      container.querySelector("#eventContainer").appendChild(element);
      document.querySelector('#unmuted').appendChild(container)
    })
  }
  change.map((user) => {
    const container = createUser(user)
    user.events.forEach((event) => {
      const element = document.createElement("i");
      element.classList.add("google-material-icons", "event");
      element.innerHTML = icons[event];
      if (event === "muted" || event === "unmuted") { element.classList.add(user.id + "microphone"); }
      if (user.blocked) { element.style.color = "rgb(26, 115, 232)"; }
      container.querySelector("#eventContainer").appendChild(element);
    });
    document.getElementById("history").appendChild(container);
    container.scrollIntoView({block: "end", behavior: "smooth"})
  });
}

function createUser(user) {
  const container = document.createElement("div");
  container.classList.add("userContainer");
  if (db.notDisturb && user.warn) { container.classList.add("temporary-alert-marker");}
  const date = new Date();
  const time = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
  container.innerHTML = userConstructor(user.name, user.image, time);
  container.addEventListener("click", () => { block({ id: user.id, image: user.image, name: user.name }); });
  return container
}

const userConstructor = (name, image, time) => `
  <div class="userInformation">
    <img
      aria-hidden="true"
      src="${image}"
      class="userImage"
    />
    <div class="userName"><span>${name}</span></div>
  </div>
  <div class="userEvents">
    <div class="eventList" id="eventContainer"></div>
    <div class="time">${time}</div>
  </div>
`;
