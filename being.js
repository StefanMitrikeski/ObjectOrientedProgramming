function Being() {

    this.isAlive = true;

    this.checkHealth = function(){
        if (this.health <= 0) {
           this.isAlive = false;
        }
    }
    this.attack = function(target){
        if(target.isAlive){
            console.log("izede kutek",target)
            target.reciveDamage(this.damage)
           
        }
    }
    this.reciveDamage = function(damage){
        this.health -= damage;
        this.checkHealth()
    }
}
