"use strict";
// 
//Q_106 leap year comparison operator
function leapYear(year) {
    return (year % 4 === 0 && year % 100 != 0) || (year % 400 === 0);
}
let year = 2020;
if (leapYear(year)) {
    console.log(`${year} is true`);
}
else {
    console.log(`${year} is false`);
}
//Q_107 conditional logical operator
let number = 6;
if (number % 2 === 0 && number % 3 === 0) {
    console.log(`Number is divisible by 2 and 3`);
}
else {
    console.log(`Number is not divisible by 2 and 3`);
}
//Q_108 comparison in strings
function ignoreCase(str1, str2) {
    return (str1.toUpperCase() === str2.toUpperCase());
}
let string1 = "Hashir";
let string2 = "hashir";
console.log(ignoreCase(string1, string2));
//Q109 conditional statement
let currentTime = new Date();
let currentHour = currentTime.getHours();
if (currentHour > 12) {
    console.log(currentTime, "Good morning");
}
//Q_110 make function assign Grade
function assignGrade(score) {
    if (score >= 90) {
        return "Grade A";
    }
    else if (score >= 80) {
        return "Grade B";
    }
    else if (score >= 70) {
        return "Grade C";
    }
    else if (score >= 60) {
        return "Grade D";
    }
    else {
        return "Failed";
    }
}
let Studentscore = 85;
let Grade = assignGrade(Studentscore);
console.log(`Student score is ${Studentscore} ,and  student Grade is ${Grade}`);
