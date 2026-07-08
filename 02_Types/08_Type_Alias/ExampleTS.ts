// A Type Alias acts like a custom nickname to simplify complex type signatures.
// Type Alias என்பது சிக்கலான வகை விளக்கங்களை எளிமையாக்க பயன்படும் தனிப்பயன் சுருக்கப்பெயர் போன்றது.
type ID = string | number;

function printId(id: ID) {
    console.log("ID:", id);
}

// Using union type nickname is allowed.
// யூனியன் வகையின் சுருக்கப்பெயரைப் பயன்படுத்துவது அனுமதிக்கப்படுகிறது.
printId(101);
// Expected Output: ID: 101
// எதிர்பார்க்கப்படும் வெளியீடு: ID: 101

printId("EMP101");
// Expected Output: ID: EMP101
// எதிர்பார்க்கப்படும் வெளியீடு: ID: EMP101

// Unrelated types are blocked during compile time.
// தொடர்பில்லாத வகைகள் கம்பைல் நேரத்திலேயே தடுக்கப்படும்.
// printId(true);