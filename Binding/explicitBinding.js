function printDetails(city, country){
    console.log("name", this.name)
    console.log("age", this.age)
    console.log("college", this.college)
    console.log("city", city)
    console.log("country", country)
}



let p1={
    name:"Ram",
    age:32,
    college:'DTU'
}

let p2={
    name:"Laxman",
    age:24,
    college:'BVP'
}

let p3={
    name:'Arjun',
    age:23,
    college:'MAIT'
}

//printDetails.call(p3, "Delhi", "India")
// printDetails.apply(p3, ["Delhi", "India"])

let fun = printDetails.bind(p1, "Delhi")

fun("India")

