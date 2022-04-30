//Allows us to print out the month and week names in string 

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

//Returns the month name along with the date for display
var getMonthName = () =>{
    let str = "";
    let current = new Date();
    let month = current.getMonth();

    str += months[month];
    str += " "+current.getDate();

    return str;
}

//Returns the week name in string
var getWeekName = () =>{
    let current = new Date();
    let week = current.getDay();

    return weekdays[week];
}

export {getMonthName, getWeekName};