/**
 * Created by joseph on 11/2/16.
 */

var colors = [
    "rgb(26, 188, 156)",
    "rgb(46, 204, 113)",
    "rgb(231, 76, 60)",
    "rgb(236, 240, 241)",
    "rgb(149, 165, 166)",
    "rgb(241, 196, 15)"
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function () {
       //grab color of clicked square
        var clickedColor = this.style.background;
       //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
        } else {
            this.style.background = "#9b59b6"
            messageDisplay.textContent = "Try Again";
        }
    });
}