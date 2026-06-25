// An object acts like a product specification sheet with flexible values.
// ஒரு object என்பது மாற்றக்கூடிய மதிப்புகளைக் கொண்ட தயாரிப்பு விவரக்குறிப்புத் தாள் போன்றது.
var user = {
    id: 101,
    name: "Sathish"
};
console.log("User Name:", user.name);
// Expected Output: User Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: User Name: Sathish

// JavaScript allows changing datatype values of property keys freely.
// JavaScript அதன் பண்புகளின் (properties) datatypes-ஐ எளிதாக மாற்ற அனுமதிக்கிறது.
user.id = "One Zero One";
console.log("Updated User:", user);
// Expected Output: Updated User: { id: 'One Zero One', name: 'Sathish' }
// எதிர்பார்க்கப்படும் வெளியீடு: Updated User: { id: 'One Zero One', name: 'Sathish' }

// Accessing a misspelled property returns undefined without warning.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
console.log("User Email:", user.emial);
// Expected Output: User Email: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User Email: undefined
