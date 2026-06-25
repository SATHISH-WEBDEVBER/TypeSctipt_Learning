// In JavaScript, functions without a return statement implicitly return undefined.
// JavaScript-ல், return கட்டளை இல்லாத functions மறைமுகமாக undefined-ஐத் திருப்பித் தரும்.
function logMessage(message) {
    console.log("Log:", message);
}

var result = logMessage("Action completed");
// Expected Output: Log: Action completed
// எதிர்பார்க்கப்படும் வெளியீடு: Log: Action completed

console.log("Returned Value:", result);
// Expected Output: Returned Value: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Returned Value: undefined

// JavaScript allows using the returned undefined value in other logic, causing bugs.
// JavaScript இந்த undefined மதிப்பை மற்ற தர்க்கங்களில் பயன்படுத்த அனுமதிப்பதால் பிழைகள் வரலாம்.
if (result) {
    console.log("This will not print because undefined is falsy.");
}