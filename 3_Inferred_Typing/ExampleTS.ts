// TypeScript automatically infers (guesses) the type from the initial value.
// TypeScript தொடக்க மதிப்பை வைத்து அதன் வகையைத் தானாகவே கண்டறிகிறது (இன்ஃபர் செய்கிறது).
var price = 100;
console.log("Type of price:", typeof price);
// Expected Output: Type of price: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type of price: number

// Attempting to assign a string to an inferred number variable causes an error.
// எண் வகையாகக் கண்டறியப்பட்ட variable-க்கு string மதிப்பை வழங்க முயன்றால் பிழை ஏற்படும்.
// price = "One Hundred";
