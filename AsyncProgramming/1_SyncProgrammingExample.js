function delay5Sec(){
    let prevTime = new Date().getTime();
    while(prevTime+10000 !== new Date().getTime()){

    }
}

delay5Sec()
console.log("Hello World")