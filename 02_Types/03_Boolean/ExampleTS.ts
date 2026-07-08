// TypeScript locks the switch to only accept strict true/false boolean values.
// true/false பூலியன் மதிப்புகளை மட்டுமே ஏற்கும் வகையில் TypeScript variable-ஐ பூட்டுகிறது.
var isLoggedIn: boolean = true;
console.log("Logged In Status:", isLoggedIn);
// Expected Output: Logged In Status: true
// எதிர்பார்க்கப்படும் வெளியீடு: Logged In Status: true

// Attempting to assign a string like "false" to a boolean switch causes an error.
// boolean மாற்றிக்கு "false" போன்ற உரை மதிப்பை வழங்க முயற்சித்தால் பிழை ஏற்படும்.
// isLoggedIn = "false";

// TypeScript guarantees that logical branches are safe and reliable.
// தர்க்கரீதியான கிளைகள் பாதுகாப்பாகவும் நம்பகமாகவும் செயல்படுவதை TypeScript உறுதி செய்கிறது.
if (isLoggedIn) {
    console.log("User is allowed access!");
    // Expected Output: User is allowed access!
    // எதிர்பார்க்கப்படும் வெளியீடு: User is allowed access!
} else {
    console.log("Access denied!");
}
