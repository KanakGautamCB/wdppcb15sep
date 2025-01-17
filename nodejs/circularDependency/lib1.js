const lib2 = require('./lib2')

function add(a,b){
    return a+b
}

var y=20
//console.log("lib2",lib2)
//console.log("Inside lib1")
module.exports.y=y
module.exports.add=add
module.exports.lib2=lib2

// module.exports={
//     y,
//     add,
//     lib2
// }