// Creating a variable with a strict number datatype.
// number datatype-உடன் variable உருவாக்கப்படுகிறது.
var score: number = 100;
console.log("Type:", typeof score);
// Expected Output: Type: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type: number

// TypeScript prevents assigning a string value to a number variable.
// number variable-க்கு string value-ஐ assign செய்ய TypeScript அனுமதிக்காது.
// score = "One Hundred";

// Extra: TypeScript enforces parameter types in functions to prevent calculation bugs.
// கூடுதல்: கணக்கீட்டு பிழைகளைத் தடுக்க TypeScript function-களில் parameter types-ஐ கட்டாயப்படுத்துகிறது.
function addBonus(score: number, bonus: number): number {
    return score + bonus;
}
console.log("Result:", addBonus(100, 50));
// Expected Output: Result: 150
// எதிர்பார்க்கப்படும் வெளியீடு: Result: 150

// Attempting to pass a string will cause a compilation error.
// string-ஐ அனுப்ப முயற்சித்தால் compilation error ஏற்படும்.
// console.log(addBonus(100, "50"));