var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.font="30px Arial";
c.fillText("Welcome to My Game", 10, 50);
c.fillText("1. Load", 10, 100);
c.fillText("2. Save", 10, 150);
c.fillText("3. Play", 10, 200);
c.fillText("4. Help", 10, 250);
c.fillText("5. Quit", 10, 300);
c.fillText("Make a Selection.", 10, 350);

// Prompt Menu

result = Number(prompt("Make a Selection: "));
a = Number(result)

if (a <= 0 ) {
    result = "Invalid";
    console.log(" " + result); 
}

if (a > 5 ) {
    result = "Invalid";
    console.log(" " + result); 
}
if (a == 1 ) {
    result = "Loading";
    console.log(" " + result); 
}

if (a == 2) {
    result = "Saving";
    console.log(" " + result); 
}

if (a == 3) {
    result = "Playing";
    console.log(" " + result); 
}
  
if (a == 4)  {
    result = "Helping";
    console.log(" " + result); 
}

if (a == 5)  {
    result = "Game Over";
    console.log(" " + result);  
    setTimeout(() => {  close(); }, 2000);
}
//I am aware a loop is better here, but I couldn't make that work so I did this instead
