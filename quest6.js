class Player {
    constructor() {
        this.health = 0;
        this.damage = "Dagger";
        this.armor = 0;
    }
    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
       return this.health;
    }
    setDamage(newDamage) {
        this.damage = newDamage;
    }
    getDamage() {
       return this.damage;
    }
    setArmor(newArmor) {
        this.armor = newArmor;
    }
    getArmor() {
       return this.armor;
    }


}

const goblin = new Player();
goblin.setDamage("dagger");    
goblin.setHealth(100);
goblin.setArmor(50);
console.log("Player Name = Goblin");
console.log("Health = " + goblin.getHealth()); 
console.log("Armor = " + goblin.getArmor()); 
console.log("Weapon used = " + goblin.getDamage());
   