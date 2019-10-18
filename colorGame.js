//JS file for colorGame.html
//generate number of squares for each mode
var numberSquares = 6;
//generate random colors
var colors = [];
//pick a random color
var pickedColor;
//select the squares
var squares = document.querySelectorAll(".square");
//select the <span> "colorDisplay" from the HTML doc
var colorDisplay = document.getElementById("colorDisplay");
//select the <span> "message" from the HTML doc
var messageDisplay = document.querySelector("#message");
//select h1
var h1 = document.querySelector("h1");
//select the "New Color" button
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//run the init() function to setup the modeButtons listeners and square listeners
init();


function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  //loop through modeButtons
  for(i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener ("click", function() {
      //the following two lines are usded to cancel the "selected" class after clicking one the modeButtons
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      //after removeing the "selected" class on both buttons, add the following line to add the "selected" class to the one that is clicked on
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numberSquares = 3;
      } else {
        numberSquares = 6;
      }
      reset();
    })
  }
}

function setupSquares() {
  for(i = 0; i < squares.length ; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function() {
      //get color of clicked square
      var clickedColor = (this.style.background);
      if(clickedColor === pickedColor) {
        //display correct message & change h1 background to correct color
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        //add in "play again?" button
        resetButton.textContent = "Play Again?";
      } else {
        //if clicked on the wrong one, it fades out to the background
        this.style.background = "#232323";
        //display messageDisplay when gussed wrong
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
    //generate all new color
    colors = generateRandomColors(numberSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //make messageDisplay goes away once we clicked on "Play Again?"
    messageDisplay.textContent = "";
    //After clicking "Play Again?", change the button text back to "New Colors"
    resetButton.textContent = "New Colors";
    //change colors of squares
    //use the for loop to check if there are three squares or six squares
    for(i = 0; i < squares.length; i++) {
      //if there's a color, display it, if not, don't display it
      if (colors[i]) {
        squares[i].style.display = "block"; //make sure all six sqaures are visible when playing hard mode
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }
    //reset h1 background to background color
    h1.style.background = "steelblue";
}

//setup reset button
resetButton.addEventListener("click", function(){
  reset();
})


//create a function that make all squares changes to the correct color when the guessing is correct
function changeColors(color) {
  //loop through all squares
  for(i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}


function pickColor() {
  //use Math.random to generate a random number from the colors array
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


//create a function that generate random colors
function generateRandomColors(num) {
  //make an array
  var arr = []
  //add num random colors to array
  for(i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return the array
  return arr;
}


//create a function to generate random RGB values
function randomColor(){
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);

  //remember to add spacing after each comma to fit the layout
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
