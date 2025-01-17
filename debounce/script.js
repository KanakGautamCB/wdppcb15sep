function debounce(cb){
    // cb =()=>{
    //     console.log(document.querySelector('#input-box').value)
    // }
    let timer;  // undefined
    return function(){
        clearTimeout(timer)  
        timer = setTimeout(()=>{
            cb()
        },500)
    }
}


window.addEventListener('scroll',()=>{
    console.log('scrolling') 
})

let cb =()=>{
    console.log(document.querySelector('#input-box').value)
}

document.querySelector('#input-box').addEventListener('keydown',debounce(cb))

