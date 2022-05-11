class Emitter{
    
    constructor(){
        this.events = {}
    }
    
}

Emitter.prototype.on = function(type, listener){
    if(this.events.type == undefined){
        this.events.type = [];
    }
    
    this.events.type.push(listener);
}
 this.events.type.forEach(element => {
     element();
 });

 

