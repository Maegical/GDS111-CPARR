logger();
paras(7);

let twice  = numi(5);
console.log("Function numi returns = " + twice);

let msg = mess();
console.log(msg);

function logger() {
    console.log("I'm inside logger");
}


function paras(param1){
    console.log(param1);
    console.log("inside paras");
}

function numi(aNumber) {
    let d = aNumber * 2;
    return d;
}

function mess() {
    return "This is a message";
}
