function Being(){
    this.isAlive=true;
    
    this.checkHealth = function(){
        if (this.isAlive <= 0) {
            this.isAlive = false;
        }
    } 
}
Being()