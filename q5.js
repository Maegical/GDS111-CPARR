var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.font="30px Arial";
c.fillText("Welcome to My Game", 10, 50);
c.fillText("1. Change Actions", 10, 100);
c.fillText("2. Button Layout", 10, 150);
c.fillText("3. Key Bindings", 10, 200);
c.fillText("4. OnEvent Scripts", 10, 250);
c.fillText("5. Main Menu Bar", 10, 300);
c.fillText("6. Misc Options", 10, 350);
c.fillText("7. Unlock Dragging", 10, 400);
c.fillText("8. Show Button IDs", 10, 450);
c.fillText("9. Show Action IDs", 10, 500);
c.fillText("10. COPY", 10, 550);
c.fillText("11. PASTE", 10, 600);
c.fillText("Select a number:", 10, 650);

for (let i = 0; i < 10; i++){
        if (i ==3) { break; }
}


function changeActions() {
    console.log("I'm inside Change Actions function.");
    window.alert("Accessing Action Change...");
}

function buttonLayout() {
    console.log("Im inside Button Layout function.");
    window.alert("Decyphering Button Layout...");
}


function keyBindings() {
    console.log("I'm inside Key Bindings function.");
    window.alert("Accessing Key Binds...");
}


function onEventScripts() {
    console.log("I'm inside On Event Scripts function.");
    window.alert("Accessing Event Scripts...");
}

function mainMenuBar() {
    console.log("I'm inside Main Menu Bar function.");
    window.alert("Accessing Main Menu Bar...");
}

function miscOptions() {
    console.log("I'm inside Misc Options function.");
    window.alert("Accessing Misc Options...");
}

function unlockDragging() {
    console.log("I'm inside Unlock Dragging function.");
    window.alert("Unlocking Dragging...");
}

function showButtonIDs() {
    console.log("I'm inside Show Button IDs function.");
    window.alert("Showing Button IDs...");
}

function showActionIDs() {
    console.log("I'm inside Show Action IDs function");
    window.alert("Showing Action IDs...");
}

function copy() {
    console.log("I'm inside Copy function.");
    window.alert("Copying...");
}

function paste() {
    console.log("I'm inside Paste function.");
    window.alert("Pasting...");
}

result = Number(prompt("Make a Selection: "));
a = Number(result)

if (a < 0 ) {
    result = "Invalid Entry";
    console.log(" " + result); 
}

if (a > 11 ) {
    result = "Invalid Entry";
    console.log(" " + result); 
}
if (a == 0 ) {
    result = "The End";
    console.log(" " + result); 
}

if (a == 1 ) {
    result = "Loading Game";
    console.log(" " + result); 
}

if (a == 2) {
    result = "Saving status";
    console.log(" " + result); 
}

if (a == 3) {
    result = "Lets Play!";
    console.log(" " + result); 
}
  
if (a == 4)  {
    result = "Sending in some help!";
    console.log(" " + result); 
}

if (a == 5)  {
    result = "Game Over!";
    console.log(" " + result);  
    setTimeout(() => {  close(); }, 2000);
}