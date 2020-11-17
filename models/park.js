const Park = function(name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.numberOfDinosaurs = []
}


Park.prototype.parkName = function(){
    return this.name;
};

Park.prototype.priceOfTicket = function(){
    return this.ticketPrice;
};

Park.prototype.addDinosaur = function(dinosaur){
    this.numberOfDinosaurs.push(dinosaur)
};

// Not sure ive dont this correctly even though it passes
Park.prototype.removeDinosaur = function(){
    this.numberOfDinosaurs.splice(0)
};


module.exports = Park 