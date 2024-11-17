
let person = {

    age: 24,
    name: 'Jack',
    city: 'Delhi',

    printPersonDetails: function(){
        this.a=200;
        let y=this;

        function hello(){
            console.log(y);
        }

        hello()
    }

}

person.printPersonDetails()


