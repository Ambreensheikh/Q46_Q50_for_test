
//Q_91 make an array of three favorite fruits
let favFruits:string[] = ["mango", "kiwi", "pear"]
  favFruits.push("banana");//add one at the end of array.push()
  console.log(favFruits);

//Q_92 make a function of an array remove one at the last.pop()
function removeLast(str:string[]){
  return str.pop();
}
 let things = ["book", "glass", "table","car"]
    console.log(removeLast(things));
    console.log(things);

//Q_93 make an array of fruits
//make a function index of banana
let myFruits:string[] = ["apple", "banana", "pear", "peach"]
function indexArray(fruits: string[]){
  let index = fruits.indexOf("banana");
     fruits[index] = "mango";
}

indexArray(myFruits);
console.log(myFruits);

//Q_94 make an array of some words
let words :string[] = ["book", "table","wardrobe", "doubleBed"]
//use .map() method for length of words
let lengths :number[] = words.map((word )=>word.length);
console.log(lengths);

//Q_95 make an array of numbers
let myNumbers:number[] = [2,5,6,34,76,98]
//.filter method
function filterNumber(numbers:number[]):number[]{
  return numbers.filter((number) =>number > 10);
}
console.log(filterNumber(myNumbers));