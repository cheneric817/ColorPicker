//JS file for colorGame.html
//generate random colors
var colors = generateRandomColors(6);
//select the squares
var squares = document.querySelectorAll(".square");
//pick a random color
var pickedColor = pickColor();
//select the <span> "colorDisplay" from the HTML doc
var colorDisplay = document.getElementById("colorDisplay");
//select the <span> "message" from the HTML doc
var messageDisplay = document.querySelector("#message");
//select h1
var h1 = document.querySelector("h1");


//make the h1 topic display the RGB data of pickedColor
colorDisplay.textContent = pickedColor;
//assign the squares different colors
for(i = 0; i < squares.length ; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //get color of clicked square
    var clickedColor = (this.style.background);
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
      //display correct message & change h1 background to correct color
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      //if clicked on the wrong one, it fades out to the background
      this.style.background = "#232323";
      //display messageDisplay when gussed wrong
      messageDisplay.textContent = "Try Again";
    }
  });
}


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
