//const arrayString= [i];
//alert(i);


let start = Number(prompt("Type start number: "));
let end =  Number(prompt("Type end number: "));
let fun = []


for(i=start; i<end; i++) {
    if ( ( i % 3 == 0) && (i % 5 == 0)) { 
        fun.push(String("Fizz Buzz"));
      //  alert("Fizz Buzz");
    } else if (i % 3 == 0) {
        fun.push(String("Fizz"));
       // alert("Fizz");
    } else if (i % 5 == 0) {
        fun.push(String("Buzz"));   
       // alert("Buzz");
    } else {
        fun.push(String(i));
       // alert(i);
    }
} 


console.log (fun);
