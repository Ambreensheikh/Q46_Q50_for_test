
// 26/6/24
//WEDNESDAY CLASS 2_5
//Async function promises
//RESOLVE HOGA .then()
//REJECT HOGA .catch()
const func = () =>{
  return new Promise((resolve , reject) => {
    resolve(`I am resolved`);
  })
}
func()
.then((resolve) => {
  console.log(resolve);
})
.catch((error) =>{
  console.log(error);
});

 //let isVictory = true;
// let cricket = () =>{
//   return new Promise((resolve , reject) => {
// if(isVictory){
//   resolve(`We Won !`)
// }else{
//   reject(`we Lost !`)
// }
//   });
// }
// cricket().then((response) =>{
//   console.log(response);
// })
// cricket().catch((error) => {
//   console.log(error)
//}) //CHAINING IN PROMISES=> LINK TO EACH OTHER
let isVictory = true;
let cricket = () =>{
  return new Promise((resolve , reject) => {
if(isVictory){
  resolve(`Match in progress`)
  setTimeout(() =>{
    resolve(`We Won !`)
  }, 2000);
}else{
  setTimeout(() =>{
    reject(`Tum se na ho payega`)
  } ,2500)
}
  })
}
cricket().then((response) =>{
  console.log(response);
  
})

cricket().catch((err) => {
  console.log(err)
});

//.catch() me bhi response ko return karwa sakte hn
cricket().catch((error) =>{
  console.log(error)
  return `Qudrat ka nizam`
})
.finally(() =>{
  console.log(`Flight pakro`)
})
//ASYNC AWAIT FUNCTION=> TO RESOLVE CHAIN HELL
async function getReesult() {
 try{
  const data = await cricket();
  console.log(data);
}
catch(err) {
  console.log(err);
}
finally{
  console.log(`Flight pakro`);
}
}
getReesult();