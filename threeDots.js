const ages = [20, 21, 22, 23];
const ages2 = [24, 25, 26, 27];
const ages3 = [28, 29, 26, 30];
const allAges = ages.concat(ages2).concat([0,1]).concat(ages3);
const allAges2 = [...ages, ...ages2, 10, 15, ...ages3];
// console.log(allAges2);
// console.log(allAges);

const business = 500;
const minister = 300;
const sochib = 200;

const money = [200,300,400,500];

const maximum = Math.max(business, minister, sochib);
const maximum1 = Math.max(...money);
//console.log(maximum);
console.log(maximum1);