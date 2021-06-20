const icons = { muted: "mic_off", unmuted: "mic_none", new: "person_add", leave: "logout" };

function display(change) {
  change.map((user) => {
    const container = document.createElement("div");
    container.classList.add("userContainer");
    const date = new Date();
    const time = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
    container.innerHTML = userConstructor(user.name, user.image, time);
    user.events.forEach((event) => {
      const element = document.createElement("i");
      element.classList.add("google-material-icons", "event");
      element.innerHTML = icons[event];
      if (event === "muted" || event === "unmuted") { element.classList.add(user.id + "microphone"); }
      if (user.blocked) { element.style.color = "#ea4335"; }
      container.querySelector("#eventContainer").appendChild(element);
    });
    document.getElementById("history").appendChild(container);
    container.addEventListener("click", () => {
      block(user);
    });
    print("Display user in history" + user.id, [
      ["Name", user.name],
      ["ID", user.id],
      ["Time", time],
      ["Events", user.events],
      ["Container", container],
      ["User", user],
    ]);
  });
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
