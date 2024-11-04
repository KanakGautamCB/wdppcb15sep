function download(cb){
    console.log("Download Starts")
    setTimeout(()=>{
        console.log("Download Finishes")
        cb()
    },3000)
    
}


function compress(cb){
    console.log("Compression Starts")
    setTimeout(()=>{
        console.log("Compression Finishes")
        cb()
    },3000)

}

function upload(){
    console.log("Upload Starts")
    setTimeout(()=>{
        console.log("Upload Finishes")
    },3000)
}

download(()=>{
    compress(()=>{
        upload()
    })
})