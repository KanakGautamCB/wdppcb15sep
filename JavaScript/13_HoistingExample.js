var x = 100;

function fun() {
    console.log(x);

    var x = 200;
    console.log(x);
}
fun();
var y = 2;

if (y > 0) {
    console.log(y);
    var y = 3;
    console.log(y);
}

console.log(x);
console.log(y);