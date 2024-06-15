//Q_46:create an object
let laptop={
    make:"hp",
    model:"pro book",
    year:2023,
    describe: function(){
        console.log(`My laptop is ${this.make} ,${this.model} ,${this.year}`)
    }
};
laptop.describe();
//Q_47  Array destructuring
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
  ];
  let [laptop1,laptop2] = laptops;
  console.log(laptop1);
  console.log(laptop2);

  //Q_48 combining two arrays
  let priceList_a = [1200, 4500, 7500];
  let priceList_b = [600, 2300,4000];
  let combinedPrices = [...priceList_a,...priceList_b].sort((a,b) =>a-b);//ascending order
  console.log(combinedPrices);

  //Q_49 function with rest parameters...
  function myHobbies(...hobbies:string[]){
    hobbies.forEach((hobby) =>{
  console.log(`I enjoy ${hobby}`)
    })
     };
     myHobbies("coding", "reading", "playing");
  
  //Q_50  multiline string literal
  let myIdealDay = `my ideal day spend when :
  1. reciting Holy Quran early in the morning,
  2. having favorite breakfast,
  3. coding without any errors`
  console.log(myIdealDay);