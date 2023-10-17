console.log("Hello! Week 3 B reporting!");

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ammo = 100;
console.log(ammo);
console.log("ammo= "+ ammo);

ammo = prompt("type in the number of ammo: ");
console.log("The new entered ammo = " + ammo);

var a = 0;
var b = 0;
var sum =0;
a = prompt("enter a value: ");
a = Number(a);
b = prompt("enter another value: ");
b = Number(b);
sum = a + b;
console.log("The sum of a & b is = " + sum)

// hi :>

var c = canvas.getContext('2d');
c.font="30px Arial";
c.fillText("Welcome to My Game", 10, 50);