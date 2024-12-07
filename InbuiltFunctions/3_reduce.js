let arr = [2, 1, 3, 4, 5]

let sum = arr.reduce((accumulator,val,index,arr)=>{
    //console.log("val -> ",val, "index ->", index, "arr ->", arr)
    console.log(accumulator,val)
    return accumulator *= val
})

console.log(sum)