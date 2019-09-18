function Being() {

    this.isAlive = true;

    this.checkIsAlive = function(){
        if (this.health < 0) {
            this.isAlive = false;
        } 
        return console.log("the warrior has died")
        
    }
    this.attack = (attacker,defender) => {
        defender.health -= attacker.damage
        console.log("remainig health " + defender.health)
        return defender.health  
    }

    this.reciveDamage = (attacker,defender) => {
        defender.health -= attacker.damage
        console.log("remainig health "+ defender + defender.health)
        return defender.health  
    }
}
