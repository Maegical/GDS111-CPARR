age = Number(prompt("Enter a value: "));
a = age
var result = 0;

if (typeof a === "number") {
    
    if (a >= 18) { 
        result = "adult, you may proceed"; 
    } else { 
        result = "minor, you may not proceed";
    }
    
    if (a >= 65) { 
        result = "senior, it is not reccomended to proceed"; 
    }   
        console.log("You are a " + result); 
} else {
    console.log("Improper input")
}

