let m = new Map();
m.set('name', 'GFG');
m.set(1, 'JS');
console.log(m);
console.log(m.size);
console.log(m.get('name'));  

/*
One of the most powerful features of Map is its flexibility in terms of keys.
In contrast to regular objects, which only support strings or symbols as keys,
a Map can accept any type of value—such as numbers, objects, arrays, or even 
functions—as keys.
*/

//Maps Preserve Order of Keys
m.clear();  
console.log(m.size); 

//loop
const m1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let [key, value] of m1) {
    console.log(`${key}: ${value}`);
}