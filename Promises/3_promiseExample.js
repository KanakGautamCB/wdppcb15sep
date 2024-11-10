function kalTimeSeAaunga(){
    return new Promise((resolve,reject)=>{ 
        console.log("Promise running")

        setTimeout(()=>{
            let kalTimeSeAaya=true;
            if(kalTimeSeAaya){
                resolve("Aaja andar baith jaa")
            }else{
                
                reject("Bahar nikal nalayak")
            }
        },3000)
            
    })
}

let p=kalTimeSeAaunga()

p.then((msg)=>{
    console.log("1st call")
    console.log(msg)
    return "hello"
})
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})


p.then((msg)=>{
    console.log("2nd call")
    console.log(msg)
})

p.then((msg)=>{
    console.log("3rd Call")
    console.log(msg)
})


// p.catch((msg)=>{
//     console.log(msg)
// })

// p.catch((msg)=>{
//     console.log(msg)
// })

// p.catch((msg)=>{
//     console.log(msg)
// })


   









