
// const obj = new Object();

// const obj = {};

// const obj1 = {1:"a", 2:'b'};
// const obj2 = {3:'c', 4:'d'};

// const obj3 = { obj1, obj2};              // This will return object of objects

// Object.assign(obj1, obj2);             // This will store the elements of obj2 in obj1 and manipulate the original object.

// const obj4 = Object.assign({}, obj1, obj2); // this will store the elements of obj1 and obj2 in an empty object and assign this new object to obj4.
                                            // doublicate key names does not allowd.
// Syntex    const obj = Object.assign(target, source);         // all the source coppied to target element and returned to obj 


// console.log(obj1);
// console.log(obj3);
// console.log(obj4);

// const obj = {...obj1, ...obj2, ...obj3};            // using spread operator.
// const obj = Object.assign({},obj1, obj2,obj3);          // both will work same.

// console.log(obj);

// console.log(obj.hasOwnProperty('a'));           // returns that property is available in the object or not.
// console.log(obj.hasOwnProperty('1'));


// console.log(Object.keys(obj));              // will return array of keys of Obj
// console.log(Object.values(obj));            // will return array of values of obj
// console.log(Object.entries(obj));           // returns keys and values as array formate individually.



                    // ************** Object Destructering *****************
const details = {
    name:'meluram',
    age: 23,
    email: 'melusahu0143@gmail.com'
}

const {email} = details;
console.log(email);

const {name :Uname} = details;
console.log(Uname);