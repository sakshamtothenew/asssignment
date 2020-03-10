import {rectangle , circle , cylinder } from './module1.js';
import {filter} from './filteringModule.js'


// Q6.
let length = 10  , breath = 20 , radius = 5 , height = 10;

console.log(rectangle(length , breath));

console.log(circle(radius));

console.log(cylinder(radius ,height ))




// Q7.
let arr = [1,1,1,2,5,4,3,7,7,9,1,3,4,9,5,7,11,65,12,11,];
console.log(filter(arr))


