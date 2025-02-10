const marvel_heroes = ["IronMan", "Thor", "Hulk"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes) //this is wrong way

// const temp_heores = marvel_heroes.concat(dc_heroes)
// console.log(temp_heores)

// other way using spread operator which is used professionally
const temp_heores = [...marvel_heroes, ...dc_heroes]
console.log(temp_heores)

// flattening of array
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
const fixed_array = another_array.flat(2); // define the depth upto how much you want to flat
console.log(fixed_array);

//Convert Array to string
const my_array = ["Hrithik","Joshi"]
let name_string = my_array.join(" ")
console.log(name_string) // now we can perform the operations related to string