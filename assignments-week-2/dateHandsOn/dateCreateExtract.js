/*dateHandsOn
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/

//1.create a Date object for current date & time.
let currentDate=new Date();
console.log("current date&time is ",currentDate.toString());

//2.Extract and display:

let currentDate1 = new Date()

// *Year
let year = currentDate1.getFullYear()
console.log("Year:", year)

// *Month
const months = ["jan","feb","mar","apr","may","june","jul","aug","sep","oct","nov","dec"]
let month = months[currentDate1.getMonth()]
console.log("Month:", month)


//* Date
let date=currentDate1.getDate()
console.log("date:",date)

//* Day of week
let dayofweek=currentDate1.getDay()
console.log("day of week :", dayofweek)

//*Hours, minutes, seconds
let hours=currentDate.getHours();
let minutes=currentDate.getMinutes();
let seconds=currentDate.getSeconds();
console.log("hours:",hours," minutes:",minutes," seconds:",seconds);



//3.Display the date in this format: DD-MM-YYYY HH:mm:ss
console.log(currentDate.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear()+" "+
hours+":"+minutes+":"+seconds);


