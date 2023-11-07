const playerArr = ["Mario", "Luigi", "Peach"]; //ID
const pwdArr = ["Bowser", "Daisy", "Mushroom"];// Passwords

let playerID = prompt("Enter player ID: ");
let password = prompt("Type password: ");

let validUser = false; 
for(let i=0; i < playerArr.length; i++){
    if (playerID == playerArr.length[i] &&
        password == pwdArr[i]) {
            validUser = true;
        
    }
}

if (validUser == true) {
    console.log("Welcome to the game!");
} else{
    console.log("Go away hacker ...");
}