

let sbl = Symbol('sbl1');

let obj1 = {
    fname: "Melu",
    lname : 'Sahu',
    "full name": 'Meluram Sahu',
    email: 'melusahu@apple.com',
    [sbl]   : "Symble1",            // Syntex of Symble data types in object is like this.
    classResult: {class10: 83, class12 : 80, graduation: 76, msc: 'not declared.'},

    printName: function(){
        return `Name is : }`;
    }
};

// we can access the object like below

// console.log(obj1.fname);
// console.log(obj1.lname);
// console.log(obj1["full name"]);     // if we have to access the full name, then we must have to access like this.
// console.log(obj1[sbl]);             // also if we have to access the symbal type, then we have to write like this.
// console.log(obj1);


// console.log(obj1);

// Object.freeze(obj1);                // Now we cannot change any value in the user using freeze method.

// Object.freeze(obj1.email);              // We can freeze any one particular value. But it will not return any error even it is freezed.

obj1.fname = "Meluram";

obj1.email = 'dev.melusahu@apple.com';
// console.log(obj1);

// console.log(obj1.printName('Meluram'));

obj1.printNameTwo = function(){
    console.log("Hii melu");
}
// console.log(obj1.printNameTwo());


obj1.printMail = function(){
    console.log(`Email ID is : ${this.email}`);
}

obj1.printMail();           // This will print only mail, because we are only calling the method
console.log(obj1.printMail());      // This will print undefined after printing mail, because there have another console.log which doesn't have value. It is calling the function.