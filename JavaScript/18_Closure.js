function person(){
    
    var name='Chirag'
    var age=21
    var gender='M'

    function printPersonDetails(){
        console.log(name)
        console.log(age)
        console.log(gender)
    }

    return printPersonDetails;
}

let f=person();
f()