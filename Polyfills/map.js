Array.prototype.mymap = function(fun){
    let brr =[]
    for(let i=0;i<this.length;i++){
        brr.push(fun(this[i],i,this))
    }
    return brr;
}

let arr = [1,2,3,4]

let ans = arr.mymap((val,index,arr)=>{
    return val*val;
})

console.log(ans)