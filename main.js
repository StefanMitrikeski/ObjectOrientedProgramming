function main(){
    var fierceBAttle = new theLivingDead();
    while(true){
        var end= fierceBAttle.war();
        if(end){
            console.log("The battle has ended ", fierceBAttle);
            return;
        }
    }
}
main()