class Player {
    constructor(health, xp) {
        this.health = health;
        this.xp = xp;
    }
    setHealth(x) {
        this.health = x;
    }
    getHealth(x) {
       return this.health;
    }
    setXP(temp) {
        this.xp = temp;
    }
    getXP(x) {
       return this.xp;
}

}

const mario = new Player(100, 20);

console.log(mario.getHealth())
console.log(mario.getXP())

mario.setHealth(90);
mario.setXP(30);

console.log(mario.getHealth())
console.log(mario.getXP())