document.addEventListener('DOMContentLoaded', () => {
    const front = document.getElementById('front');
    const click = document.getElementById('click');
    const body = document.documentElement;
    const canvas = document.getElementById('myCanvas');
    const counter = document.getElementById('counter');

    if (!front || !click || !canvas || !counter) {
        console.error("Missing required elements in HTML");
        return;
    }

    const enterFullscreen = () => {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        else if (el.msRequestFullscreen) el.msRequestFullscreen();
    };

    const requestPointerLock = () => {
        if (canvas.requestPointerLock) canvas.requestPointerLock();
        else if (canvas.mozRequestPointerLock) canvas.mozRequestPointerLock();
        else if (canvas.webkitRequestPointerLock) canvas.webkitRequestPointerLock();
    };

    front.addEventListener('click', () => {
        body.style.cursor = "none";
        click.style.opacity = "0";

        enterFullscreen();
        requestPointerLock();

        // Remove front after 5 seconds
        setTimeout(() => {
            front.remove();
        }, 5000);

        // Start counter after 5 seconds
        setTimeout(() => {
            let percent = 1;

            const interval = setInterval(() => {
                percent++;
                counter.innerText = percent;

                if (percent >= 100) {
                    clearInterval(interval);
                    alert("wow you actually finished this 💀");
                }
            }, 10000);

        }, 5000);
    });
});
