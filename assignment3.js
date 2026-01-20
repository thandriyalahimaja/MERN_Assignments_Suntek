/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];
// 1. filter() temperatures above 35 
const above35=temperatures.filter(temp=>temp>35);
console.log(above35);
// 2. map() to convert all temperatures from Celsius → Fahrenheit 
const toFahrenheit=temperatures.map(temp=>(temp*9/5)+32)
console.log(toFahrenheit); 
//3.reduce() to calculate average temperature 
const totalTemp=temperatures.reduce((sum,temp)=>sum+temp,0);//accumulator used to hold sum, temp is current element
const avgTemp=totalTemp/temperatures.length;
console.log(avgTemp)
//4.find() first temperature above 40 
const firstAbove40=temperatures.find(temp=>temp>40);
console.log(firstAbove40);
//5.findIndex() of temperature 28 
const indexOf28=temperatures.findIndex(temp=>temp===28);
console.log(indexOf28);