function theLivingDead() {
  this.zombies = [];
  this.humans = [];

  this.generate = () => {
    for (let i = 0; i < getRandom(5, 20); i++) {
      let zombi = new Zombies();
      this.zombies.push(zombi);
    }
    for (let i = 0; i < getRandom(5, 20); i++) {
      let human = new Human();
      this.humans.push(human);
    }
  };
  this.generate();

  console.log(`the human army is`, this.humans, this.humans.length);
  console.log(`the zombie army is`, this.zombies, this.zombies.length);

  this.figth = function() {
    while (this.humans.length >= 0 && this.zombies.length >= 0) {
      console.log(this.humans)
      if (this.humans.length > 0 && this.zombies.length > 0) {
        var human = this.humans[getRandom(0, this.humans.length - 1)];
        var zombi = this.zombies[getRandom(0, this.zombies.length - 1)];
        if (human.isAlive) {
          if (calculatePercent(10)) {
            human.instaKill(
              this.zombies[getRandom(0, this.zombies.length - 1)]
            );
            console.log("the zombi has experienced the wrath of the human");
          } else {
            human.attack(this.zombies[getRandom(0, this.zombies.length - 1)]);
            console.log("human atacked zombie");
          }
        }
        if (zombi.isAlive) {
          if (calculatePercent(10)) {
            zombi.specialAttack(human, this.zombies);
            zombi.transformedHuman(human, this.humans)
            console.log('deleted element from this arr',this.humans)
          } else {
            zombi.attack(human);
            console.log("zombie atacked human");
          }
        }
        this.humans.map((human, i) => {
          if (!human.isAlive) {
            this.humans.splice(i, 1);
            console.log("the human was defeated", this.humans.splice(i, 1));
          }
        });
        this.zombies.map((zombi, index) => {
          if (!zombi.isAlive) {
            this.zombies.splice(index, 1);
            console.log(
              "the zombie was defeated",
              this.zombies.splice(index, 1)
            );
          }
        })
      } else if (this.humans.length == 0 || this.zombies.length == 0) {
        if (this.humans.length == 0) {
          console.log("the batle has ended zombies has won", this.zombies);
        } else if (this.zombies.length == 0) {
          console.log("the batle has ended humans has won", this.humans);
        }
        console.log(this.zombies)
        return false;
      }
    }
  };
}
