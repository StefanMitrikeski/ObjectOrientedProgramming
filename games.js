function theLivingDead() {
    // var c = a + b;
    // console.log("result of the arguments", c)
    // return c
    this.humanArmy = [];
    this.zombieArmy = [];

    console.log(`the human army is`, this.humanArmy)
    console.log(`the zombie army is`, this.zombieArmy)



    this.war = function () {
        var aliveCombatants = 0
        var aliveEnemy = 0

        for (var i = 0; i < this.humanArmy.length; i++) {

            var combatant = this.humanArmy[i];
            var enemy = this.zombieArmy[i]
            console.log(enemy)
            if (combatant.isAlive && enemy.isAlive) {
                aliveCombatants++
                aliveEnemy++
                console.log("alive zombies", aliveEnemy++)
                console.log("alive humans", aliveCombatants)
            }
        }
        if (aliveCombatants > 0 && aliveEnemy > 0) {
            this.processTurn();
        } else {
            if (aliveEnemy === 0) {
                console.log(`humans won the battle`)
            } else console.log(`zombies won the battle`)
        }
        return true;
    }

    this.processTurn = function () {
        var victim = this.humanArmy[getRandom(0, this.humanArmy.length)];
        var zombie = this.zombieArmy[getRandom(0, this.zombieArmy.length)];
        if (victim.isAlive) {
            zombie.attack(victim)
        } else {
            return this.processTurn();
        }
        for (let i = 0; i < this.humanArmy.length; i++) {
            var victim = this.humanArmy[i];
            if (victim.isAlive) {
                victim.attack(zombie);
            }
        }

    }

    // this.processTurn = function(){
    //     var victim = this.humanArmy[getRandom(0, this.humanArmy.length)];
    //     var zombie = this.zombieArmy[getRandom(0, this.zombieArmy.length)];
    //     if (zombie.isAlive && victim.isAlive) {
    //         zombie.attack(victim)
    //     } else {
            
    //     }
    //     // console.log(zombie)
    //     // console.log(victim)
    // }

    this.generator = function () {
        for (let i = 0; i <= getRandom(10, 20); i++) {
            this.humanArmy.push(new Humans("warrior" + i));
        }
        for (let i = 0; i <= getRandom(10, 20); i++) {
            this.zombieArmy.push(new Zombies("Zombie" + i));
        }
    }
    this.generator();



}
