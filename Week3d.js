console.log("Hello! Week 3 D reporting!");

console.log("<<<Main Menu>>>");
console.log("               ");
console.log("<1> Instructions");
console.log("<2> Play Game");
console.log("<3> Quit");
console.log("               ");
console.log("Select a number: ");

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var a = 0;
var b = 0;
var difference = 0;
a = prompt("enter a value: ");
a = Number(a);
b = prompt("enter another value: ");
b = Number(b);

if (a > b) { 
    difference = a - b;
} else { 
    difference = b - a;
}

console.log("The difference of a & b is = " + difference);  

// hi :>

var c = canvas.getContext('2d');
c.font="30px Arial";
c.fillText("Welcome to My Game", 10, 50);