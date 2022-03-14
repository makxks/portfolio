let arrowStart = 15;
let arrowTarget = 30;

function moveArrow(targetY, startY, duration) {
    let start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        let time = timestamp - start;
        let percent = Math.min(time / duration, 1);
        let heightOfArrow = startY + (targetY - startY) * percent;
        let styleString = "" + heightOfArrow + "px";

        arrow.style.bottom = styleString;

        if (time < duration) {
            window.requestAnimationFrame(step);
        } else {
            moveArrow(startY, targetY, 1000)
        }
    })
}

function setArrowPosition() {
    arrowStart = body.offsetWidth < 600 ? 0 : 15;
    arrowTarget = body.offsetWidth < 600 ? 10 : 30;
}

setArrowPosition();

moveArrow(arrowTarget, arrowStart, 1000);