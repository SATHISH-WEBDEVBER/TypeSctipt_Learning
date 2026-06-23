# Strong Typing

## Definition | வரையறை

Strong Typing means that variables are bound to specific datatypes. Once a variable is declared with a type, it cannot hold values of other datatypes, and any mismatch is caught as an error.

Strong Typing என்பது variables குறிப்பிட்ட datatypes-உடன் பிணைக்கப்படுவதைக் குறிக்கிறது. ஒரு variable ஒரு குறிப்பிட்ட வகைக்காக உருவாக்கப்பட்டால், அதில் வேறு வகை மதிப்புகளைச் சேமிக்க முடியாது. அவ்வாறு செய்தால் error ஏற்படும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

In large applications, dynamic typing leads to silent runtime errors (like NaN or undefined) that are difficult to trace. Strong Typing catches these errors instantly during development, making the code self-documenting and highly reliable.

பெரிய அளவிலான applications-ல், dynamic typing மூலமாக கணிக்க முடியாத runtime பிழைகள் (NaN அல்லது undefined போன்றவை) ஏற்படும். Strong Typing இவற்றை development நேரத்திலேயே கண்டறிந்து குறியீட்டை நம்பகமானதாக மாற்றுகிறது.

---

## JavaScript Example

```javascript
// Beginner: JavaScript allows variables to change types dynamically.
// பிகினர்: JavaScript-ல் variable-ன் datatypes-ஐ எளிதாக மாற்றிக்கொள்ளலாம்.
var age = 25;
console.log("Type of age:", typeof age);
// Expected Output: Type of age: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type of age: number

age = "Twenty Five";
console.log("Type of age after change:", typeof age);
// Expected Output: Type of age after change: string
// எதிர்பார்க்கப்படும் வெளியீடு: Type of age after change: string

// Intermediate: Functions in JavaScript accept any datatype, causing unexpected outputs.
// இன்டர்மீடியட்: JavaScript function-கள் எந்த datatype-ஐயும் ஏற்கும், இதனால் எதிர்பாராத விடைகள் வரலாம்.
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Result with correct types:", calculateTotal(10, 5));
// Expected Output: Result with correct types: 50
// எதிர்பார்க்கப்படும் வெளியீடு: Result with correct types: 50

console.log("Result with incorrect types:", calculateTotal("ten", 5));
// Expected Output: Result with incorrect types: NaN
// எதிர்பார்க்கப்படும் வெளியீடு: Result with incorrect types: NaN

// Advanced: JavaScript allows adding or changing object properties without structure enforcement.
// அட்வான்ஸ்டு: JavaScript-ல் object அமைப்பை கட்டுப்படுத்தாமல் புதிய பண்புகளைச் சேர்க்கவோ மாற்றவோ முடியும்.
var user = {
    id: 101,
    name: "Sathish"
};
// Accessing a misspelled property returns undefined without warning.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
console.log("User email:", user.emial);
// Expected Output: User email: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User email: undefined
```

### Output

```text
Type of age: number
Type of age after change: string
Result with correct types: 50
Result with incorrect types: NaN
User email: undefined
```

### Observation

JavaScript allows dynamic changes to variables, calculation with incompatible datatypes, and accessing undeclared properties, leading to unexpected behaviors (NaN, undefined) at runtime without warning.

JavaScript-ல் variable types-ஐ மாற்றுவது, பொருந்தாத வகைகளில் கணக்கீடு செய்வது மற்றும் இல்லாத properties-ஐ அணுகுவது போன்றவற்றை runtime-ல் எந்த எச்சரிக்கையுமின்றி அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
// Beginner: Enforcing variable datatypes
var age: number = 25;
age = "Twenty Five"; // Compile Error: Type 'string' is not assignable to type 'number'.

// Intermediate: Enforcing function parameter datatypes
function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}
calculateTotal("ten", 5); // Compile Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Advanced: Enforcing strict object shapes
interface User {
    id: number;
    name: string;
}
var user: User = { id: 101, name: "Sathish" };
console.log(user.emial); // Compile Error: Property 'emial' does not exist on type 'User'.
```

### Output

```text
Compilation Error: Datatype mismatches and invalid property access are blocked.
```

### Observation

TypeScript catches type mismatches, incorrect function arguments, and object spelling errors during compilation, stopping buggy code from running.

TypeScript, தவறான datatype ஒதுக்கீடுகள், பொருந்தாத function arguments மற்றும் object எழுத்துப்பிழைகளை கம்பைல் நேரத்திலேயே கண்டறிந்து பிழையான குறியீடு ரன் ஆவதைத் தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Type Checking | Checked at runtime (Dynamic) | Checked at compile time (Static) |
| Safety Level | Low (Allows silent errors like NaN/undefined) | High (Prevents variable and object shape mismatches) |
| Object Validation | Properties can be added or accessed freely | Strictly validates object properties and structures |
| Function Verification | Parameter types are not validated | Validates parameter and return types strictly |

---

## Real-World Example | நடைமுறை உதாரணம்

Imagine a bank transaction system where the deposit amount must be a number. In JavaScript, if a user input sends a string value like "100" or text like "abc", the system might perform string concatenation (e.g., balance + "100") or produce NaN, leading to financial calculation bugs. TypeScript enforces the amount to be strictly a number, preventing these bugs before the code is deployed.

ஒரு வங்கி பரிவர்த்தனை முறையை கற்பனை செய்து பாருங்கள், அங்கு வைப்புத்தொகை (deposit amount) எப்போதும் number ஆக இருக்க வேண்டும். JavaScript-ல் பயனர் உள்ளீடு "100" அல்லது "abc" என்று string-ஆக வந்தால், கணினி தவறான கணக்கீட்டை (NaN அல்லது string concatenation) செய்யும். TypeScript இந்த தொகையை number-ஆக மட்டுமே இருக்க வேண்டும் என்று கட்டாயப்படுத்தி, குறியீடு வெளியிடுவதற்கு முன்பே பிழைகளைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Early Bug Detection | Mismatches and structural errors are caught during compilation. |
| Zero Silent Errors | Prevents values like NaN and undefined from passing through undetected. |
| Strict Object Shapes | Guarantees that objects conform to defined interfaces, avoiding typos. |
| Enhanced Refactoring | Safe to change property names as the compiler flags all references. |

---

## Interview Question

### What is the difference between Strong Typing and Weak Typing?

Strong Typing prevents implicit conversion between incompatible datatypes (e.g., adding a string and a number requires explicit conversion). Weak Typing (like in JavaScript) allows implicit conversion and type changes at runtime, often leading to unexpected errors.

Strong Typing என்பது பொருந்தாத datatypes-க்கு இடையே தானியங்கி மாற்றங்களைத் தடுக்கிறது (உதாரணமாக, string மற்றும் number-ஐக் கூட்டும்போது வெளிப்படையான மாற்றம் தேவைப்படும்). Weak Typing (JavaScript போன்றவை) runtime-ல் தானியங்கி மாற்றங்களையும் மாறும் தன்மையையும் அனுமதிக்கிறது, இது பெரும்பாலும் எதிர்பாராத பிழைகளுக்கு வழிவகுக்கிறது.

---

## Summary | சுருக்கம்

* Strong Typing restricts variables to their declared datatypes.
  Strong Typing ஒரு variable-ஐ அதன் குறிக்கப்பட்ட datatype-க்கு மட்டுமே கட்டுப்படுத்துகிறது.
* TypeScript enforces Strong Typing to ensure type safety.
  Type safety-ஐ உறுதி செய்ய TypeScript strong typing-ஐ நடைமுறைப்படுத்துகிறது.
* Datatype mismatches are caught during compile time, not runtime.
  Datatype தவறுகள் compile நேரத்திலேயே கண்டறியப்பட்டு பிழைகள் தவிர்க்கப்படுகின்றன.
* It improves code reliability and prevents runtime errors.
  இது code-ன் நம்பகத்தன்மையை மேம்படுத்துகிறது மற்றும் runtime பிழைகளைத் தடுக்கிறது.
