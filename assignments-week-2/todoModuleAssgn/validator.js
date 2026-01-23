/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:

       
          
        i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }*/

//validator.js
// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(title.length===0){
        return "title is empty ";
    }
    if(title.length<3){
        return "title should be min 3 characters";
    }
    return "valid title";
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority){
    const validPriorities=["low","medium","high"];
    if(validPriorities.includes(priority.toLowerCase())){
        return "valid priority";
    }
    return "invalid priority";
}
// 3. Validate due date (must be future date)
function validateDueDate(date) {
    const dueDate=new Date(date);
    const currentDate=new Date();
    if(dueDate>currentDate){
        return "valid due date";
    }   
    return "invalid due date";
}
//exporting functions
export {validateTitle};
export {validatePriority};
export {validateDueDate};

      