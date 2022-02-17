
// anim scripts for portfolio page
let tourContentText = $(".tour-content-text-heading");
let circle = $(".circle");
let circle2 = $(".circle2");
let innerCircle = $(".inner-circle");
let linearGradient = $(".horizontal-gradient");

let leftX;
let rightX;

let topY;
let bottomY;

let middleX;
let middleY;

let circleMainScale = 1;
let circleMaxScale;
let maxOpacity = "1";
let minOpacity = "0";

let animateCirclePath1;

let animateCirclePath2;

let startedCircle = false;
let startedCircle2 = false;

// width < 900 do by width

function setCircleScales(){
  let newCircleScale = tourContent.offsetWidth < tourContent.offsetHeight ? 1 * tourContent.offsetWidth / 1300 : 1 * tourContent.offsetHeight / 900;
  circleMainScale = newCircleScale;
  circleMaxScale = newCircleScale * 35;
}

function setTextSize(){
  let newSize = tourContent.offsetWidth < 960 ? 6 * tourContent.offsetWidth / 1300 : 6 * tourContent.offsetHeight / 900;
  tourContentText.style.fontSize = "" + newSize + "em";
}

function setPath(){
  let leftTopMod = tourContent.offsetWidth < 600 ? 0 : 1;
  let rightBottomMod = tourContent.offsetWidth < 600 ? 1 : 0;

  leftX = circle.offsetWidth * (circleMainScale * leftTopMod) - ((1 - leftTopMod) * circle.offsetWidth * circleMainScale);
  rightX = tourContent.offsetWidth - (2 - rightBottomMod) * (circle.offsetWidth) + rightBottomMod * (circle.offsetWidth * circleMainScale);

  topY = circle.offsetHeight * (circleMainScale * leftTopMod);
  bottomY = tourContent.offsetHeight - (2 - rightBottomMod) * (circle.offsetHeight) + rightBottomMod * (circle.offsetWidth * circleMainScale);

  middleX = tourContent.offsetWidth / 2 - (circle.offsetWidth) / 2;
  middleY = tourContent.offsetHeight / 2 - (circle.offsetHeight) / 2;

  animateCirclePath1 = [
    {"x": leftX, "y": topY},
    {"x": rightX, "y": topY},
    {"x": rightX, "y": bottomY},
    {"x": leftX, "y": bottomY},
    {"x": leftX, "y": middleY},
    {"x": middleX, "y": middleY}
  ];

  animateCirclePath2 = [
    {"x": rightX, "y": bottomY},
    {"x": leftX, "y": bottomY},
    {"x": leftX, "y": topY},
    {"x": rightX, "y": topY},
    {"x": rightX, "y": middleY},
    {"x": middleX, "y": middleY}
  ]
}

function animateCircle(element, path, i, duration){
  let start;

  let containerWidth = tourContent.offsetWidth;
  let containerHeight = tourContent.offsetHeight;

  let startY = element.offsetTop;
  let startX = element.offsetLeft;

  targetX = path[i]["x"];
  let diffX = targetX - startX;

  targetY = path[i]["y"];
  let diffY = targetY - startY;

  let stepNumber = 0;

  window.requestAnimationFrame(function step(timestamp) {
    stepNumber++;
    if(!start) start = timestamp;
    let time = timestamp - start;
    let percent = Math.min(time/duration, 1);
    if(i == 0){
      leftStyleString = "" + (startX + diffX * percent) + "px";
      topStyleString = "" + (startY + diffY * percent) + "px";
      element.style.left = leftStyleString;
      element.style.top = topStyleString;
    }
    else if(i%2 == 1){
      //x is changing
      styleString = "" + (startX + diffX * percent) + "px";
      element.style.left = styleString;
    } else {
      //y is changing
      styleString = "" + (startY + diffY * percent) + "px";
      element.style.top = styleString;
    }
    if(stepNumber % 2 == 0){
      let newCircle = addRandomCircle(element.offsetLeft, element.offsetTop);
      fadeCircle(newCircle);
    }

    if (time < duration){
      window.requestAnimationFrame(step);
    }
    else {
      if(i == 1){
        setTextSize();
        setText("I like to create responsive animations");
        showHideText(1);
      }
      if(i == 3){
        showHideText(0);
      }
      if(i + 1 > 5){
        finishCircleAnimation();
      } else {
        animateCircle(element, path, i + 1, 1000)
      }
    }
  })
}

function finishCircleAnimation(){
  circle.style.transform = "scale(" + circleMaxScale + ")";
  circle2.style.transform = "scale(" + circleMaxScale + ")";
  innerCircle.style.opacity = maxOpacity;
  startSquares();
}

function startCircle(element, element2){
  setCircleScales();
  setPath();
  element.style.transform = "scale(" + circleMainScale + ")";
  element2.style.transform = "scale(" + circleMainScale + ")";
  innerCircle.style.opacity = minOpacity;
}

function addRandomCircle(posX, posY){
  newCircle = document.createElement("span");
  newCircle.classList.add("circle-static");
  //let r = Math.random() * 255;
  //let g = Math.random() * 255;
  //let b = Math.random() * 255;
  //let colorString = `rgb(${r}, ${g}, ${b})`;
  //newCircle.style.borderColor = "#600";
  newCircle = tourContent.appendChild(newCircle);
  newCircle.style.top = "" + posY + "px";
  newCircle.style.left = "" + posX + "px";
  newCircle.style.transform = "scale(" + circleMainScale + ")";
  return newCircle;
}

function fadeCircle(element, delay = 0.1){
  setTimeout(() => { element.style.opacity = minOpacity }, delay);
  setTimeout(() => { tourContent.removeChild(element) }, 800);
}

function changeGradients() {
  innerCircle.style.top = "10px";
  innerCircle.style.opacity = minOpacity;
  linearGradient.style.opacity = maxOpacity;
}

function changeBackGradients(){
  linearGradient.style.opacity = minOpacity;
  innerCircle.style.top = "0";
  innerCircle.style.opacity = minOpacity;
}

setTimeout(() => startCircle(circle, circle2), 200);

circle.addEventListener("transitionend", (e) => {
  if(e.propertyName == "transform" && !startedCircle) {
    animateCircle(circle, animateCirclePath1, 0, 1000);
    startedCircle = true;
  }
  else if(e.propertyName == "transform" && startedCircle) {
    startedCircle = false;
  }
});

circle2.addEventListener("transitionend", (e) => {
  if(e.propertyName == "transform" && !startedCircle2) {
    animateCircle(circle2, animateCirclePath2, 0, 1000);
    startedCircle2 = true;
  }
  else if(e.propertyName == "transform" && startedCircle2) {
    startedCircle2 = false;
  }
});
