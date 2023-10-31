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
a = result

(function(){
    if (a <= 0)  {
        result = "Invalid";
        console.log(" " + result);
   
    }else if (a == 5 ) {
        result = "Game Over";
        console.log(" " + result);
        return;
    }
});