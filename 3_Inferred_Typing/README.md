# Inferred Typing

## Definition | வரையறை

Inferred Typing (also known as Type Inference) is TypeScript's ability to automatically detect and assign a datatype to a variable based on the value it is initialized with. You do not need to write explicit type annotations (like `: number`); the compiler "smartly scans" the value and locks the variable to that datatype.

Inferred Typing (Type Inference என்றும் அழைக்கப்படும்) என்பது ஒரு variable-க்கு வழங்கப்படும் தொடக்க மதிப்பை அடிப்படையாகக் கொண்டு அதன் தரவு வகையை TypeScript தானாகவே கண்டறியும் திறனாகும். இதில் நீங்கள் வெளிப்படையாக வகை எழுதத் தேவையில்லை (`: number` போல); கம்பைலர் மதிப்பை ஆராய்ந்து அதை அந்த வகையாகவே பூட்டுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

Explicit type annotations make code verbose. Inferred Typing keeps code clean, short, and readable while maintaining full type safety. It gives you the feel of writing dynamic JavaScript but with all the safety guarantees of static TypeScript.

வெளிப்படையான வகை விளக்கங்கள் குறியீட்டை நீளமாக்குகின்றன. Inferred Typing குறியீட்டைச் சுருக்கமாகவும், படிக்க எளிதாகவும் மாற்றுவதுடன் முழுப் பாதுகாப்பையும் வழங்குகிறது. இது சாதாரண JavaScript எழுதுவது போன்ற எளிமையையும், TypeScript-ன் பாதுகாப்பையும் ஒருசேர வழங்குகிறது.

---

## JavaScript Example

```javascript
// JavaScript does not lock types, even after a variable is initialized with a value.
// JavaScript ஒரு variable-க்கு தொடக்க மதிப்பு வழங்கப்பட்டாலும், அதன் வகையைப் பூட்டுவதில்லை.
var price = 100;
console.log("Type of price:", typeof price);
// Expected Output: Type of price: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type of price: number

// JavaScript allows changing the datatype freely.
// JavaScript அதன் வகையை எளிதாக மாற்ற அனுமதிக்கிறது.
price = "One Hundred";
console.log("Type of price after change:", typeof price);
// Expected Output: Type of price after change: string
// எதிர்பார்க்கப்படும் வெளியீடு: Type of price after change: string
```

### Output

```text
Type of price: number
Type of price after change: string
```

### Observation

JavaScript does not assign a permanent type to variables upon initialization, allowing variables to dynamically switch from number to string at runtime.

JavaScript தொடக்க மதிப்பை நிரந்தர வகையாகப் பூட்டுவதில்லை, இதனால் variables ரன்டைமில் தங்களின் வகைகளை எளிதாக மாற்றிக்கொள்கின்றன.

---

## TypeScript Example

```typescript
// TypeScript automatically infers (guesses) the type from the initial value.
// TypeScript தொடக்க மதிப்பை வைத்து அதன் வகையைத் தானாகவே கண்டறிகிறது (இன்ஃபர் செய்கிறது).
var price = 100;
console.log("Type of price:", typeof price);

// Attempting to assign a string to an inferred number variable causes an error.
// எண் வகையாகக் கண்டறியப்பட்ட variable-க்கு string மதிப்பை வழங்க முயன்றால் பிழை ஏற்படும்.
price = "One Hundred"; // Compile Error
```

### Output

```text
Compilation Error: Type 'string' is not assignable to type 'number'.
```

### Observation

TypeScript automatically infers that the variable is a `number` because it was initialized with `100`, blocking any future assignments of different datatypes.

தொடக்க மதிப்பு `100` என்பதால், variable-ன் வகை `number` தான் என்று TypeScript தானாகவே தீர்மானித்து, பின்னர் வரும் பிற தரவு வகை ஒதுக்கீடுகளைத் தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Type Assignment | Variable type remains dynamic and can change at any time | Type is permanently inferred and locked upon initialization |
| Code Verbosity | Clean and minimal (no type annotations) | Clean and minimal (uses type inference to avoid annotations where possible) |
| Safety Level | Weak (risk of silent runtime type changes) | Strong (compiler enforces the inferred type statically) |

---

## Real-World Example | நடைமுறை உதாரணம்

Imagine a barcode scanning system in a retail store. When a product is scanned, the variable `itemPrice` is set to `50.0`. In JavaScript, if a bug subsequently overwrites this price with a string `"sold out"`, sales calculations will break. TypeScript infers `itemPrice` is a number from its initial value and blocks string overrides, keeping calculations safe.

ஒரு பல்பொருள் அங்காடியில் பார்கோடு ஸ்கேன் செய்யும் முறையை நினைத்துப் பாருங்கள். ஒரு பொருளை ஸ்கேன் செய்யும்போது, `itemPrice` மதிப்பு `50.0` என அமைகிறது. JavaScript-ல், தவறுதலாக இத்தொகை `"sold out"` என மாற்றப்பட்டால், கணக்கீடு பிழையடையும். TypeScript அதன் தொடக்க மதிப்பில் இருந்தே அது எண் என்று தீர்மானித்து, உரை மதிப்புகள் வருவதைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Less Boilerplate | Saves coding time by eliminating the need to write types for every variable. |
| Automatic Protection | Provides full type safety without requiring manual type annotations. |
| Easier Migration | Simplifies converting existing JavaScript files to TypeScript. |

---

## Interview Question

### What is Inferred Typing (Type Inference) in TypeScript, and does it make the language weakly typed?

Inferred Typing is TypeScript's ability to automatically determine a variable's type based on its initial value, meaning annotations like `: number` are not always required. It does NOT make the language weakly typed. The variable is still strongly typed; the type is simply inferred by the compiler and strictly enforced. Trying to reassign a different type later will still cause a compilation error.

Inferred Typing என்பது தொடக்க மதிப்பை வைத்து ஒரு variable-ன் வகையை TypeScript தானாகவே கண்டறிவதாகும். இது மொழியைப் பலவீனமானதாக (weakly typed) மாற்றாது. Variable இன்னும் வலுவானதாகவே இருக்கும்; கம்பைலர் அதன் வகையைக் கண்டறிந்து அதைத் துல்லியமாகப் பூட்டுகிறது. பின்னர் வேறு வகையை ஒதுக்க முயன்றால் கம்பைல் பிழை ஏற்படும்.

---

## Summary | சுருக்கம்

* Automatically detects the datatype based on the initial assigned value.
  தொடக்க மதிப்பின் அடிப்படையில் தரவு வகையைத் தானாகவே கண்டறிகிறது.
* Locks the variable to that inferred type, preventing later changes.
  கண்டறியப்பட்ட வகையை நிரந்தரமாகப் பூட்டி, பிழையான மாற்றங்களைத் தடுக்கிறது.
* Keeps the code clean and readable, avoiding excessive type annotations.
  அதிகப்படியான வகை எழுத்துக்களைத் தவிர்த்து, குறியீட்டைப் படிக்க எளிதாக்குகிறது.
* Caught during compile time to maintain full application type safety.
  முழுமையான பாதுகாப்பிற்காகக் கம்பைல் நேரத்திலேயே சரிபார்க்கப்படுகிறது.
