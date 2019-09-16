function Zombies(name){
    this.name = name
    this.health = 100;
    this.damage = this.health
    this.type = "zombie"


    this.attack = function(target){
        var damage = this.damage;
        if (this.type=="zombie") {
            damage=this.damage
            console.log(this.type)
        } else {
            target.receaveDamage(damage)
            console.log("Human type ", this.type)
        }
    var damage = this.damage


    }

    this.receaveDamage = function(damage){
        this.health -= damage;
        console.log("HEALTH", this.health)
        this.checkHealth();
    }

}

Zombies.prototype = new Being;