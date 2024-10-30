function createCounter(){    // higher order function returning an instance counter
    let count=0;
    function counter(){
        count++;
        console.log(count)
    }
    return counter
}

let f=createCounter();

f()
f()
f()

let g=createCounter()

g()
g()

