function Zombies(){
    this.damage = getRandom(75,250)
    this.health = getRandom(150,350)
    

}
Zombies.prototype = new Being();