
const lib1 = require('./lib1')
function subtract(a,b){
    return a-b
}

var x=10
//console.log("lib1",lib1)
//console.log("Inside lib2")
// module.exports={
//     x,
//     subtract,
//     lib1
// }

module.exports.y=x;
module.exports.subtract=subtract
module.exports.lib1=lib1