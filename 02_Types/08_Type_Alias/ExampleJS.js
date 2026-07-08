// JavaScript does not support type aliases, requiring duplicate definitions.
// JavaScript-ல் type aliases இல்லாததால், நாம் விளக்கங்களை மீண்டும் மீண்டும் எழுத வேண்டும்.
function printId(id) {
    console.log("ID:", id);
}

// Any type can be passed since there is no type nickname check.
// வகைகளை சரிபார்க்கும் சுருக்கப்பெயர் இல்லாததால் எந்த வகையையும் அனுப்பலாம்.
printId(101);
// Expected Output: ID: 101
// எதிர்பார்க்கப்படும் வெளியீடு: ID: 101

printId("EMP101");
// Expected Output: ID: EMP101
// எதிர்பார்க்கப்படும் வெளியீடு: ID: EMP101

printId(true);
// Expected Output: ID: true
// எதிர்பார்க்கப்படும் வெளியீடு: ID: true