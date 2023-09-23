// const score =400.978973;

// const number = new Number(300);

// console.log(typeof(score));
// console.log(typeof(number));

// console.log(number.toString());
// console.log(number.toString().length);

// console.log(score.toFixed(2));
// console.log(score.toPrecision(3));          // It returns string value.
//                                             // 

// const num = 4355.836634;
// console.log(num.toPrecision(3));            // if precision value is more then it will convert to exponential formate.
// console.log(num.toPrecision(4));

// const num1 = 100000000;

// console.log(num1.toLocaleString());
// console.log(num1.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.EPSILON);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);



//  ******************************************* Maths ***************************************


console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5)) ;    // Rounding up the numbers to nearest integer.
console.log(Math.floor(4.5) );   // Rounding down the numbers to nearest integer.
console.log(Math.pow(2,3));
console.log(Math.PI);
console.log(Math.min(45,64,36,32,63,65));
console.log(Math.max(443,634,634));
console.log(Math.random());         // always provide value between 0 to 1
console.log((Math.random()*10));
console.log((Math.random()*10)+1);      // To avoid zero
console.log(Math.floor((Math.random()*10)+1));      // To avoid precision value.




const randomNum = (Math.random() * ((9 - 7 ) + 1 ))+7;     // Random number from range of 7 to 9

console.log(randomNum);