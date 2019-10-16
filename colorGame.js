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
//assign the squares different colors
for(i = 0; i < squares.length ; i++) {
  squares[i].style.background = colors[i];
}
