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

for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}