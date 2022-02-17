let tour = $(".tour");
let tourContent = $(".tour-content");

let fullWidth = tourContent.offsetWidth;
let fullHeight = tourContent.offsetHeight;

let squares = new Array();
let squaresStarted = false;
let isRipple = false;

let squaresByDistance = new Array();

//change to be a function of width of viewport

let squaresPerSide;
let squaresOffset;
let squareScaleStartSize;
let squareScaleUpperBound;
let squareScaleRippleSize;

// width < 900 do by width

function setNumberOfSquares(){
  let newNumberOfSquares =  
    tourContent.offsetWidth > 960 
    ? ((5 * tourContent.offsetWidth / 1300) > 1 ? 5 * tourContent.offsetWidth / 1300 : 2) 
    : ((5 * tourContent.offsetHeight / 900) > 1 ? 5 * tourContent.offsetHeight / 900 : 2);
  squaresPerSide = Math.round(newNumberOfSquares);
}

function setSquaresOffset(){
  let newOffset = tourContent.offsetWidth < 960 ? (600 / squaresPerSide) * tourContent.offsetWidth / 1300 : (600 / squaresPerSide) * tourContent.offsetHeight / 900;
  squaresOffset = newOffset;
}

function setSquaresScales(){
  let newScaleBase = tourContent.offsetWidth < 960 ? 1 * tourContent.offsetWidth / 1300 : 1 * tourContent.offsetHeight / 900;
  squareScaleStartSize = newScaleBase * 0.2;
  squareScaleUpperBound = newScaleBase * 2.8;
  squareScaleRippleSize = newScaleBase * 3.5;
}

function startSquares(){
  if(!squaresStarted){
    squaresStarted = true;
    setNumberOfSquares();
    setSquaresOffset();
    setSquaresScales();
    addSquares(squaresPerSide);
    squaresSequence(squaresOffset, squaresOffset, squareScaleUpperBound);
  }
}

function addSquares(numberOfSquares) {
  for(let i = 0; i < numberOfSquares; i++){
    let squaresRow = new Array();
    for(let j = 0; j < numberOfSquares; j++){
      let newSquare = addSquare();
      let startXPos = (fullWidth / 2) - newSquare.offsetWidth/2;
      let startYPos = (fullWidth / 2) - newSquare.offsetHeight/2;
      positionSquare(newSquare, startXPos, startYPos);
      squaresRow.push(newSquare);
    }
    squares.push(squaresRow);
  }
}

function squaresSequence(squareOffset, scale){
  setTimeout(() => { scaleAndFadeSquares(squareScaleStartSize) }, 100);
  setTimeout(() => { positionSquares(0, 0) }, 100);
  setTimeout(() => { changeGradients() }, 1000 );
  setTimeout(() => { scaleAndFadeSquares(squareScaleUpperBound) }, 2000);
  setTimeout(() => { positionSquares(squareOffset, squareOffset) }, 2000);
  setTimeout(() => { setTransformAnimationTime(0.2) }, 2500);
  setTimeout(() => { ripple() }, 3000);
  setTimeout(() => { setTransformAnimationTime(1) }, 4600);
  setTimeout(() => { moveSquaresAway(-1000, tourContent.offsetWidth + 1000, 100) }, 5300);
}

function positionSquares(offsetX, offsetY){
  let centerX = tourContent.offsetWidth/2;
  let centerY = tourContent.offsetHeight/2;
  let offsetValueX = (((squares[0].length-1) / 2) * offsetX);
  let offsetValueY = (((squares[0].length-1) / 2) * offsetY);
  for(let i = 0; i < squares.length; i++){
    for(let j = 0; j < squares[i].length; j++){
      let newXPos = centerX - offsetValueX + (i * offsetX) - squares[i][j].offsetWidth/2;
      let newYPos = centerY - offsetValueY + (j * offsetY) - squares[i][j].offsetHeight/2;
      positionSquare(squares[i][j], newXPos, newYPos);
    }
  }
}

function addSquare(){
  let oneSquare = document.createElement("span");

  oneSquare.style.width = "30px";
  oneSquare.style.height = "30px";
  oneSquare.style.position = "absolute";
  oneSquare.style.backgroundColor = "transparent";
  oneSquare.style.border = "2px solid var(--accent-color)";
  oneSquare.style.borderRadius = "4px";
  oneSquare.style.boxShadow = "0 0 2px 2px var(--accent-color)";
  oneSquare.style.transform = "scale(0)";
  oneSquare.style.transition = "all 1s, transform 0.7s, background-color 0.2s";
  oneSquare.style.transitionTimingFunction = "cubic-bezier(0.2,2,0.6,1)";
  oneSquare.style.zIndex = "3";

  oneSquare.addEventListener("transitionend", (e) => {
    if(e.propertyName == "background-color"){
      oneSquare.style.backgroundColor = "transparent";
      oneSquare.style.transform = "scale(" + squareScaleUpperBound/2  +  ")";
    }
    else if(e.propertyName == "transform" && isRipple){
      oneSquare.style.transform = "scale("+ squareScaleUpperBound +")";
    }
  })

  tourContent.appendChild(oneSquare);

  return oneSquare;
}

function positionSquare(element, xPos, yPos){
  element.style.top = "" + yPos + "px";
  element.style.left = "" + xPos + "px";
};

function scaleAndFadeSquares(scale){
  for (let i = 0; i < squares.length; i++){
    for (let j = 0; j < squares[i].length; j++){
      squares[i][j].style.opacity = "1";
      squares[i][j].style.transform = "scale(" + scale + ")";
    }
  }
}

function moveSquaresAway(left, right, delay) {
  let finalDelay = 0;
  isRipple = false;
  for(let i = 0; i < (squares.length - 1) / 2; i ++){
    for(let j = 0; j < (squares.length + 1) / 2; j++){
      setTimeout(() => { squares[i][j].style.left = "" + left + "px"; }, delay * (i * 4) + delay * j + delay * 1);
      setTimeout(() => { squares[squares.length - i - 1][j].style.left = "" + right + "px"; }, delay * (i * 4) + delay * j + delay * 2);
      setTimeout(() => { squares[i][squares[i].length - j - 1].style.left = "" + left + "px"; }, delay * (i * 4) + delay * j + delay * 3);
      setTimeout(() => { squares[squares.length - i - 1][squares[i].length - j - 1].style.left = "" + right + "px"; }, delay * (i * 4) + delay * j + delay * 4);
      finalDelay = delay * (i * 4) + delay * j + delay * 4;
    }
  }
  
  if(squaresPerSide % 2 != 0){
    for(let j = 0; j <= (squares.length - 1) / 2; j++){
      if(j == (squares.length - 1) / 2){
        setTimeout(() => { squares[(squares.length - 1) / 2][j].style.left = "" + left + "px"; }, finalDelay + delay * j + delay * 1);
      } else {
        setTimeout(() => { squares[(squares.length - 1) / 2][j].style.left = "" + left + "px"; }, finalDelay + delay * j);
        setTimeout(() => { squares[(squares.length - 1) / 2][squares[0].length - j - 1].style.left = "" + right + "px"; }, finalDelay + delay * j + delay * 1);
      }
    }
  }

  removeSquares();

  setTimeout(() => { startCircle(circle, circle2) }, (500 * squaresPerSide) + 400);
}

function removeSquares(){
  setTimeout(() => {
    for(let i = 0; i < squares.length; i++){
      for(let j = 0; j < squares[0].length; j++){
        tourContent.removeChild(squares[i][j]);
        squaresStarted = false;
      }
    }
    squares = new Array();
    squaresByDistance = new Array();
    changeBackGradients();
  }, 500 * squaresPerSide);
}

function setTransformAnimationTime(time){
  for(let i = 0; i < squares.length; i++){
    for(let j = 0; j < squares[0].length; j++){
      squares[i][j].style.transition = "all " + time + "s, background-color 0.2s";
    }
  }
}

function getSquaresByDistanceFromMiddle(squareArray){
  let middlePos;
  if(squareArray.length % 2 == 0){
    middlePosX = (squareArray[(squareArray.length / 2)][squareArray.length / 2].offsetLeft + squareArray[(squareArray.length / 2) - 1][(squareArray.length / 2) - 1].offsetLeft) / 2;
    middlePosY = (squareArray[(squareArray.length / 2)][squareArray.length / 2].offsetTop + squareArray[(squareArray.length / 2) - 1][(squareArray.length / 2) - 1].offsetTop) / 2;
  }
  else {
    middlePosX = squareArray[(squareArray.length - 1) / 2][(squareArray[0].length - 1) / 2].offsetLeft;
    middlePosY = squareArray[(squareArray.length - 1) / 2][(squareArray[0].length - 1) / 2].offsetTop;
  }

  for(let i = 0; i < squareArray.length; i++){
    for(let j = 0; j < squareArray[i].length; j++){
      let squareObj = Object.create({});
      squareObj.element = squareArray[i][j];
      squareObj.xPos = i;
      squareObj.yPos = j;

      let distX = Math.abs(squareArray[i][j].offsetLeft - middlePosX);
      let distY = Math.abs(squareArray[i][j].offsetTop - middlePosY);

      let distance = Math.sqrt(((distX**2) + (distY**2)));

      squareObj.distance = distance;

      squaresByDistance.push(squareObj);
    }
  }

  return sortSquaresByDistance(squaresByDistance);
}

function sortSquaresByDistance(squareArray){
  squareArray.sort((a, b) => {
      return(a.distance - b.distance);
  });
  return squareArray;
}

function ripple() {
  isRipple = true;
  let sortedSquares = getSquaresByDistanceFromMiddle(squares);

  let currentDistance = sortedSquares[0].distance;

  for(let i = 0; i< sortedSquares.length; i++){
    if(sortedSquares[i].distance > currentDistance){
      currentDistance = sortedSquares[i].distance;
    }

    setTimeout(() => {
      sortedSquares[i].element.style.backgroundColor = "var(--accent-color)";
      sortedSquares[i].element.style.transform = "scale(" + squareScaleRippleSize + ")";
    }, sortedSquares[i].distance * 1.4);
  }
}
