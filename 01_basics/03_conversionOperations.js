let number = "33abc"
let convertNumber = Number(number)
console.log(convertNumber)

// 33 => Number
// 33ac => NaN
// true => 1; flase => 0

let string = 33
let convertString = String(string)
console.log(convertString)

// "33" => 33 of string type

let booleanNum = 0
let booleanString = "hrithik"
let convertBooleanNum = Boolean(booleanNum)
let convertBooleanString = Boolean(booleanString)
console.table([convertBooleanNum,convertBooleanString])

// 1 => true; 0 => false
// "" => false; "hrithik" => true