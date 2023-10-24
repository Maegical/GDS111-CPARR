var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// hi :>

var c = canvas.getContext('2d');
c.font="30px Arial";
c.fillText("Welcome to My Game", 10, 50);

for (let i = 0; i < 5; i++) {
        console.log(i)
}

for (let i = 0; i < 5; i++) {
    console.log("Are we there yet?");
}

let text ="";
let i = 0;
do { 
    text = text + i + "<br>";
    i++;
}
while (i < 5);
console.log(text);

let j=0; 
while (j <3){ 
    console.log("the number is " + j);
    j++;
}