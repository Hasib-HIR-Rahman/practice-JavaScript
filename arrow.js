// function doubleIt (num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const add = (X, Y) => X + Y;

const give5 = () => 5;
 

const bigFun = (X, Y) => {
    const sum = X + Y;
    const diff = X - Y;
    const result = sum * diff;
    return result;
}
const result = bigFun(10, 4);
//const result = give5();
//const result = add(10, 40);
//const result = doubleIt(50);
console.log(result);