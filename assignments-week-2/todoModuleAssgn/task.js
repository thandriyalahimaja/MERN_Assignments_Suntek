/*ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions
*/

//task.js
import {validateTitle,validatePriority,validateDueDate} from "./validator.js";
const tasks = [];
// 1. Add new task
function addTask(title, priority, dueDate){
  // Validate using imported functions
  if (!validateTitle(title)){
    return {success: false, message: "Invalid title"};
  }
  if (!validatePriority(priority)){
    return {success: false, message: "Invalid priority"};
  }
  if (!validateDueDate(dueDate)){
    return {success: false, message: "Invalid due date"};
  }
  const newTask ={
    id: tasks.length+1,
    title,
    priority,
    dueDate,
    completed: false,
  };
  tasks.push(newTask);
  return {success: true, message: "Task added successfully", task: newTask};
}
// 2. Get all tasks
function getAllTasks(){
  return tasks;
}
// 3. Mark task as complete
function completeTask(taskId){
  const task=tasks.find((t)=>t.id===taskId);
  if (task){
    task.completed=true;
    return {success: true, message: "Task marked as complete", task};
  }
  return {success: false, message: "Task not found"};
}
// Exporting functions
export {addTask};
export {getAllTasks};
export {completeTask};
