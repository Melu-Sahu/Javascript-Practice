
// False Values.

// false, 0, -0, BigInt 0n,  '', "" , null , undefined , NaN

// Truthy values

// 'false', 'truth', true [], {} ,' ' , function (){}      '0'

let userEmails = [];
// if(userEmails.length == 0)
// {
//     console.log(`  This will be true value for array 1.`);
// }
// if(userEmails){
//     console.log('This will be true value for array.  2');
// }

// similarly for object.

let emptObj = {};

// if(Object.keys(emptObj) == 0){
//     console.log('This will be true for Object.  1');
// }
// if(emptObj){
//     console.log("This will be true for Object.  2");
// }



        // ************* Nullish Coalescing Operator (??) : null undefined *******************

let value ;

// value = 4??5;   
// value  = null ?? 56;

//  value = undefined ?? 45;

// value == null ?? undefined;          // assign undefined.
value = undefined ?? null;           // assign null


// value = null ?? 45 ?? 32;
value = undefined ?? 45 ?? 32;

// console.log(`Value is : ${value}`);




// Terniary Operator

(value)?console.log(`Now Value is ${value}`): console.log(` value is undefined or null : ${value}.`);

