function funGen(){
    let a=1;
    function outerFun(){
        b=1
        function innerFun(){
            
            a++
            b++
            console.log('a',a, 'b', b);
            
           
        }
        return innerFun
        
    }
    return outerFun
   
}

let f= funGen()
let g=f()
g()
g()
g()

let h=funGen()()
h()
h()



