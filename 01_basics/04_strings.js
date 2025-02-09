let age = 33
let uName = "Hrithik"
console.log(`My name is ${uName} and my age is ${age}`)

const anyName = new String("Hrithik")
console.log(anyName.__proto__) // to check the protype/method for the string
console.log(anyName.charAt(2)) //check index and return char
console.log(anyName.indexOf('i')) //check char and return index

var otherName = anyName.substring(0,7)
console.log(otherName)

// Sliced method will also take negative and start from reverse

//The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2)


//A string can be converted to an array with the split() method
let text = "a, b, c, d, e, f";
const myArray = text.split(", ");
console.log(myArray)