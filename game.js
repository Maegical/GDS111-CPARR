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
c.fillText("6. ", 10, 350);

// Prompt Menu

 const playerArr = ["1", "2", "3", "4", "5"]; //ID

let playerID = prompt("Enter player ID: ");

let validUser = false; 
for(let i=0; i < playerArr.length; i++){
    if (playerID == playerArr.length[i]) {
            validUser = true;
        
    } 
}

if (validUser == true) {
    console.log("Welcome to the game!");
} else{
    console.log("Go away hacker ...");
} 