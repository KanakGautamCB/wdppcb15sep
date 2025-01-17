function throttle(cb){
    let iscalled=false;
    return function(){
        if(!iscalled){
            iscalled=true;
            cb()
            setTimeout(()=>{
                iscalled=false
            },2000)
        }
    }
}



let cb =()=>{
    console.log(document.querySelector('#input-box').value)
}

document.querySelector('#btn').addEventListener('click',throttle(cb))