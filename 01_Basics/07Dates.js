
let date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.toString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.getDay());
// console.log(date.getDate());


// let newDate = new Date(2023,0,23);

// let newDate = new Date(2023,0,23,5,23);
// let newDate = new Date('2023,00,23');       // will throw invalid date, because when we give it as double zero it takes as zero
                                               // but in above expression, it consider 0 as first month because it take month as an array formate
// let newDate = new Date('2023,01,23');

let newDate = new Date("01-14-2023");

// console.log(newDate.toLocaleString());



let timeStamp = Date.now();

// console.log(timeStamp);

// console.log(newDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));       // to get in second.


console.log(date);
console.log(date.getTime());
console.log(date.getMonth()+1);

console.log(date.toLocaleString('default',{year:"numeric"}));
console.log(date.toLocaleString('default',{year:"2-digit"}));

console.log(date.toLocaleString('default',{weekday:"long"}));
console.log(date.toLocaleString('default',{weekday:"narrow"}));
console.log(date.toLocaleString('default',{weekday:"short"}));

console.log(date.toLocaleString('default',{month:"2-digit"}));
console.log(date.toLocaleString('default',{month:"long"}));
console.log(date.toLocaleString('default',{month:"narrow"}));
console.log(date.toLocaleString('default',{month:"numeric"}));
console.log(date.toLocaleString('default',{month:"short"}));
