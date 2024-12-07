class person{
    constructor(name,age,country){
        this.name=name
        this.country=country
        this.isAdult=function(){
            return age > 18
        }
    }

    updateName(name){
        this.name=name
    }

    set updateCountry(country){
        this.country=country
    }

    get outputName(){
        return this.name
    }

    static greet(){
        console.log("hello")
    }


}

let p1 = new person("Ram",22,"India")

// console.log(p1.name)

// p1.updateName("Laxman")

// console.log(p1.outputName)

p1.updateCountry="USA"

console.log(p1.country)
console.log(p1.isAdult())

person.greet()