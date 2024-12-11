// 'use strict';

// const Person = function(fName, birthYear) {
//     //instance properties
//     this.fName = fName;
//     this.birthYear = birthYear;

//     //never do this
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear)
//     // }
// }

// const Jerry = new Person('Jerry', 2005)
// console.log(Jerry)

// //1. new {} is created
// // 2. function is called, this = {}
// // 3. {} liked to prototype
// // 4. function auto returns {}

// const kevin = new Person('kevin', 2030)
// const Jack = new Person('Jack', 2030)
// console.log(kevin, Jack)

// const jay = 'Jay'

// console.log(Jerry instanceof Person);

// // Prototypes
// console.log(Person.prototype)

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear)
// }

// Jerry.calcAge()

// console.log(Jerry.__proto__)
// console.log(Jerry.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(Jerry));
// //

// Person.prototype.species = 'Home Sapiens'
// console.log(Jerry.species, kevin.species)

// console.log(Jerry.hasOwnProperty('species'))

// console.log(Jerry.__proto__)
// // object.prototype
// console.log(Jerry.__proto__.__proto__)
// console.log(Jerry.__proto__.__proto__.__proto__)

// console.dir(Person.prototype.constructor)

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(this.speed);
};

Car.prototype.brake = function() {
    this.speed -= 5
    console.log(this.speed)
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.brake()
car2.accelerate()

car1.brake()
car2.accelerate()

car1.brake()
car2.accelerate()