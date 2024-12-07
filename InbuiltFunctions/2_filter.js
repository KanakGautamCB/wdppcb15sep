let arr = [1, 2, 3, 4, 5]

let newArr = arr.filter((val,index,arr)=>{
    //console.log("val -> ",val, "index ->", index, "arr ->", arr)
    return (val%2==1)
})

console.log(newArr)