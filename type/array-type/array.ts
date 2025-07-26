let students: string[] = ['MD', 'Samiul', 'Islam'];
let numbers: number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allStudents = (student: string[])=>{
    return student.forEach((name:string)=>{
        console.log(`Student Name: ${name}`);
    })
}


allStudents(students);