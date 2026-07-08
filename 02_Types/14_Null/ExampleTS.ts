// TypeScript uses "null" to represent an intentional absence of value, blocking direct access.
// "null" என்பது திட்டமிட்டு மதிப்பு இல்லை என்பதைக் குறிக்கும், இது பண்புகளை அணுகுவதைத் தடுக்கிறது.
let selectedUser: string | null = null;
console.log("Selected User:", selectedUser);
// Expected Output: Selected User: null
// எதிர்பார்க்கப்படும் வெளியீடு: Selected User: null

// Directly calling string methods on a nullable variable without safety checks causes an error.
// பாதுகாப்புச் சோதனைகள் இன்றி nullable variable-ல் நேரடியாக string methods-ஐ அழைக்க முயன்றால் பிழை ஏற்படும்.
// console.log(selectedUser.toUpperCase());

// We must perform a safety check before using the variable.
// variable-ஐப் பயன்படுத்துவதற்கு முன்பு நாம் பாதுகாப்புச் சோதனையைச் செய்ய வேண்டும்.
if (selectedUser !== null) {
    console.log(selectedUser.toUpperCase());
    // Expected Output: (No output since value is null)
    // எதிர்பார்க்கப்படும் வெளியீடு: (மதிப்பு null என்பதால் வெளியீடு இல்லை)
}