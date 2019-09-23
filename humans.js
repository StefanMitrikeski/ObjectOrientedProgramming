function Human(){
    this.damage = getRandom(50,150)
    this.health = getRandom(250,550)

}
Human.prototype = new Being()