function Zombies(name){
    this.name = name
    this.health = 100;
    this.damage = this.health;
    this.isAlive = true;
    this.type = "zombie"


    this.attack = function(target){
        var damage = this.damage;
        if (this.type==="zombie") {
            damage=this.damage
        } else {
            target.receaveDamage(damage)
        }
    var damage = this.damage


    }

    this.receaveDamage = function(damage){
        this.health -= damage;
        this.checkHealth();
    }

}

Zombies.prototype = new Being;