// TypeScript labels the box so it only accepts text values.
// TypeScript பெட்டியை லேபிளிடுவதால் அது உரைகளை மட்டுமே ஏற்கும்.
var message: string = "Hello";
console.log("Message:", message);
// Expected Output: Message: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Message: Hello

// Attempting to store a number value in a string box causes an error.
// string பெட்டியில் number மதிப்பைச் சேமிக்க முயன்றால் பிழை ஏற்படும்.
// message = 100;

// TypeScript guarantees that string methods like toUpperCase can be safely used.
// toUpperCase போன்ற string methods-ஐ பாதுகாப்பாக பயன்படுத்த முடியும் என TypeScript உறுதியளிக்கிறது.
console.log(message.toUpperCase());
// Expected Output: HELLO
// எதிர்பார்க்கப்படும் வெளியீடு: HELLO
