"use strict";
// 
//Q_86 create a function to find text true/false
function detectJS(text) {
    return text.includes("Javascript");
}
console.log(detectJS(`I love to learn Javascript`));
//Q_87 make a function takes first ten characters from text
function tenCharacters(text) {
    return text.substring(0, 10);
}
console.log(tenCharacters(`Hello Javascript !`));
//Q_88 make a function round a decimal number to a whole number
function roundNumber(num) {
    return Math.round(num);
}
console.log(roundNumber(34.87));
//Q_89 function change string into number
function changeString(str) {
    return parseFloat(str);
}
console.log(changeString("374.90"));
//Q_90 function check if value is not a number
function check(valueType) {
    return isNaN(valueType);
}
console.log(check("Hello!"));
console.log(check("35"));
