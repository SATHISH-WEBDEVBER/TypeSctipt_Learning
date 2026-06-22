"use strict";
class User {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    }
}
// creating an instance of the User class
const user1 = new User("Sathish", "MS", 22);
const user2 = new User("Alice", "Johnson", 30);
console.log(user1.greet()); // Output: Hello Sathish MS
console.log(user1.getAge()); // Output: Sathish MS is 22 years old.
console.log(user2.greet()); // Output: Hello Alice Johnson
console.log(user2.getAge()); // Output: Alice Johnson is 30 years old.
