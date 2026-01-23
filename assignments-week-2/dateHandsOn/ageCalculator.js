/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/   

let dob="2000-05-15";

//1.calculate exact age in years
let dobDate=new Date(dob);
let currentDate=new Date();
let age=currentDate.getFullYear()-dobDate.getFullYear();
let monthDiff=currentDate.getMonth()-dobDate.getMonth();
if(monthDiff<0 || (monthDiff===0 && currentDate.getDate()<dobDate.getDate())){
    age--;
}
console.log("age is:",age);
