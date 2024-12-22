// let s= "xyz"
// let obj = s

// while(obj!=null){
//     console.log(obj, " --> ", obj.__proto__)
//     obj=obj.__proto__
// }

// console.log(obj)


function person(name, age){
    this.name=name
    this.age=age
}

let p =person

while(p!=null){
    console.log(p, " --> ", p.__proto__)
    p=p.__proto__
}


