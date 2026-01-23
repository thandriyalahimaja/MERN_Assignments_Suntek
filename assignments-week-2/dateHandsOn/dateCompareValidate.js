/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/

//given:
let enrollmentDeadline = new Date("2026-01-20");

//1.Check if:
//* Today is before deadline ->"Enrollment Open"
let today=new Date();
if(today<enrollmentDeadline){
    console.log("enrollment Open");
    //today is after deadline->enrollment closed
}else{
    console.log("enrollment Closed");
}

//validate user input date:
//* Input: "2026-02-30"
let userInputDate="2026-13-14";
let dateObj=new Date(userInputDate);

//* Detect whether the date is valid or invalid if the month has only 28/30 days
/*
months=1-12 
30 days=4,6,9,11 ->30 days
31 days=1,3,5,10,12 ->31 days
special case:7,8->31 days
february=2 ->28/29 days

2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/
function dateCheckValidity(day,month,year){
    if(month<0 || month>11 || day<1||day>31 || year<1){
        return false;
    }
    let daysInMonth;
    switch(month){
        case 0://jan
        case 2://mar
        case 4://may
        case 6://jul-31 days
        case 7://aug-31 days
        case 9://oct
        case 11://dec
            daysInMonth=31;
            break;
        case 3://apr
        case 5://jun
        case 8://sept
        case 10://nov
            daysInMonth=30;
            break;
        case 1://feb
            if(isLeapYear(year)){
                daysInMonth=29;
            }else{
                daysInMonth=28;
            }
            break;
        default:
            return false;
    }
    return day<=daysInMonth;
}
function isLeapYear(year){
    return (year%4===0 && year%100!==0)||(year%400===0);
}
let day=dateObj.getDate();
let month=dateObj.getMonth();
let year=dateObj.getFullYear();
if(dateCheckValidity(day,month,year)){
    console.log("date is valid");
}else{
    console.log("date is invalid");
}



