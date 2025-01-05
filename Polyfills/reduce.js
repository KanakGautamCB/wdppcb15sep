Array.prototype.myreduce = function(cb,initial){

    let start=0
    if(!initial){
        initial=this[0]
        start=1 
    }
    
    for(let i=start;i<this.length;i++){
        initial=cb(initial,this[i])
    }
    return initial;
}

let arr=[1,2,3,4]

let ans=arr.myreduce((acc,cur)=>{
    return acc+cur
},20)

console.log(ans)