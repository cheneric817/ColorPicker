//JS file for colorGame.html
//create an array of colors
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"]

//select the squares
var squares = document.querySelectorAll(".square");
//set a picked color to be the forth color in the array
var pickedColor = colors[3];
//select the <span> "colorDisplay" from the HTML doc
var colorDisplay = document.getElementById("colorDisplay");
//select the <span> "message" from the HTML doc
var messageDisplay = document.querySelector("#message");

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
      //display correct message
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
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
