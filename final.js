let spinBtnObj = document.getElementById("spin");

spinBtnObj.addEventListener("click", spinner);

let quitBtnObj = document.getElementById("quit");

quitBtnObj.addEventListener("click", quit);

function spinner() {

        

    const minNum = 1;
    const maxNum = 100;
    const number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    console.log(number);


    result = Number(number);
    a = Number(result)
    playerNumber = Number(prompt("Guess the number. It is not reccomended to cancel or else computer could suffer "));
   
    let guesses = 0;
    let running = true;

    while(running){


        if(guesses >= 5) {
            console.log("Too many attempts! Refresh to try again!");
        
        }

        if(isNaN(playerNumber)){

            console.log("Refresh to enter a valid number. DO NOT CLICK START AGAIN, COMPUTER WILL SLOW DOWN HEAVILY OR EVEN FREEZE");
           
        }

        else if(playerNumber < minNum || playerNumber > maxNum){

            console.log("Refresh to enter a valid number. DO NOT CLICK START AGAIN, COMPUTER WILL SLOW DOWN HEAVILY OR EVEN FREEZE");
            
    
        }

        else{
                 guesses++;
    
            if(playerNumber < a){
    
                console.log("Too Low!");
                playerNumber = Number(prompt("Guess again: "));
    
            }

            else if(playerNumber > a){

                console.log("Too High!");
                playerNumber = Number(prompt("Guess again: "));
    
            }

            else{

                console.log("You got it! The answer was " + a + " It took you " + guesses + " attempts");
    
                running = false;
    
            }




}
}
}

function quit() {

       result = "Quitting!";
        console.log(" " + result);  
        setTimeout(() => {  close(); }, 2000);
 
}
