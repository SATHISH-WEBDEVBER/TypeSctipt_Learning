# Unknown

## Definition | வரையறை

The `unknown` type in TypeScript is a type-safe counterpart of `any`. A variable declared as `unknown` can hold any value, but you cannot perform operations on it (like calling methods or accessing keys) without first checking or narrowing its type.

`unknown` என்பது `any` வகையின் பாதுகாப்பான மாற்றாகும். `unknown` என அறிவிக்கப்பட்ட variable எந்தவொரு மதிப்பையும் பெறலாம், ஆனால் அதன் வகையை முதலில் சரிபார்க்காமல் அதனுள் இருக்கும் செயல்பாடுகளையோ (methods) அல்லது சாவிகளையோ (keys) அணுக முடியாது.

---

## Why It Matters | ஏன் இது முக்கியம்?

If you receive values from external APIs or user inputs, using `any` allows the compiler to compile code that may crash at runtime (like calling a string method on a number). `unknown` enforces compile-time checks, ensuring you perform type checks (like `typeof`) before running type-specific code.

API அல்லது பயனர் உள்ளீடுகளில் இருந்து தரவுகள் வரும்போது, `any` பயன்படுத்தினால் கம்பைலர் தவறான குறியீடுகளையும் அனுமதித்துவிடும். `unknown` இதனைத் தடுத்து, வகைகளைச் சரிபார்த்த (typeof) பின்னரே செயல்பாடுகளைச் செய்ய அனுமதிக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript treats everything dynamically, allowing method calls on values of any type.
// JavaScript அனைத்தையும் dynamic ஆகக் கையாளுவதால், எந்தவொரு மதிப்பிலும் method-களை அழைக்க அனுமதிக்கிறது.
var packageData = "Secret Message";

// Accessing methods on a string works.
// String-ல் method-களை அணுகும்போது செயல்படுகிறது.
console.log(packageData.toUpperCase());
// Expected Output: SECRET MESSAGE
// எதிர்பார்க்கப்படும் வெளியீடு: SECRET MESSAGE

// JavaScript allows changing to a number, but calling string methods on it crashes at runtime.
// JavaScript இதனை எண்ணாக மாற்ற அனுமதிக்கிறது, ஆனால் இதில் string method-ஐ அழைத்தால் ரன்டைமில் முடங்கும்.
packageData = 100;
try {
    console.log(packageData.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: packageData.toUpperCase is not a function
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: packageData.toUpperCase is not a function
}
```

### Output

```text
SECRET MESSAGE
Error caught: packageData.toUpperCase is not a function
```

### Observation

JavaScript lacks type verification before method execution, allowing a number variable to execute string methods, which crashes the code at runtime.

JavaScript செயல்பாடுகளுக்கு முன் வகை சரிபார்ப்பைச் செய்யாததால், எண் மதிப்புகள் உரை செயல்பாடுகளை இயக்க அனுமதிக்கப்பட்டு ரன்டைம் பிழைகள் ஏற்படுகின்றன.

---

## TypeScript Example

```typescript
// TypeScript uses "unknown" like a sealed package: you must verify its type before opening it.
// "unknown" என்பது ஒரு சீல் வைக்கப்பட்ட பொதி போன்றது: அதைப் பயன்படுத்துவதற்கு முன் அதன் வகையைச் சரிபார்க்க வேண்டும்.
var packageData: unknown = "Secret Message";

// Directly calling string methods on an unknown variable is blocked.
// Unknown variable-ல் நேரடியாக string methods-ஐ அழைப்பது தடுக்கப்படும்.
console.log(packageData.toUpperCase()); // Compile Error

// We must narrow the type (unbox it) before performing type-specific actions.
// நாம் அதன் வகையை உறுதி செய்த பின்னரே அதற்குரிய செயல்பாடுகளைச் செய்ய முடியும்.
if (typeof packageData === "string") {
    console.log(packageData.toUpperCase());
}
```

### Output

```text
Compilation Error: Object is of type 'unknown'.
```

### Observation

TypeScript prevents compile execution when calling methods directly on `unknown` types, enforcing a type safety check (narrowing) before compile completion.

வகைச் சரிபார்ப்பு (type narrowing) இல்லாமல் `unknown` variables-ஐப் பயன்படுத்துவதைக் கம்பைல் நேரத்திலேயே தடுத்து TypeScript பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Safety with Unverified Data | Weak (any method call is permitted, leading to runtime failures) | Strong (blocks all operations on `unknown` until narrowed) |
| Difference from Any | Same as ordinary variables | `any` bypasses checks, while `unknown` enforces type checks |
| Type Verification | Only via manual runtime checks | Enforces compiler-level `typeof` or custom guards |

---

## Real-World Example | நடைமுறை உதாரணம்

In a JSON API deserializer, you receive payload data of unknown shapes. If you parse this response using `any` and try to execute a nested function directly, a missing field will crash the client application. By typing the API output as `unknown`, you force the code to verify that the required fields are present before accessing them.

ஒரு JSON API மூலமாக உங்களின் செயலிக்குத் தரவுகள் வருகின்றன. இதனைப் பாதுகாப்பற்ற `any` வகை மூலம் கையாண்டு, அதில் உள்ள பண்புகளை நேரடியாக அணுகும்போது, ஏதேனும் ஒரு பண்பு விடுபட்டிருந்தால் செயலி முடங்கும். `unknown` பயன்படுத்தினால், கம்பைலர் தேவையான பண்புகள் உள்ளனவா எனச் சோதித்த பிறகே குறியீட்டை இயக்க அனுமதிக்கும்.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Safe API Handling | Safely handles unverified external data payloads. |
| Blocks Runtime Crashes | Eliminates dynamic crashes by forcing type validation before property access. |
| Better than Any | Serves as a type-safe alternative to `any`, enforcing compilation safety. |

---

## Interview Question

### What is the difference between `any` and `unknown` in TypeScript, and when should you use `unknown`?

Both `any` and `unknown` can hold any value. However, `any` completely disables type-checking, allowing you to access properties and call methods without safety. `unknown` is type-safe; it blocks all property access and method calls until you perform type narrowing (using `typeof`, `instanceof`, or custom type guards). You should use `unknown` when handling unverified input (like API responses or user forms) where you want to enforce validation.

`any` மற்றும் `unknown` இரண்டுமே எந்தவொரு மதிப்பையும் பெறலாம். ஆனால் `any` எவ்வித கட்டுப்பாடுகளும் இல்லாமல் சோதனைகளைத் தவிர்க்கிறது. `unknown` என்பது பாதுகாப்பானது; அதன் வகையைச் சரிபார்க்கும் வரை (type narrowing) அதன் பண்புகளையோ அல்லது செயல்பாடுகளையோ அணுக அனுமதிக்காது. API அல்லது பயனர் படிவங்களைக் கையாளும்போது `unknown` பயன்படுத்த வேண்டும்.

---

## Summary | சுருக்கம்

* Holds any value type-safely, acting as a counterpart to `any`.
  பாதுகாப்பான முறையில் எந்த மதிப்பையும் சேமிக்கக்கூடிய `any`-க்கான மாற்றாகும்.
* Blocks all method calls and key access until the type is narrowed.
  வகை சரிபார்க்கப்படும் வரை செயல்பாடுகள் அல்லது சாவிகள் அணுகப்படுவதைத் தடுக்கிறது.
* Enforces compiler-level type validation check using tools like `typeof`.
  `typeof` போன்ற சோதனைகளைக் கம்பைல் நிலையிலேயே கட்டாயப்படுத்துகிறது.
* Ideal for handling external, unverified sources like API responses.
  API பதில்கள் போன்ற சரிபார்க்கப்படாத வெளிப்புறத் தரவுகளைக் கையாள சிறந்தது.
``` free
