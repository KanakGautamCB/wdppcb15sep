let arr = [1, 2, 3, 4, 5]

let newArr = arr.map((val,index,arr)=>{
    console.log("val -> ",val, "index ->", index, "arr ->", arr)
    return val*2;
})

console.log(newArr)