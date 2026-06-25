# String

## Definition | வரையறை

The String datatype is used to store textual values, such as letters, words, or sentences. In strong typing, once a variable is declared as a string, it can never hold numbers or boolean values.

String என்பது எழுத்துக்கள், வார்த்தைகள் அல்லது வாக்கியங்கள் போன்ற உரை மதிப்புகளைச் சேமிக்கப் பயன்படுகிறது. Strong typing-ல், ஒரு variable string-ஆக அறிவிக்கப்பட்டால், அதில் எண்களையோ அல்லது பூலியன் மதிப்புகளையோ சேமிக்க முடியாது.

---

## Why It Matters | ஏன் இது முக்கியம்?

If a variable starts as text but accidentally changes to a number, string-specific operations like capitalizations (`.toUpperCase()`) or search methods will crash the application. Strong typing ensures string variables only contain text, ensuring safety.

ஒரு variable உரையாகத் தொடங்கி, தவறுதலாக எண்ணாக மாறினால், `.toUpperCase()` அல்லது தேடல் போன்ற உரை சார்ந்த செயல்பாடுகள் செயலியை முடக்கிவிடும். Strong typing, string variables எண்களைப் பெறாமல் தடுத்து பாதுகாப்பை உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// A variable acts like a box that can store any type of value.
// ஒரு variable எந்த வகையான மதிப்பையும் சேமிக்கக்கூடிய ஒரு பெட்டி போன்றது.
var message = "Hello";
console.log("Message:", message);
// Expected Output: Message: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Message: Hello

// JavaScript allows putting a number value into a string box.
// JavaScript ஒரு string பெட்டியில் number மதிப்பை வைக்க அனுமதிக்கிறது.
message = 100;
console.log("Updated Message:", message);
// Expected Output: Updated Message: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Message: 100

// In JavaScript, changing the type can break string-specific features like toUpperCase.
// JavaScript-ல், type-ஐ மாற்றுவது toUpperCase போன்ற string-க்குரிய வசதிகளை செயலிழக்கச் செய்யும்.
try {
    console.log(message.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: message.toUpperCase is not a function
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: message.toUpperCase is not a function
}
```

### Output

```text
Message: Hello
Updated Message: 100
Error caught: message.toUpperCase is not a function
```

### Observation

JavaScript allows a string variable to be reassigned to a number at runtime. Calling string methods on it after the change causes runtime errors.

JavaScript ஒரு variable-ன் datatype-ஐ மாற்றுவதை அனுமதிக்கிறது. இதனால் மாற்று மதிப்பிற்குப் பின் string methods-ஐ அழைக்கும் போது runtime பிழைகள் ஏற்படுகின்றன.

---

## TypeScript Example

```typescript
// TypeScript labels the box so it only accepts text values.
// TypeScript பெட்டியை லேபிளிடுவதால் அது உரைகளை மட்டுமே ஏற்கும்.
var message: string = "Hello";
console.log("Message:", message);

// Attempting to store a number value in a string box causes an error.
// string பெட்டியில் number மதிப்பைச் சேமிக்க முயன்றால் பிழை ஏற்படும்.
message = 100; // Compile Error

// TypeScript guarantees that string methods like toUpperCase can be safely used.
// toUpperCase போன்ற string methods-ஐ பாதுகாப்பாக பயன்படுத்த முடியும் என TypeScript உறுதியளிக்கிறது.
console.log(message.toUpperCase());
```

### Output

```text
Compilation Error: Type 'number' is not assignable to type 'string'.
```

### Observation

TypeScript prevents assigning non-string values to variables declared as strings, catching type mismatches during development.

TypeScript, string என அறிவிக்கப்பட்ட variables-க்கு பிற மதிப்புகள் வழங்கப்படுவதைத் தடுத்து, பிழைகளை டெவலப்மெண்ட் நேரத்திலேயே கண்டறிகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Type Enforcement | Variable can freely switch from string to any type | Variable remains strictly a string |
| Operation Safety | Calling string methods on changed types causes runtime crashes | Prevents compiler from compiling if non-string values are assigned |
| Text Concatenation | Implicitly converts other types to string during addition | Strict type-checking prevents unexpected coercions |

---

## Real-World Example | நடைமுறை உதாரணம்

Imagine a user profile system where the email address must be a string. In JavaScript, a bug might store a numeric status code in the email variable, crashing the email validation function. TypeScript prevents this by strictly locking the email variable to a string type.

ஒரு பயனர் சுயவிவர அமைப்பில் மின்னஞ்சல் முகவரி எப்போதும் string-ஆக இருக்க வேண்டும். JavaScript-ல், மின்னஞ்சல் variable-ல் தவறுதலாக நிலை எண் (status code) சேமிக்கப்பட்டால், அது மின்னஞ்சல் சரிபார்ப்புச் செயல்பாட்டை முடக்கிவிடும். TypeScript மின்னஞ்சல் variable-ஐ string-ஆக மட்டுமே இருக்க அனுமதிப்பதன் மூலம் இதனைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Method Safety | Guarantees methods like `.split()`, `.trim()`, and `.toUpperCase()` are safe to call. |
| Clean Data Input | Ensures text fields (like names, emails) only receive text format values. |
| Editor Autocomplete | Provides precise string autocomplete helper functions in the editor. |

---

## Interview Question

### What is the advantage of declaring a variable as string in TypeScript over JavaScript?

Declaring a variable as a string in TypeScript enforces type safety, ensuring it only holds text values. It catches invalid assignments (like numbers or booleans) during compilation and provides autocomplete features for string methods, whereas JavaScript allows dynamic changes that can cause runtime crashes.

TypeScript-ல் ஒரு variable-ஐ string-ஆக அறிவிப்பது அதனுள் உரை மதிப்புகள் மட்டுமே சேமிக்கப்படுவதை உறுதி செய்கிறது. இது தவறான ஒதுக்கீடுகளை கம்பைல் நேரத்திலேயே கண்டறிந்து, string methods-க்கான autocomplete வசதிகளை வழங்குகிறது, ஆனால் JavaScript dynamic மாற்றங்களை அனுமதிப்பதால் runtime பிழைகளை ஏற்படுத்துகிறது.

---

## Summary | சுருக்கம்

* Enforces that string variables only store textual data.
  String variables உரை தரவை மட்டுமே சேமிப்பதை உறுதி செய்கிறது.
* Protects string operations and methods from runtime crashes.
  String செயல்பாடுகள் மற்றும் முறைகளை runtime பிழைகளில் இருந்து பாதுகாக்கிறது.
* Caught during compilation, avoiding client-side bugs.
  கம்பைல் நேரத்திலேயே பிழைகளைக் கண்டறிந்து வாடிக்கையாளர் தரப்புப் பிழைகளைத் தவிர்க்கிறது.
* Supports safe operations like uppercase conversion, trimming, and searching.
  உரையை மாற்றுதல், தேடுதல் போன்ற செயல்பாடுகளைப் பாதுகாப்பாக ஆதரிக்கிறது.
