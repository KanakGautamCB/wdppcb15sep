//Using Object.create

// let person ={
//     name:"person",
//     greet(){
//         console.log(`hi, my name is ${this.name}`)
//     }
// }

// let jack = Object.create(person)
// jack.greet()


//Using Constructor

let personPrototype={
    country:"India",
    greet(){
        console.log(`hi, my name is ${this.name}`)
    }
}

function person(name, age){
    this.name=name
    this.age=age
}

Object.assign(person.prototype, personPrototype)



let p1= new person("jack", 24)

console.log(p1.country)



