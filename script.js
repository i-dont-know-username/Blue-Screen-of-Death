document.addEventListener('DOMContentLoaded', () => {
    const front = document.getElementById('front');
    const clickText = document.getElementById('click');
    const counter = document.getElementById('counter');
    const canvas = document.getElementById('myCanvas');

    // Prevent crashes if elements missing
    if (!front || !clickText || !counter) {
        console.error("Missing required elements");
        return;
    }

    // Disable right click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Disable text selection
    document.addEventListener('selectstart', e => e.preventDefault());

    const enterFullscreen = () => {
        const el = document.documentElement;
        if (el.requestFullscreen) return el.requestFullscreen();
        if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
        if (el.msRequestFullscreen) return el.msRequestFullscreen();
    };

    const lockPointer = () => {
        const el = canvas || document.body;
        if (el.requestPointerLock) el.requestPointerLock();
    };

    // IMPORTANT: attach click to FULL SCREEN AREA
    document.body.addEventListener('click', () => {
        // These MUST be inside a user gesture
        enterFullscreen().then(() => {
            lockPointer();
        });

        document.documentElement.style.cursor = "none";
        clickText.style.opacity = "0";

        setTimeout(() => {
            front.remove();
        }, 2000);

        // Start fake BSOD counter
        let percent = 0;
        const interval = setInterval(() => {
            percent++;
            counter.innerText = percent;

            if (percent >= 100) {
                clearInterval(interval);
                alert("wow you actually finished this 💀");
            }
        }, 80); // smoother animation
    }, { once: true }); // only trigger once
});
