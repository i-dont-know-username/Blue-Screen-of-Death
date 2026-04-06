document.addEventListener('DOMContentLoaded', () => {
    const front = document.getElementById('front')
    const click = document.getElementById('click')
    const body = document.documentElement
    const enterFullscreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
          element.msRequestFullscreen();
        }
      }

    front.addEventListener('click', e => {
      body.style.cursor = "none"
      click.style.opacity = "0";
        enterFullscreen()
        setTimeout(() => {
            front.remove()
        }, 5000)

        setTimeout(() => {
          const counter = document.getElementById('counter')
          let percent = 1
      
        const interval = setInterval(() => {
              percent++
              counter.innerText = percent
              if(percent === 100){
                clearInterval(interval)
                return alert("wow you actually finish this💀💀💀")
              }
          }, 10000)
        }, 5000)
    })
})

    const forbiddenKeys = ['c', 'u', 's', 'i', 'p']; 
    
    if (event.ctrlKey && forbiddenKeys.includes(event.key.toLowerCase())) {
      event.preventDefault();
      return false;
    }

    // Disable F12 (Developer Tools)
    if (event.key === 'F12') {
      event.preventDefault();
      return false;
    }
  });
