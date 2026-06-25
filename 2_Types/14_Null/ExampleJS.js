// JavaScript treats null as an object, allowing any properties to be read or written.
// JavaScript null-ஐ ஒரு object-ஆகக் கருதுவதால், அதன் பண்புகளை அணுகவோ மாற்றவோ அனுமதிக்கிறது.
var selectedUser = null;
console.log("Selected User:", selectedUser);
// Expected Output: Selected User: null
// எதிர்பார்க்கப்படும் வெளியீடு: Selected User: null

// Accessing properties on null causes a crash at runtime.
// Null-ல் உள்ள பண்புகளை அணுக முயலும்போது ரன்டைமில் செயலி முடங்கும்.
try {
    console.log(selectedUser.name);
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: Cannot read properties of null (reading 'name')
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: Cannot read properties of null (reading 'name')
}