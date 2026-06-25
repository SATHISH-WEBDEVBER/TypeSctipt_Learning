// TypeScript uses "undefined" to represent uninitialized state, enforcing safety checks.
// மதிப்பற்ற நிலையை குறிக்க "undefined" பயன்படுகிறது, இது பாதுகாப்புச் சோதனைகளைக் கட்டாயப்படுத்துகிறது.
let userName: string | undefined;
console.log("User Name:", userName);
// Expected Output: User Name: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User Name: undefined

// Directly using methods on an undefined variable is blocked by the compiler.
// Undefined variable-ல் நேரடியாக methods-ஐப் பயன்படுத்துவது கம்பைலரால் தடுக்கப்படும்.
// console.log(userName.toUpperCase());

// We must perform a type check before executing string-specific methods.
// உரை செயல்பாடுகளை இயக்குவதற்கு முன்பு நாம் வகைச் சோதனையைச் செய்ய வேண்டும்.
if (userName !== undefined) {
    console.log(userName.toUpperCase());
    // Expected Output: (No output since value is undefined)
    // எதிர்பார்க்கப்படும் வெளியீடு: (மதிப்பு undefined என்பதால் வெளியீடு இல்லை)
}