// Type Alias Example - TypeScript

// Creating a custom type.
// custom type உருவாக்கப்படுகிறது.
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

// Creating an object using the custom type.
// custom type-ஐ பயன்படுத்தி object உருவாக்கப்படுகிறது.
let user1: User = {
  id: 1,
  name: "Sathish",
  isActive: true
};

// Display the object.
// object-ஐ காட்டுகிறது.
console.log(user1);