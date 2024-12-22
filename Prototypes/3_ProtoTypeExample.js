let d = new Date()

while(d!=null){
    console.log(d," --> ", d.__proto__)
    d=d.__proto__
}