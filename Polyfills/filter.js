
Array.prototype.myfilter = function(cb){

    // cb=(val,index,arr)=>{
    //     return (val%2==0)
    // }
    let brr =[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            brr.push(this[i])
        }
    }
    return brr;
}

let arr = [1,2,3,4,5]

let newArr = arr.myfilter((val,index,arr)=>{
    return (val%2==0)
})

console.log(newArr)

