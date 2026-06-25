// A variable acts like a binary light switch that should only be true or false.
// ஒரு variable என்பது true அல்லது false மட்டுமே இருக்க வேண்டிய ஒரு மின்விசை மாற்றி போன்றது.
var isLoggedIn = true;
console.log("Logged In Status:", isLoggedIn);
// Expected Output: Logged In Status: true
// எதிர்பார்க்கப்படும் வெளியீடு: Logged In Status: true

// JavaScript allows putting a string value like "false" into a boolean box.
// JavaScript ஒரு boolean பெட்டியில் "false" போன்ற string மதிப்பை வைக்க அனுமதிக்கிறது.
isLoggedIn = "false";
console.log("Updated Status:", isLoggedIn);
// Expected Output: Updated Status: false
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Status: false

// In JavaScript, a non-empty string like "false" is truthy, causing unexpected logical failures.
// JavaScript-ல், "false" என்ற உரை truthy ஆகக் கருதப்படுவதால் தர்க்கரீதியான பிழைகளை உருவாக்குகிறது.
if (isLoggedIn) {
    console.log("User is allowed access!");
    // Expected Output: User is allowed access!
    // எதிர்பார்க்கப்படும் வெளியீடு: User is allowed access!
} else {
    console.log("Access denied!");
}
