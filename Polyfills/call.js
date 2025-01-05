Function.prototype.mycall = function(context,...args){

    // context = student = {
    //     name:'xyz',
    //     age:20,
    //     marks:40
    // }

    // this = function fun(movie,sport){
    //     console.log(this,movie,sport)
    
    // }

    context.fun = this
    context.fun(...args)
    

}





function fun(movie,sport){
    console.log(movie,sport)

}

let student = {
    name:'xyz',
    age:20,
    marks:40
}

fun.mycall(student,'Inception','basketball')





