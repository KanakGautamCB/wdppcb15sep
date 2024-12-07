class vehicle{
    constructor(company){
        this.company=company
    }

    get companyName(){
        return this.company
    }
}


class car extends vehicle{
    constructor(topspeed,company){
        super(company)
        this.topspeed=topspeed
    }

    get topSpeedAmount(){
        return this.topspeed
    }
}

let c1 = new car(500,"Mercedes")
// console.log(c1.companyName)


console.log(car.prototype.__proto__===vehicle.prototype)
console.log(typeof(car))