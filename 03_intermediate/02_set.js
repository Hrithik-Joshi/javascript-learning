//The primary feature of a Set is that it stores only unique values.
const s = new Set();
// s.add(1);
// s.add(2);
// s.add(2);  
// console.log(s.size); 


//For non-primitive elements, specifically objects, uniqueness is based on reference equality rather than content equality:
const s2 = new Set();
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' }; // identical properties to obj1

s2.add(obj1);
s2.add(obj2);

console.log(s2.size); 
console.log(s2.has(obj1));
console.log(s2.has(obj2));
console.log([...s2]); 


//Remove Duplicates from Arrays
const a = [1, 2, 2, 3, 4, 4, 5];

// Creating array b containing unique
// elements of a using set
const b = [...new Set(a)];
console.log(b);  
