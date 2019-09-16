function main(){
    var fierceBAttle = new theLivingDead();
    while(true){
        var end= fierceBAttle.war();
        fierceBAttle.humanArmy.map((data)=>{
            console.log(data.isAlive)
        })
        if(end){
            console.log("The battle has ended ", fierceBAttle);
            return;
        }
    }
}
main()