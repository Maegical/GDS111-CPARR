let spinBtnObj = document.getElementById("spin");

spinBtnObj.addEventListener("click", spinner);

let quitBtnObj = document.getElementById("quit");

quitBtnObj.addEventListener("click", quit);


function spin() {

        

    const min = 100
    const max = 999
let number = Math.floor(Math.random() * (max - min)) + min;

console.log(number);


    if (number == 999) {
        console.log("Galactic Jackpot!"); 
        credit = credit + 9000;
        console.log(credit); 
    } else if (number == 888) {
        console.log("8 Eyed Wonder Jackpot!"); 
        result = "8000";
        credit = credit + 9000;
    } else if (number == 777) {
        console.log("Lord's Luck Jackpot!"); 
        result = "7770";
        credit = credit + 7700;
        console.log(credit); 
    } else if (number == 666) {
        console.log("Devil's Delight Jackpot!"); 
        result = "6660";
        credit = credit + 6600;
    } else if (number == 555) {
        console.log("5 Finger Discount Jackpot!"); 
        result = "5000";
        credit = credit + 5000; 
    } else if (number == 444) {
        console.log("4 for 1 Jackpot!"); 
        result = "4000";
        credit = credit + 4000;
    } else if (number == 333) {
        console.log("Triple Trouble Jackpot!");
        result = "3000"; 
        credit = credit + 3000; 
    } else if (number == 222) {
        console.log("Double Jackpot!"); 
        result = "2000";
        credit = credit + 2000;
    } else if (number == 111) {
        console.log("Jackpot!");
        result = "1000"; 
        credit = credit + 1000;
    } else {
        result = "You Lost!"; 
        credit = 0;
    }

    console.log(result);
    console.log("credits " + credit); 


}



    function spinner() {
        credit = Number(prompt("Make a Selection: "));
            a = Number(credit)

            if (a <= 99 ) {
                credit = "Not Enough Credits";
                console.log("credits " + credit);  
            }
            

            if (a > 99 ) {
                console.log("Enough Credits");
                console.log("credits " + credit); 
                spin();


    }

    }


function quit() {

       result = "Quitting!";
        console.log(" " + result);  
        setTimeout(() => {  close(); }, 2000);
 
}




