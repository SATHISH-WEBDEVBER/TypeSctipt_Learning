// JavaScript defaults declared but unassigned variables to "undefined".
// JavaScript உருவாக்கப்பட்டு மதிப்பு ஒதுக்கப்படாத variables-க்கு "undefined" மதிப்பை வழங்கும்.
var userName;
console.log("User Name:", userName);
// Expected Output: User Name: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User Name: undefined

// JavaScript allows accessing properties on undefined variables, crashing at runtime.
// Undefined variables-ன் பண்புகளை அணுக முயலும்போது JavaScript ரன்டைமில் முடங்கும்.
try {
    console.log(userName.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: Cannot read properties of undefined (reading 'toUpperCase')
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: Cannot read properties of undefined (reading 'toUpperCase')
}