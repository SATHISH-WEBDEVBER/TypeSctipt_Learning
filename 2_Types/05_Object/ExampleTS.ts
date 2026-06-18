// Object Type Example - TypeScript

// Creating an object with defined property types.
// property datatype-களுடன் object உருவாக்கப்படுகிறது.
var student: {
name: string;
age: number;
} = {
name: "Sathish",
age: 21
};

// Display the object.
// object-ஐ காட்டுகிறது.
console.log(student);

// TypeScript prevents assigning a string to a number property.
// number property-க்கு string value assign செய்ய TypeScript அனுமதிக்காது.

// student.age = "Twenty One";

// Uncommenting the above line will produce a type error.
// மேலுள்ள வரியை uncomment செய்தால் type error வரும்.
