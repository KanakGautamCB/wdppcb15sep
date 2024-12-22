function person(name,age){
    this.name=name
    this.age=age
}

let p1=new person("Ram", 22)

p1.greet = function(){
    console.log("hello")
}

// let p1 = {
//     name:"Ram",
//     age:22,
//     greet(){
//         console.log("hello")
//     }
// }

