let fName = "Larry" 
let age = 22
let salary = 40000.00
let employed = true

console.log(fName + " is " + age + " years old.");
console.log("He is making " + salary + " annually");
console.log(typeof fName);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof employed);

fName = 77;
console.log("fName = " + fName);
console.log(typeof fName);

const player = ["Mario", "Luigi", "Pikachu", "Peach"];
console.log(player[0]);

a = player

for (let a = 0; a < 4; a++) {
    console.log(player[0]);
}
// or

for(let a of player) {
    console.log(a)
}