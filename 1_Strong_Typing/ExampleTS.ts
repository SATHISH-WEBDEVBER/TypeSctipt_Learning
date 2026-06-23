// TypeScript labels the box so it only accepts numbers.
// TypeScript பெட்டியை லேபிளிடுவதால் அது எண்களை மட்டுமே ஏற்கும்.
var age: number = 25;
console.log("Age:", age);
// Expected Output: Age: 25
// எதிர்பார்க்கப்படும் வெளியீடு: Age: 25

// Attempting to store a string value in a number box causes an error.
// number பெட்டியில் string மதிப்பைச் சேமிக்க முயன்றால் பிழை ஏற்படும்.
// age = "Twenty Five";

// The function machine is configured to strictly accept only number inputs.
// function இயந்திரம் எண்களை மட்டுமே ஏற்கும் வகையில் அமைக்கப்பட்டுள்ளது.
function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}
console.log("Total:", calculateTotal(10, 5));
// Expected Output: Total: 50
// எதிர்பார்க்கப்படும் வெளியீடு: Total: 50

// Passing text will be blocked during compilation, preventing bugs.
// உரையை அனுப்ப முயற்சித்தால் கம்பைல் நேரத்திலேயே தடுக்கப்பட்டு பிழைகள் தவிர்க்கப்படும்.
// console.log(calculateTotal("ten", 5));

// An interface acts as a template for the student ID card.
// ஒரு interface மாணவர் அடையாள அட்டைக்கான மாதிரியாக செயல்படுகிறது.
interface Student {
    id: number;
    name: string;
}

var student: Student = {
    id: 101,
    name: "Sathish"
};

// Accessing properties not defined in the template causes an error.
// மாதிரியில் இல்லாத பண்புகளை அணுக முயற்சித்தால் பிழை ஏற்படும்.
// console.log(student.rollNum);