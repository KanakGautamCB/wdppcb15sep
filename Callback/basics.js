function hello(cb){
    setTimeout(()=>{
        console.log("hello")
        cb()
    },4000)
    
}


hello(World)

setTimeout(()=>{
    hello(everyone)
},2000)



function World(){
    console.log("world")
}

function everyone(){
    console.log("everyone")
}


