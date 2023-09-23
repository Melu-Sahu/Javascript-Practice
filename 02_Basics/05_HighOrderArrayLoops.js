
const array = [2,3,4,5,67];

// for (const num of array) {
//     console.log(num);
// }

const myName = 'meluram shau';
for (const nameChar of myName)
{
    // console.log(`${nameChar}`);
}


// Map in Javascript


/*
map is a collection of key value pair.

A key in the Map may only occur once; it is unique in the Map's collection.


* Does not contain doublicate valiues
* Maintain Insersion order.
* set data using .set('key', value) method.
* get data using get('key') method.
* return size of map using (mapName.size)
* can delete data using .delete('key')
*/

const map = new Map();
const DOB = new Date('05/12/2000');

map.set('name','Meluram');
map.set('age',23);
map.set('DOB', DOB);


// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.

for (const info of map) {
    // console.log(info);
}

// If we want to destructrure these array, we can write like below
for (const [key, value] of map) {

    // console.log(`Value inside ${key} is : ${value}`);
}


// Same we can not iterate objects type. It will throw error

 const bestPlayer = new Object();

bestPlayer.cricket = 'Virat Kohli';
bestPlayer.fotboll = 'Ronaldo';
bestPlayer.chess = 'Pragananda';

// for (const player of bestPlayer) {
//     console.log(player);
// }

// we can iterate objects using forin loop

for (const key in bestPlayer) {
    // if (Object.hasOwnProperty.call(bestPlayer, key)) {          // will check weather the key is present in object or not
        const player = bestPlayer[key];
        // console.log(`for ${key} legend is : ${player}`);
    // }
}


// for array

for (const index in array) {
    // if (Object.hasOwnProperty.call(array, index)) {
        // const arr = array[index];
        // console.log(`value at ${index} is ${array[index]}`);
    // }
}

array.forEach((val)=>{
    // console.log(val);
})

function print(value){
    // console.log(value);
}

array.forEach(print);           // privide only reference of the function. Don't call


// Actually forEach() loop have three parameters by default.

array.forEach((value, index, arr)=>{
    console.log(`value ${value} is in index ${index} from arrray ${arr}`);
})


// We cannot iterate map using for-in loop











const add = function(){
    return 4+5;
}
// console.log(typeof add());          // will tell us return type of function.
// console.log(typeof add);            // will tell us the type of add (variable)





// console.log(NaN != NaN);
// console.log(NaN == NaN);
// console.log(NaN === NaN);

// console.log(typeof NaN);