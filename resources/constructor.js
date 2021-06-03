function listener() {
	try {
    const button = document.querySelector('.ov7jof > span:nth-child(1) > button:nth-child(1)')
    console.log('Button', button)
    button.addEventListener('click', () => { open() })

    const info = document.querySelector('div.r6xAKc:nth-child(1) > span:nth-child(1) > button:nth-child(1)')
    info.addEventListener('click', () => { close() })
    const users = document.querySelector('.SGP0hd > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)')
    users.addEventListener('click', () => { close() })
    const chat = document.querySelector('div.r6xAKc:nth-child(3) > span:nth-child(1) > button:nth-child(1)')
    chat.addEventListener('click', () => { close() })
  } catch(error) {
    console.log('Error on constructor')
  }
}

function open() {
  console.log('Open')
  document.getElementById('dash').style.display = 'block'
}

function close() {
  console.log('Close')
  document.getElementById('dash').style.display = 'none'
}

function constructor() {
	try {
    console.log('Constructor')
    const wrapper = document.querySelector('.R3Gmyc')
    const container = document.createElement('div') 
    container.classList.add('WUFI9b')
    container.id = 'dash'
    container.style.display = 'none'
    container.innerHTML = dash
    container.style.zIndex = 10000
  	wrapper.appendChild(container)
  } catch(error) {
    console.log('Error on constructor')
  }
}

function a(html) {
  document.getElementById('dash').innerHTML = html
}

var dash = `
<div class="CYZUZd">
  <div class="J8vCN zHGix" role="heading" aria-level="2" tabindex="-1">
    Dashboard
  </div>
  <div class="VUk8eb">
    <div jsaction="JIbuQc:hR1TY;rcuQ6b:npT2md" jscontroller="AXYg3e">
      <span data-is-tooltip-wrapper="true"
        ><button
          class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ IWtuld wBYOYb"
          jscontroller="soHxf"
          jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef"
          aria-label="Fechar"
          data-tooltip-enabled="true"
          data-tooltip-id="tt-c15"
          style="
            --mdc-ripple-fg-size: 28px;
            --mdc-ripple-fg-scale: 1.7142857142857142;
            --mdc-ripple-left: 10px;
            --mdc-ripple-top: 10px;
          "
        >
          <div class="VfPpkd-Bz112c-Jh9lGc"></div>
          <i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true"
            >close</i
          >
        </button>
        <div
          class="EY8ABd-OWXEXe-TAWMXe"
          role="tooltip"
          aria-hidden="true"
          id="tt-c15"
        >
          Fechar
        </div></span
      >
    </div>
  </div>
</div>
<div class="hWX4r"></div>

`


constructor()
listener()