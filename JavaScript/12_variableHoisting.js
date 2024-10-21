
console.log(y)

function outer(){

    console.log(y)
    
    var y=10;
    function hello(){
        console.log("hello")
    }
}

outer()



