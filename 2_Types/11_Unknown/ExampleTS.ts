// TypeScript uses "unknown" like a sealed package: you must verify its type before opening it.
// "unknown" என்பது ஒரு சீல் வைக்கப்பட்ட பொதி போன்றது: அதைப் பயன்படுத்துவதற்கு முன் அதன் வகையைச் சரிபார்க்க வேண்டும்.
var packageData: unknown = "Secret Message";

// Directly calling string methods on an unknown variable is blocked.
// Unknown variable-ல் நேரடியாக string methods-ஐ அழைப்பது தடுக்கப்படும்.
// console.log(packageData.toUpperCase());

// We must narrow the type (unbox it) before performing type-specific actions.
// நாம் அதன் வகையை உறுதி செய்த பின்னரே அதற்குரிய செயல்பாடுகளைச் செய்ய முடியும்.
if (typeof packageData === "string") {
    console.log(packageData.toUpperCase());
    // Expected Output: SECRET MESSAGE
    // எதிர்பார்க்கப்படும் வெளியீடு: SECRET MESSAGE
}