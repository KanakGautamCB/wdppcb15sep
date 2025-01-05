let info = (function(){

    let student ={
        name:'xyz',
        age:'20',
        marks:20,
    }

    function isPass(){
        return student.marks>33
    }

    function getName(){
        return student.name
    }

    function getAge(){
        return student.age
    }

    return{
        isPass,
        getAge,
        getName,
    }

})()

//console.log(info)

console.log(info.isPass())
console.log(info.getName())
console.log(info.getAge())