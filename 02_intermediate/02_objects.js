//deleteing properties
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person.age;

  //nested objects
  myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.myCars.car2)
  console.log(myObj["myCars"]["car1"])

  //adding function as a variable in the object
  const person1 = {
    firstName: "Hrithik",
    lastName: "Joshi",
    id: 1234,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  let fname = person1.fullName();
  console.log(fname)