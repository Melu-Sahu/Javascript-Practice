
let arr1 = [4,5,3,62,3];
let arr2 = new Array("Harish", "Jageshwar","Melu",'Ramraj');

console.log(arr1);
console.log(typeof(arr1));
console.log(arr2);
console.log(typeof(arr2));

arr2.push("random");        // push add the element in last index.  Now 'random' added to arr2
console.log(arr2);
arr2.pop();             // remove element from last index. Now 'random' removed from arr2
console.log(arr2);
console.log(arr2.length)    // returns length of the array.
console.log(arr2.unshift(4))    // will add element in first index
console.log(arr2);

arr2.shift();           // will remove the first element from the array.
console.log(arr2);


let arr3 = arr1.join();            // will bind all the element in a string.
console.log(arr3);
console.log(typeof(arr3));


// Sclice and spilice

console.log(arr1.slice(1,4));               // slice operation does not manipulate the  original array.
console.log(`after slice operation arr1 is `);
console.log(arr1);

console.log(arr1.splice(1,4));              // splice operation manipulates the original array.
console.log(`after splice operation arr1 is `);
console.log(arr1);