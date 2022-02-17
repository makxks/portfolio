function moveArrow(targetY, startY, duration){
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if(!start) start = timestamp;
    let time = timestamp - start;
    let percent = Math.min(time/duration, 1);
    let heightOfArrow = startY + (targetY - startY) * percent;
    let styleString = "" + heightOfArrow + "px";

    arrow.style.bottom = styleString;

    if (time < duration){
      window.requestAnimationFrame(step);
    }
    else {
      moveArrow(startY, targetY, 1000)
    }
  })
}

moveArrow(30, 15, 1000);
