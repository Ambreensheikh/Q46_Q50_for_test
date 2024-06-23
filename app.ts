

//Q_73 my variable assign
let welcome=(name:string, id:number)=>{
  console.log(`Welcome ! your name is ${name} and your id is ${id}`);
}
welcome("ali" , 24);
welcome("hashir" , 123);

//Q_74 destructuring of two variables
let a = 5;
let b = 24;
[a , b] = [b , a]
console.log(`The value of a is ${a} and the value of b is ${b}`);

//Q_75 assignment operators
let x = 5;

x += 2;
console.log(`By addition :` , x);
x -+ 4;
console.log(`By substraction :` , x);
x *= 6;
console.log(`By multiply :`, x);
x /= 2;
console.log(`By division :`, x);

