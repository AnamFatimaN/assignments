let listOfStudents='[{"name":"sana","class":"seven","science":98,"chemistry":89,"physics":85},{"name":"anam","class":"seven","science":78,"chemistry":45,"physics":75},{"name":"ali","class":"six","science":87,"chemistry":92,"physics":95},{"name":"hamza","class":"six","science":87,"chemistry":92,"physics":95}]'
let newlistOfStudents=JSON.parse(listOfStudents);

// names of students in alphabetical order
// const nameofstudents=newlistOfStudents.map(student => {
//     return `${student.name}`
// }).sort()
// console.log(`Names of the students are:${nameofstudents}`);

// list of students with marks in physics
// const marksinphysics=newlistOfStudents.map(marks =>{
// return `${marks.name}:${marks.physics}`
// })
// console.log(`Marks in Physics: ${marksinphysics}`)

// highest marks in physics
// const highestMarksInPhysics = newlistOfStudents.reduce((highest, student) => {

//     return student.physics > highest.physics ? student : highest;
// });

// console.log(`Highest Marks in Physics: ${highestMarksInPhysics.physics} scored by ${highestMarksInPhysics.name}`);

// list of students with marks in chemistry
// const marksinchemistry=newlistOfStudents.map(marks =>{
//     return (marks.name + ":" + marks.chemistry)
// })
// console.log(`Marks in chemistry:  ${marksinchemistry}`)
// highest marks in chemistry
// const highestmarksinchemistry=newlistOfStudents.reduce((highest,student)=>{
//     return student.chemistry > highest.chemistry ? student : highest;
// });
// console.log(`Highest marks in chemistry: ${highestmarksinchemistry.chemistry} scored by ${highestmarksinchemistry.name}`)

// average marks of students
// function calculateAverageMarks(student) {
//     const subjectMarks = Object.values(student).filter(mark => typeof mark === 'number');
//     const sumMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
//     return sumMarks / subjectMarks.length;
// }

// Calculate and display average marks for each student
// newlistOfStudents.forEach(student => {
//     const averageMarks = calculateAverageMarks(student);
//     console.log(`${student.name}'s Average Marks: ${averageMarks}`);
// })

for (const key in newlistOfStudents) {
    console.log(key)
    } 
    let obj = {
        name:"sana",
        age:12,
        salary:4000
    }
for(const key in obj){
    console.log(key)
}
// for (const iterator of obj) {
//     console.log(iterator)
// }
// for (const [key,value] of Object.entries(obj)){
//     console.log(key,value);
// }
// console.log(newlistOfStudents[0])
// for (let i=0; i<newlistOfStudents.length; i++){
//     for (const [key,value] of Object.entries(newlistOfStudents[i])){
//         console.log(key,value);
//     }
// }