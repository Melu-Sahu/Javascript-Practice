
let score = 45;
let score2 = "45";
let score3 = "456abc";

// console.log(typeof score);
// console.log(typeof(score2));
// console.log(typeof(score3));

// let valueInNumber = Number(score2)  //   score2 is converted into number value.
// console.log("The value of score2 is :"+ valueInNumber);
// console.log("and type is : "+typeof(valueInNumber));

// let valueInNumber2 = Number(score3);        // Also converted into number but if we print it, it will show Not a Number (NaN);
// console.log(valueInNumber2);
// console.log(typeof(valueInNumber2));


// In case of null it will be zero and 
// In case of undefined it will be NaN

// console.log("null to Number returns :  "+Number(null));
// console.log("undefined to Number returns  :  "+Number(undefined));
// console.log("true to Number returns :  "+Number(true));          // will be 1
// console.log("false to Number returns :  "+Number(false));         // will be 0

// console.log("Empty string '' to boolean :  "+Boolean(""));           // Empty String will be false
// console.log("'Melu' to boolean :  "+Boolean("Melu"));       // any string will return true
// console.log("0 to boolean :  "+Boolean(0));            // Will return false
// console.log("1 to boolean :  "+Boolean(1));            // will return true
// console.log("4 to boolean :  "+Boolean(4));            // will return true

// console.log(45 +" converted to string is :"+ typeof(String(45))+ "& value is "+ String(45));
// console.log(true +" converted to string is :"+ typeof(String(true))+ "& value is "+ String(true));
// console.log(false +" converted to string is :"+ typeof(String(false))+ "& value is "+ String(false));
// console.log(undefined +" converted to string is :"+ typeof(String(undefined))+ "& value is "+ String(undefined));
// console.log(null +" converted to string is :"+ typeof(String(null))+ "& value is "+ String(null));



//  ************************

// console.log("1"+4);
// console.log("1"+"4");
// console.log(1+"4" + 1);
// console.log("1"+4+4);
// console.log(4 +5 +"3");


// ************************ Comperasio Operators **************

// console.log("2">1);
// console.log(2>"1");             // js convert's string value to number  then conversion happens.

// console.log(null>0);
// console.log(null<0);
// console.log(null == 0);
// console.log(null  >=0 );        /* The reason is that the equality checks == >= <= <  > works differently.
//                                     Comparison converts null to number, treated as 0. 
//                                     That's why  'null >= 0 ' is true and 'null>0' is false. */
// console.log(null <=0 );


// console.log(undefined > 0);
// console.log(undefined<0);
// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined<=0);


// ******************* Strictly Comparision **************

console.log("2" == 2);          // true, because it converts string to number.
console.log("2"===2);           // also checks datatype


console.log(0==false);
console.log(1==true);
console.log(0===false);
console.log(1===true);