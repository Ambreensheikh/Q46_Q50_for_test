"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 
//WEDNESDAY CLASS 2_5
//Async function promises
//RESOLVE HOGA .then()
//REJECT HOGA .catch()
const func = () => {
    return new Promise((resolve, reject) => {
        resolve(`I am resolved`);
    });
};
func()
    .then((resolve) => {
    console.log(resolve);
})
    .catch((error) => {
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
let cricket = () => {
    return new Promise((resolve, reject) => {
        if (isVictory) {
            resolve(`Match in progress`);
            setTimeout(() => {
                resolve(`We Won !`);
            }, 2000);
        }
        else {
            console.log(`Match in progress !`);
        }
    });
};
cricket().then((response) => {
    console.log(response);
    return `Man of the match Babar`;
});
cricket().then((res) => {
    console.log(res);
});
cricket().catch((err) => { console.log(err); });
//.catch() me bhi response ko return karwa sakte hn
cricket().catch((error) => {
    console.log(error);
    return `Qudrat ka nizam`;
})
    .finally(() => {
    console.log(`Flight pakro`);
});
//ASYNC AWAIT FUNCTION=> TO RESOLVE CHAIN HELL
function getReesult() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield cricket();
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            console.log(`Flight pakro`);
        }
    });
}
getReesult();
