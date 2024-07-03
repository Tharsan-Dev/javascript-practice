// getStudent(1, (student) =>{
//     console.log("Student data",stdent)
// })
// function getStudent(id, callback) {
//     setTimeout(() =>{
//         console.log("Getting data from Database");
//         callback({ name: "Bob",id:id});
//     },2000);
// }
// call back hell
console.log("first-line")
getStudent(1, (student) =>{
    getSubjects(student.id, (subject) => {
        getMark(suject[0],(mark)=>{
            console.log(mark);
        });
    });
});
console.log("Last-line");
function getStudent(id, callback){
    setTimeout(() => {
        console.log("getting  from database");
        callback ({name:"bob",id:id});
    },2000)
}
function getSubjects(id,callback){
    setTimeout(() =>{
        console.log("getting subject from database");
        callback(["maths","science","ict"]);
    },2000)
}
function getMark(subject,callback){
    setTimeout(() =>{
        console.log("getting mark from database");
        callback(90);
    },2000)
};
// promises
const promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        const student ={ id:1, name:"bob"};
        resolve(student); 
        reject( new Error("Student not found"))
    },2000);
});
// consuming the promise
promise
.then ((result) => console.log(result))
.catch((error) => console.log(error));
