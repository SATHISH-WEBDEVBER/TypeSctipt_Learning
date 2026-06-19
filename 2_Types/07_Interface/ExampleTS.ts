// Interface Example - TypeScript

// Defining a structure using an interface.
// interface மூலம் object structure வரையறுக்கப்படுகிறது.
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Creating an object that follows the interface.
// interface structure-ஐ பின்பற்றும் object உருவாக்கப்படுகிறது.
let user: User = {
  id: 1,
  name: "Sathish",
  isActive: true
};

// Display the object.
// object-ஐ காட்டுகிறது.
console.log(user);

// TypeScript prevents missing required properties.
// தேவையான properties இல்லாவிட்டால் TypeScript error காட்டும்.

// let user2: User = {
//   id: 2
// };