function Humans(name){
    this.name = name;
    this.health = 100;
    this.damage = this.health;
    this.type = "human"

    this.attack = function(target){
        var damage = this.damage;
        if (this.type==="human") {
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
Humans.prototype = new Being;