function download(cb){
    console.log("Download Starts")
    setTimeout(()=>{
        console.log("Downloading Completed")
        cb()
    },2000)
}

function compress(cb){
    console.log("Compress Starts")
    setTimeout(()=>{
        console.log("Compress Completed")
        cb()
    },2000)
}

function upload(cb){
    console.log("Uploading Starts")
    setTimeout(()=>{
        console.log("Uploading Completed")
        cb()
    },1000)
}
 function allDone(){
    console.log("All Done")
 }

download(()=>{
    compress(()=>{
        upload(()=>{
            allDone()
        })
    })
})

