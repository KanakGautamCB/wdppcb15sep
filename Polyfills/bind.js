Function.prototype.mybind = function(context,...args){
    
    context.newfun = this

    // context= student = {
    //     name:'xyz',
    //     age:20,
    //     marks:40,
    //     newfun: this
    // }
    return function(...args1){
        context.newfun(...args,...args1)
    }
}


let student = {
    name:'xyz',
    age:20,
    marks:40
}

function fun(movie,sport){
    console.log(this,movie,sport)

}

let f= fun.mybind(student,'Inception')
f('basketball')