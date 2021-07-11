class Student {
    constructor(sName, sId){
        this.id = sId;
        this.name = sName;
        this.school = "Balakhal J.N High School";
    }
}

const student1 = new Student("Hasib", 100);
const student2 = new Student("Sagor", 101);
console.log(student1,student2);