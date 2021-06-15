function initButton() {
  const element = document.createElement("div");
  element.id = "initButton";
  element.classList.add("initButton");
  element.innerHTML = `<i class="google-material-icons initIcon" aria-hidden="true">view_in_ar</i>`;
  const style = {
    css: `.initButton{position:absolute;top:40%;left:0;border-radius:0 5px 5px 0;z-index:1000;background-color:#1a73e8;padding:10px;width:25px;height:40px;color:#fff;display:flex;align-items:center;cursor:pointer;transition:.2s}.initButton:hover{background-color:#155dc1}`,
    id: "initCSS",
  };
  quickBuild(element, "body", style);
  onClick("#initButton", init);
  print("Create init button", [
    ["Element:", element],
    ["Style:", style],
  ]);
}

// =========================================================== //

function init() {
  remove("#initButton", "Remove init button");
  remove("#initCSS", "Remove init style");
  const html = document.createElement("div");
  html.id = "dashboard";
  html.classList.add("WUFI9b");
  constructor(
    "Create dashboard",
    browser.extension.getURL("Structure/dashboard/index.html"),
    "dashboard",
    html,
    ".R3Gmyc",
    false,
    () => {
      onClick("#observer", () => {
        console.log("Observer");
      });
      onClick("#notDisturb", () => {
        console.log("Not disturb");
      });
    }
  );
}
