"use strict";
// //without inheritance
// class User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
//     getAge() {
//         return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
//     }       
// }
// class Admin {
//     firstName: string;
//     lastName: string
//     age: number;
//     role: string;
//     constructor(firstName: string, lastName: string, age: number, role: string) {
//         this.firstName = firstName; 
//         this.lastName = lastName;
//         this.age = age;
//         this.role = role;
//     }
//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}, your role is ${this.role}`;
//     }
//     getAge() {
//         return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
//     }
//     manageUsers() {
//         return `Managing users with role ${this.role}`;
//     }
// }
// let user1 = new User("Sathish", "MS", 22);  
// let admin1 = new Admin("Alice", "Johnson", 30, "SuperAdmin");
// console.log(user1.greet()); // Output: Hello Sathish MS
// console.log(user1.getAge()); // Output: Sathish MS is 22 years old. 
// console.log(admin1.greet()); // Output: Hello Alice Johnson, your role is SuperAdmin
// console.log(admin1.getAge()); // Output: Alice Johnson is 30 years old.
// console.log(admin1.manageUsers()); // Output: Managing users with role SuperAdmin
//with inheritance
class person {
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
class user extends person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
}
class admin extends person {
    role;
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }
    greet() {
        return `Hello ${this.firstName} ${this.lastName}, your role is ${this.role}`;
    }
    manageUsers() {
        return `Managing users with role ${this.role}`;
    }
}
let user1 = new user("Sathish", "MS", 22);
let admin1 = new admin("Alice", "Johnson", 30, "SuperAdmin");
console.log(user1.greet()); // Output: Hello Sathish MS
console.log(user1.getAge()); // Output: Sathish MS is 22 years old.
console.log(admin1.greet()); // Output: Hello Alice Johnson, your role is SuperAdmin
console.log(admin1.getAge()); // Output: Alice Johnson is 30 years old.
console.log(admin1.manageUsers()); // Output: Managing users with role SuperAdmin
