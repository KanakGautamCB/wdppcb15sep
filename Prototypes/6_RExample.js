// make a constructor of vehicle, car, bike. car and bike should inherit from vehicle.prototype
//make objects of car and bike and use methods and properties from vehicle

function vehicle(company, year){
    this.company=company
    this.year=year
    this.details=function(){
        console.log(this.name)
        console.log(this.price)
    }
}

function car(name, price,company,name){
    vehicle.call(this,company,year)
    this.name=name
    this.price=price
}

function bike(name, price, cc,company,year){
    vehicle.call(this,company,year)
    this.name=name
    this.price=price
    this.cc=cc
}

// bike.prototype.__proto__=vehicle.prototype
// car.prototype.__proto__=vehicle.prototype

let bike1 = new bike("classic","260,000",350,"Royal Enfield", 2024)


console.log(bike1.company)



