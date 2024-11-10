function download(){
    console.log("Download Starts")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isDownloadComplete = true;
            if(isDownloadComplete){
                resolve("Download is complete")
            }else{
                reject("Download not done")
            }
        },2000)
    })
    
}

function compress(msg){
    console.log(msg)
    console.log("compress Starts")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isCompressComplete = false;
            if(isCompressComplete){
                resolve("Compress is complete")
            }else{
                reject("Compress not done")
            }
        },2000)
    })
    
}

function upload(msg){
    console.log(msg)
    console.log("Upload Starts")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isUploadComplete = true;
            if(isUploadComplete){
                resolve("Upload is complete")
            }else{
                reject("Upload not done")
            }
        },2000)
    })
    
}


download()
.then(compress)
.then(upload)
.then((msg)=>{
    console.log(msg)
})
.catch(err=>{
    console.log(err)
})

// download()
// .then((msg)=>{

//     compress(msg)
//     .then((msg)=>{
//         upload(msg)
//         .then((msg)=>{
//             console.log(msg)
//         })
//         .catch(err=>{
//             console.log(err)
//         })

//     })
//     .catch(err=>{
//         console.log(err)
//     })

// })
// .catch(err=>{
//     console.log(err)
// })






