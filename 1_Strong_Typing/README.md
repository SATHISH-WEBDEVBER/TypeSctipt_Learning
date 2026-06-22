# Strong Typing

## Definition | வரையறை

Strong Typing means a variable must follow the datatype assigned to it. Assigning a value of a different datatype will result in an error.

Strong Typing என்பது ஒரு variable-க்கு கொடுக்கப்பட்ட datatype-ஐ அது தொடர்ந்து பின்பற்ற வேண்டும் என்பதாகும். வேறு datatype value கொடுத்தால் error ஏற்படும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

Strong Typing helps catch datatype-related mistakes during development, making applications more reliable and easier to maintain.

Strong Typing, datatype தொடர்பான தவறுகளை development நேரத்திலேயே கண்டறிந்து application-ஐ நம்பகமானதாகவும் பராமரிக்க எளிதாகவும் மாற்றுகிறது.

---

## JavaScript Example

```javascript
// Creating a variable with a number value.
// number மதிப்புடன் ஒரு variable உருவாக்கப்படுகிறது.
var score = 100;
console.log("Type:", typeof score);
// Expected Output: Type: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type: number

// JavaScript allows dynamically changing the datatype.
// JavaScript-ல் variable-ன் datatype-ஐ எளிதாக மாற்ற முடியும்.
score = "One Hundred";
console.log("New Type:", typeof score);
// Expected Output: New Type: string
// எதிர்பார்க்கப்படும் வெளியீடு: New Type: string

// Extra: JavaScript allows mixed types in calculations, causing unexpected results.
// கூடுதல்: JavaScript கணக்கீடுகளில் வெவ்வேறு types-ஐ அனுமதிப்பதால் எதிர்பாராத முடிவுகள் ஏற்படும்.
function addBonus(score, bonus) {
    return score + bonus;
}
console.log("Result:", addBonus(100, "50"));
// Expected Output: Result: 10050
// எதிர்பார்க்கப்படும் வெளியீடு: Result: 10050
```

### Output

```text
Type: number
New Type: string
Result: 10050
```

### Observation

JavaScript allows changing a variable's datatype at runtime and performing mixed-type operations, which can lead to calculation bugs (like string concatenation instead of addition).

JavaScript ஒரு variable-ன் datatype-ஐ runtime-ல் மாற்றவும், வெவ்வேறு types கொண்டு கணக்கீடு செய்யவும் அனுமதிக்கிறது. இது பிழையான முடிவுகளுக்கு வழிவகுக்கும் (கூட்டலுக்குப் பதிலாக இணைப்பது போல).

---

## TypeScript Example

```typescript
// Creating a variable with a strict number datatype.
// number datatype-உடன் variable உருவாக்கப்படுகிறது.
var score: number = 100;
console.log("Type:", typeof score);
// Expected Output: Type: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type: number

// TypeScript prevents assigning a string value to a number variable.
// number variable-க்கு string value-ஐ assign செய்ய TypeScript அனுமதிக்காது.
// score = "One Hundred";

// Extra: TypeScript enforces parameter types in functions to prevent calculation bugs.
// கூடுதல்: கணக்கீட்டு பிழைகளைத் தடுக்க TypeScript function-களில் parameter types-ஐ கட்டாயப்படுத்துகிறது.
function addBonus(score: number, bonus: number): number {
    return score + bonus;
}
console.log("Result:", addBonus(100, 50));
// Expected Output: Result: 150
// எதிர்பார்க்கப்படும் வெளியீடு: Result: 150

// Attempting to pass a string will cause a compilation error.
// string-ஐ அனுப்ப முயற்சித்தால் compilation error ஏற்படும்.
// console.log(addBonus(100, "50"));
```

### Output

```text
Type: number
Result: 150
```

### Observation

TypeScript prevents assigning incompatible datatypes and enforces strict parameter types in functions, catching calculation errors during compilation.

பொருந்தாத datatype-களை assign செய்வதையும், function-களில் தவறான parameter types-ஐ அனுப்புவதையும் TypeScript கம்பைல் நேரத்திலேயே கண்டறிந்து தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Typing | Weakly typed (allows dynamic datatype changes) | Strongly typed (prevents dynamic datatype changes) |
| Error Detection | Errors are detected at runtime | Datatype errors are detected during compile time |
| Type Safety | No type safety enforcement | Strict type safety enforcement |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider an online shopping cart where the total price of items must always be a number. In JavaScript, a bug could accidentally assign a string to it, causing calculation errors. TypeScript prevents this by strictly enforcing the number type.

ஒரு ஆன்லைன் ஷாப்பிங் கார்ட்டில் பொருட்களின் மொத்த விலை எப்போதும் number ஆக இருக்க வேண்டும். JavaScript-ல் தவறுதலாக string மதிப்பு கொடுக்கப்பட்டால் கணக்கீடுகளில் பிழை ஏற்படும். TypeScript இதனை number வகை என்று கட்டாயப்படுத்துவதன் மூலம் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Prevents Type Mistakes | Catches incorrect datatype assignments before running the code. |
| Improves Code Reliability | Ensures variables hold expected values, reducing runtime crashes. |
| Better IDE Support | Provides accurate autocompletion and inline documentation. |

---

## Interview Question

### What is Strong Typing?

Strong Typing is a programming concept where variables must strictly follow their declared datatype, and incompatible assignments result in a compilation error.

ஒரு variable தனது datatype-ஐ கட்டாயமாக பின்பற்ற வேண்டும். பொருந்தாத datatype assign செய்தால் error உருவாகும். இதுவே Strong Typing ஆகும்.

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
