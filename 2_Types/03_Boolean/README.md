# Boolean

## Definition | வரையறை

The Boolean datatype represents a logical entity having only two values: `true` and `false`. In TypeScript, variables declared as boolean are strictly locked to these two binary states, preventing other types from being assigned.

Boolean என்பது `true` மற்றும் `false` ஆகிய இரண்டு மதிப்புகளை மட்டுமே கொண்ட ஒரு தர்க்கரீதியான அமைப்பாகும். TypeScript-ல், பூலியனாக அறிவிக்கப்பட்ட variables இந்த இரண்டு நிலைகளுக்கு மட்டுமே கட்டுப்படும், மற்ற types ஒதுக்கப்படுவது தடுக்கப்படுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In JavaScript, assigning a string like `"false"` or a number like `1` to a boolean variable works at runtime, but causes severe bugs because non-empty strings are evaluated as truthy. Strong typing prevents this coercion, ensuring logic checks remain accurate and binary.

JavaScript-ல், பூலியன் variable-க்கு `"false"` என்ற உரையோ அல்லது `1` என்ற எண்ணோ வழங்கப்பட்டால் அது செயல்படும், ஆனால் உரை எப்போதும் உண்மை (truthy) எனக் கருதப்படுவதால் தர்க்கப் பிழைகளை ஏற்படுத்தும். Strong typing தர்க்கச் சோதனைகள் துல்லியமாக இருப்பதை உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// A variable acts like a binary light switch that should only be true or false.
// ஒரு variable என்பது true அல்லது false மட்டுமே இருக்க வேண்டிய ஒரு மின்விசை மாற்றி போன்றது.
var isLoggedIn = true;
console.log("Logged In Status:", isLoggedIn);
// Expected Output: Logged In Status: true
// எதிர்பார்க்கப்படும் வெளியீடு: Logged In Status: true

// JavaScript allows putting a string value like "false" into a boolean box.
// JavaScript ஒரு boolean பெட்டியில் "false" போன்ற string மதிப்பை வைக்க அனுமதிக்கிறது.
isLoggedIn = "false";
console.log("Updated Status:", isLoggedIn);
// Expected Output: Updated Status: false
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Status: false

// In JavaScript, a non-empty string like "false" is truthy, causing unexpected logical failures.
// JavaScript-ல், "false" என்ற உரை truthy ஆகக் கருதப்படுவதால் தர்க்கரீதியான பிழைகளை உருவாக்குகிறது.
if (isLoggedIn) {
    console.log("User is allowed access!");
    // Expected Output: User is allowed access!
    // எதிர்பார்க்கப்படும் வெளியீடு: User is allowed access!
} else {
    console.log("Access denied!");
}
```

### Output

```text
Logged In Status: true
Updated Status: false
User is allowed access!
```

### Observation

JavaScript evaluates the string `"false"` as a truthy value during conditions, leading to logical errors where access is granted even when the variable was intended to represent a false state.

JavaScript, `"false"` என்ற உரை மதிப்பை நிபந்தனைகளின் போது உண்மை (truthy) என மதிப்பிடுகிறது, இதனால் தவறான அனுமதி வழங்கப்பட்டு தர்க்கரீதியான பிழைகள் ஏற்படுகின்றன.

---

## TypeScript Example

```typescript
// TypeScript locks the switch to only accept strict true/false boolean values.
// true/false பூலியன் மதிப்புகளை மட்டுமே ஏற்கும் வகையில் TypeScript variable-ஐ பூட்டுகிறது.
var isLoggedIn: boolean = true;
console.log("Logged In Status:", isLoggedIn);

// Attempting to assign a string like "false" to a boolean switch causes an error.
// boolean மாற்றிக்கு "false" போன்ற உரை மதிப்பை வழங்க முயற்சித்தால் பிழை ஏற்படும்.
isLoggedIn = "false"; // Compile Error

// TypeScript guarantees that logical branches are safe and reliable.
// தர்க்கரீதியான கிளைகள் பாதுகாப்பாகவும் நம்பகமாகவும் செயல்படுவதை TypeScript உறுதி செய்கிறது.
if (isLoggedIn) {
    console.log("User is allowed access!");
} else {
    console.log("Access denied!");
}
```

### Output

```text
Compilation Error: Type 'string' is not assignable to type 'boolean'.
```

### Observation

TypeScript prevents invalid logical coercions during compilation, ensuring conditional blocks only execute when the actual boolean state is true.

நிபந்தனைக் குறியீடுகள் சரியான பூலியன் நிலையில் மட்டுமே இயங்குவதை உறுதிசெய்ய, கம்பைல் நேரத்திலேயே தவறான ஒதுக்கீடுகளை TypeScript தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| State Validation | Accepts numbers, strings, and objects in boolean slots | Strictly restricts inputs to `true` and `false` values |
| Coercion Risks | Strings like `"false"` evaluate as truthy, causing security/logic bypasses | Eliminates coercion risks by rejecting non-boolean assignments |
| Conditional Safety | Requires careful checks (e.g., `isLoggedIn === true`) | Safe to use in simple evaluations (e.g., `if (isLoggedIn)`) |

---

## Real-World Example | நடைமுறை உதாரணம்

In a payment gateway, a variable named `isPaymentSuccessful` determines if a purchase invoice is generated. If a database error returns a string `"failure"` and it is assigned to this variable, JavaScript evaluates it as truthy and generates a fake invoice. TypeScript blocks the assignment of the string, preventing critical business logic bypasses.

ஒரு கட்டண நுழைவாயிலில் (payment gateway), `isPaymentSuccessful` என்ற variable கொள்முதல் விலைப்பட்டியல் உருவாக்கப்படுவதை தீர்மானிக்கிறது. தரவுத்தள பிழையால் `"failure"` என்ற உரை இதன் மதிப்பாக வந்தால், JavaScript அதனை உண்மை என மதிப்பிட்டு போலியான விலைப்பட்டியலை உருவாக்கும். TypeScript உரை மதிப்பை பூலியனில் சேமிக்க விடாமல் தடுத்து, இத்தகைய பெரும் பிழைகளைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Safe Logical Flows | Guarantees conditional statements (`if/else`) evaluate strictly accurate binary states. |
| Zero Truthy Bugs | Prevents runtime issues caused by string values being coerced into true flags. |
| Code Readability | Expresses state transitions (e.g., Active/Inactive, Open/Closed) clearly as boolean flags. |

---

## Interview Question

### Why does a string value like `"false"` cause logical bugs in JavaScript, and how does TypeScript prevent it?

In JavaScript, any non-empty string is evaluated as a truthy value inside logical conditions, meaning `if ("false")` evaluates to true, which leads to logical bugs. TypeScript prevents this by strictly validating the variable's datatype at compile time, rejecting any string assignments to boolean variables, ensuring only actual `true` or `false` states are used.

JavaScript-ல், நிபந்தனைகளின் போது காலியாக இல்லாத எந்த உரை மதிப்பும் உண்மை (truthy) எனக் கருதப்படும், அதாவது `if ("false")` உண்மை என்றே மதிப்பிடப்படும். TypeScript கம்பைல் நேரத்திலேயே பூலியன் variables-க்கு உரை மதிப்புகள் ஒதுக்கப்படுவதைத் தடுத்து, உண்மையான `true` அல்லது `false` நிலைகள் மட்டுமே பயன்படுத்தப்படுவதை உறுதி செய்கிறது.

---

## Summary | சுருக்கம்

* Limits variables to exactly two binary states: `true` and `false`.
  Variables-ஐ `true` மற்றும் `false` ஆகிய இரு நிலைகளுக்குள் மட்டுமே கட்டுப்படுத்துகிறது.
* Prevents logic bypasses caused by string coercion in conditions.
  நிபந்தனைகளில் உரை மாற்றங்களால் ஏற்படும் தர்க்க மீறல்களைத் தடுக்கிறது.
* Guarantees conditional branches execute safely.
  தர்க்கரீதியான கிளைகள் பாதுகாப்பாக இயங்குவதை உறுதி செய்கிறது.
* Blocked at compilation level for secure application states.
  பாதுகாப்பான நிலைகளுக்காக கம்பைல் நிலையிலேயே தவறுகள் தடுக்கப்படுகின்றன.
