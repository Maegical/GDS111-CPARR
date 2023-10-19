var c=10;   
var g=3;
var t=Number(prompt("Input number of tickets)"));

if(t>2){
    sumC = (Math.floor(t/c))
    r = t%c
    if (r>2) { 
        sumG = (Math.floor(r/g))
        rem = r%g   
        console.log(sumC + " candies, " + sumG + " gumballs," + rem + " coupons remaining" )
    }else{
            console.log(sumC + " candies, 0 gumballs, " + r + " coupons remaining")
    }

}else{
        console.log(" 0 candies, 0 gumballs, " + t + " coupons remaining")
}