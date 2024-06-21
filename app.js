"use strict";
//Q_61 enums
var TypeVehicle;
(function (TypeVehicle) {
    TypeVehicle[TypeVehicle["car"] = 0] = "car";
    TypeVehicle[TypeVehicle["truck"] = 1] = "truck";
    TypeVehicle[TypeVehicle["motorcycle"] = 2] = "motorcycle";
})(TypeVehicle || (TypeVehicle = {}));
console.log(TypeVehicle.truck);
let student = {
    rollNo: 1234,
    id: "ali@com",
    choices: ["IT", "AI", "cloud engineering"],
};
console.log(student);
let circle = {
    kind: "circle",
    radius: 10,
};
let rectangle = {
    kind: "rectangle",
    width: 20,
    length: 8,
};
console.log(circle);
console.log(rectangle);
//Q_64 making function string and number
function MixTextNumber(text, number) {
    return text + number;
}
console.log("My age is :", 30);
//Q_65 use of modulus% as an arithmatic operator for remainder
function Remainder(num1, num2) {
    return num1 % num2;
}
console.log(Remainder(5, 2));
