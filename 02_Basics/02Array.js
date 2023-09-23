
let marvel_heros = ["IronMan", "Thor","SpiderMan","BlackVidow","Hulk"];
let dc_heros = ["Flash", 'Batman', 'SuperMan'];

// console.log(marvel_heros);
// console.log(marvel_heros.push(dc_heros));  // will not consider cd_heros as saperate data. It will push the entire array as it is. like array inside array.
                                                // this method manipulate the original array.
// console.log(marvel_heros);    


let all_Heroes = marvel_heros.concat(dc_heros);             // this method will not manipulate the original array. This method will return a new array.
                                                            // Will concate both array and make a new array.
// console.log(all_Heroes);

let allNewHeroes = [...marvel_heros,...dc_heros];       // this is known as spread technique.
                                                        // in Spread Operator, all the element of array get spred and then get stored in new array.
// console.log(allNewHeroes);



let anotherArray = [1,2,3,[4,5,[78,98],9,23]];

// console.log(anotherArray)
// let anotherArrayFlat = anotherArray.flat();     // will flat one level
                                                // we can pass how many level we want to flat.
// let anotherArrayFlat = anotherArray.flat(2);

let anotherArrayFlat = anotherArray.flat(Infinity);     // will flat all the level of array and return a new array.

// console.log(anotherArrayFlat);

// let name = "Meluram Sahu";

// console.log(Array.isArray("Meluram Sahu"));             // will return true or false

// console.log(Array.from("Meluram Sahu"));            // will return an array of all the characters of the stirng.


let score1 = 100;
let score2 = 200;
let score3 = 300;
const scores =[score1 , score2, score3];        // we can take like this 

        //OR
console.log(scores);
console.log(Array.of(score1, score2, score3));