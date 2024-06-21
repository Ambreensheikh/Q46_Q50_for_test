//Q_61 enums
enum TypeVehicle{
    car,
    truck,
    motorcycle,
}
console.log(TypeVehicle.truck);

//Q-62 interface
interface Student{
    rollNo:number;
    id : string;
    choices:string[]
}
let student:Student={
    rollNo:1234,
    id:"ali@com",
    choices:["IT", "AI", "cloud engineering"],
}
 console.log(student);

 //Q_63 type alias
 type Shape = {
    kind: "circle" | "rectangle";
    length? :number;
    width? :number;
    radius? : number;
 }
 let circle:Shape={
    kind: "circle",
    radius: 10,
 };
 let rectangle:Shape={
    kind : "rectangle",
    width : 20,
    length: 8,
 };
 console.log(circle);
 console.log(rectangle);
 //Q_64 making function string and number
 function MixTextNumber(text:string, number:number){
    return text + number
 }
 console.log("My age is :" , 30);
 //Q_65 use of modulus% as an arithmatic operator for remainder
 function Remainder(num1:number,num2:number):number{
    return num1 % num2
 }
 console.log(Remainder(5, 2));
