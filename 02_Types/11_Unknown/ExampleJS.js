// JavaScript treats everything dynamically, allowing method calls on values of any type.
// JavaScript அனைத்தையும் dynamic ஆகக் கையாளுவதால், எந்தவொரு மதிப்பிலும் method-களை அழைக்க அனுமதிக்கிறது.
var packageData = "Secret Message";

// Accessing methods on a string works.
// String-ல் method-களை அணுகும்போது செயல்படுகிறது.
console.log(packageData.toUpperCase());
// Expected Output: SECRET MESSAGE
// எதிர்பார்க்கப்படும் வெளியீடு: SECRET MESSAGE

// JavaScript allows changing to a number, but calling string methods on it crashes at runtime.
// JavaScript இதனை எண்ணாக மாற்ற அனுமதிக்கிறது, ஆனால் இதில் string method-ஐ அழைத்தால் ரன்டைமில் முடங்கும்.
packageData = 100;
try {
    console.log(packageData.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: packageData.toUpperCase is not a function
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: packageData.toUpperCase is not a function
}