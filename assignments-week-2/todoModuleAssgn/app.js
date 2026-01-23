/*iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again*/   

//app.js
import { validateTitle,validatePriority,validateDueDate } from "./validator.js";
import { addTask,getAllTasks,completeTask } from "./task.js";

// Test your module system
// 1. Add some tasks
console.log(addTask("buy groceries","medium","2024-12-01"));
console.log(addTask("pay bills","high","2023-05-01"));
console.log(addTask("hello","low","2024-11-15"));
console.log(addTask("go to party","medium","2024-10-10"));
console.log(addTask("hii","high","2024-09-09"));
// 2. Display all tasks
console.log("All Tasks:",getAllTasks());
// 3. Complete a task
console.log(completeTask(2));
// 4. Display all tasks again
console.log("All Tasks after completing task 2:",getAllTasks());

