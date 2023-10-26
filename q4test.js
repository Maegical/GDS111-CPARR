age = prompt("enter a value: ");
a = Number(age)

if (a >= 18) { 
    age = "adult, you may proceed"; 
} else { 
    age = "minor, you may not proceed";
}

if (a >= 65) { 
    age = "senior, it is not reccomended to proceed"; 
}   
    console.log("You are a " + age); 