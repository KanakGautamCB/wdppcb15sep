// function cal(x, y, f){
//     console.log(f(x,y))
// }

// function add(x,y){
//     return x+y;
// }

// cal(1,2,add)


// function funGen(){

//     function greet(){
//         console.log("hello")
//     }

//     return greet
// }

// var x = funGen();
// x()


function funGen(){

    function outer(){
        
        function inner(){
            
            console.log("I am inner")

        }
        return inner
    }
    return outer

}

var x= funGen();
console.log(x)