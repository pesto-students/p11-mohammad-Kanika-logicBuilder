'use strict';

// Define a Person object
let Person = {
  name: "kanika",
  email: "kala.kanika1998@gmail.com",
  
  // Getter function for the age property
  getAge: function() {
    return this.age;
  },
  
  // Setter function for the age property
  setAge: function(ageValue) {
    this.age = ageValue;
  }
};

// Make the "name" and "email" properties non-writable using Object.defineProperty
Object.defineProperty(Person, "name", {
  writable: false
});
Object.defineProperty(Person, "email", {
  writable: false
});

// Make the "age" property settable using Object.defineProperty
Object.defineProperty(Person, "age", {
  set(ageValue) {
    this.age = ageValue;
  }
});

// Attempting to access the "age" property will return undefined because it cant be set as writable is false
console.log(Person.age);

// Log the property descriptors for the Person object
console.log(Object.getOwnPropertyDescriptors(Person));

// Uncommenting the line below will throw an error because "email" is not writable
// Person.email = "kanikakala";

//----------------------------------------2 Part----------------------------------------------------

// Define a Vehicle class with a constructor and a getDetails method
class Vehicle {
  constructor(make, model, year) {
    this.model = model;
    this.make = make;
    this.year = year;
  }

  getDetails() {
    let result = `${this.make} ${this.model} ${this.year}`;
    return result;
  }
}

// Define a Car class that extends the Vehicle class, with a constructor that takes an additional "numberDoor" parameter
class Car extends Vehicle {
  constructor(numberDoor, make, model, year) {
    // Call the parent class constructor with the "make", "model", and "year" parameters
    super(make, model, year);
    this.numberDoor = numberDoor;
  }

  // Override the getDetails method of the parent class to include the "numberDoor" property
  getDetails() {
    let str = super.getDetails();
    return `${str} ${this.numberDoor}`;
  }
}

// Create instances of the Vehicle and Car classes, and call their getDetails methods
let vehicle = new Vehicle("KIA", "EV6", 2023);
let car = new Car(2, "Mahindra", "Thar", 2023);
console.log(vehicle.getDetails());
console.log(car.getDetails());
