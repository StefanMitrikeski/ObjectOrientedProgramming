function theLivingDead() {
    this.zombies = [];
    this.humans = [];

    this.generate = () => {
        for (let i = 0; i < getRandom(5, 20); i++) {
            let zombi = new Zombies();
            this.zombies.push(zombi)
        }
        for (let i = 0; i < getRandom(5, 20); i++) {
            let human = new Human();
            this.humans.push(human)
        }
    }
    this.generate();

    console.log(this.zombies)
    console.log(this.humans)

    // let warrior = this.humans[getRandom(0, this.humans.length - 1)]
    // let zombi = this.zombies[getRandom(0, this.zombies.length - 1)]



    this.figth = function () {
        for (let i = 0; i < this.humans.length; i++) {
            let warrior = this.humans[i]
            let zombi = this.zombies[i]
            
            while (warrior.health > 0 && zombi.health > 0) {
                zombi.attack(zombi, warrior)
                warrior.attack(warrior, zombi)        
            }
            warrior.checkIsAlive()
                zombi.checkIsAlive()
        }
      
    }


}
