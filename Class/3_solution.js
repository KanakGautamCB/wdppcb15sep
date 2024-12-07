class person{
    constructor(name, email, joinDate){
        this.name=name
        this.email=email
        this.joinDate=joinDate
    }

    formatDate(){
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
    
        return new Date(this.joinDate).toLocaleDateString("en-US", options)
    }
}


class student extends person{

    constructor(name, email, joinDate, batchId,course){
        super(name,email,joinDate)
        this.batchId=batchId
        this.course=course
    }

    calculateProgress(){
        let count =0;
        for(let i=0;i<this.course.length;i++){
            if(this.course[i].completed===true){
                count++;
            }
        }
        return (count/this.course.length)*100;
    }
}

class teacher extends person{

    constructor(name, email, joinDate, 
        specialisation,coursesTeaching){
            super(name,email,joinDate)
            this.specialisation=specialisation
            this.coursesTeaching=coursesTeaching
    }

    calculateLoad(){
        let load=0;
        for(let i=0;i<this.coursesTeaching.length;i++){
            load=load+this.coursesTeaching[i].hours
        }
        return load
    }
    

}

let student_s1 = new student("naman","naman@gmail.com","7-11-2022","bvp7112022",
    [
        {
            name:"OS",
            completed:false
        },
        {
            name:"CN",
            completed:false
        },
        {
            name:"DAA",
            completed:true
        },
        {
            name:"SE",
            completed:true
        }
    ]
)

console.log(student_s1.formatDate())
console.log(student_s1.calculateProgress())

teacher_t1=new teacher("chirag","chirag@gmail.com","1-4-2021","gtbit142021",
    [
        {
            name:"OS",
            hours:20
        },
        {
            name:"DBMS",
            hours:30
        },
        {
            name:"SE",
            hours:15
        }
    ]
)

console.log(teacher_t1.calculateLoad())