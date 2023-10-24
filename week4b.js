var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// hi :>

var c = canvas.getContext('2d');
c.font="30px Arial";
c.fillText("Welcome to My Game", 10, 50);

let age = 18;
age = age + 1;
console.log("You are now " + age + " years old.");

age++; //short-hand
console.log("You are now " + age + " years old.");

let ammo = 6;
ammo = ammo - 1; //long-hand
ammo--; //short hand
console.log("ammo left in chamber: " + ammo);

let balance = 0;
balance = balance + 4.18
balance = balance - 0.50 
console.log(" You pay: " + balance);