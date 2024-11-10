let kalTimeSeAaunga = new Promise((resolve, reject)=>{
    let kalTimeSeAaya = true;
   
    if(kalTimeSeAaya){
        resolve("Aaja andar baith jaa")
    }else{
        console.log("Pronise reejected")
        reject("Baha nikal nalayak")
    }
})

kalTimeSeAaunga
.then((msg)=>{
    console.log(msg)
    return "Task Complete kar"
})
.then((msg)=>{
    console.log(msg)
    return "shabash"
})
.then((msg)=>{
    console.log(msg)
})
.catch((msg)=>{
    console.log(msg)
})