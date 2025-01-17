
const lib1 = require('./lib1')
function subtract(a,b){
    return a-b
}

var x=20
//console.log("lib1",lib1)
//console.log("Inside lib2")
module.exports={
    x,
    subtract,
    lib1
}