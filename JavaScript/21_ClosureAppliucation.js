function createBranch(branch){

    let students=[]

    function branchFns(){

        function cntStudents(){
            return students.length
        }

        function addStudent(name, marks){
            students.push({
                'name':name,
                'marks':marks
            })
        }

        function findAvg(){
            let sum=0;
            for(let i=0;i<students.length;i++){
                sum+=students[i]['marks']
            }
            
            return sum/students.length 
        }

        return{
            'cntStudents':cntStudents,
            'addStudent':addStudent,
            'findAvg':findAvg
        }
    }

    return branchFns

}

let CSBranch = createBranch('CS');
let CS1 = CSBranch();

CS1.addStudent('kartik',90)

CS1.addStudent('Shivay',80)


CS1.addStudent('Chirag',33)

// console.log(CS1.findAvg())

let ECEBranch = createBranch('ECE')
let ECE2 = ECEBranch();

ECE2.addStudent('Kamal',90)

ECE2.addStudent('Laksh',80)

console.log(ECE2.cntStudents())

console.log(CS1.findAvg(),ECE2.findAvg())





