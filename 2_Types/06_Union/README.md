# Union Types

## Definition | வரையறை

Union Types allow a variable to hold one of several specified datatypes, but no others. In TypeScript, you use the pipe symbol (`|`) to define a union (e.g., `string | number`), and the compiler ensures the variable only receives values matching those choices.

Union Types என்பது ஒரு variable-க்கு பல குறிப்பிட்ட datatypes-ல் ஏதேனும் ஒன்றை மதிப்பாக வழங்க அனுமதிக்கிறது. TypeScript-ல், ஒரு union-ஐ வரையறுக்க பைப் குறியீடு (`|`) பயன்படுத்தப்படுகிறது (எ.கா., `string | number`), மேலும் variable இந்த மதிப்புகளை மட்டுமே பெறுவதை கம்பைலர் உறுதி செய்கிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In JavaScript, if a variable needs to support multiple types (like a user ID that can be a number or an email string), you cannot place limits on it, allowing booleans or objects to enter. Union types provide a structured way to allow multiple specific types while blocking all other invalid datatypes.

JavaScript-ல், ஒரு variable பல வகைகளை ஆதரிக்க வேண்டியிருந்தால் (எ.கா., எண் அல்லது மின்னஞ்சல் உரை வடிவில் இருக்கும் பயனர் ID), அதை உங்களால் கட்டுப்படுத்த முடியாது, இதனால் பூலியன் அல்லது objects நுழையலாம். Union types பிற தேவையற்ற வகைகளைத் தடுத்து, தேவையான குறிப்பிட்ட வகைகளை மட்டும் அனுமதிக்கிறது.

---

## JavaScript Example

```javascript
// A variable can store anything in JavaScript, making it hard to restrict to specific options.
// JavaScript-ல் ஒரு variable எதை வேண்டுமானாலும் சேமிக்கலாம், இதனால் குறிப்பிட்ட மதிப்புகளை மட்டும் கட்டுப்படுத்துவது கடினம்.
var identifier = 101;
console.log("Identifier:", identifier);
// Expected Output: Identifier: 101
// எதிர்பார்க்கப்படும் வெளியீடு: Identifier: 101

// Changing it to a string is allowed.
// இதனை string ஆக மாற்றுவது அனுமதிக்கப்படுகிறது.
identifier = "EMP101";
console.log("Updated Identifier:", identifier);
// Expected Output: Updated Identifier: EMP101
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Identifier: EMP101

// However, JavaScript also allows assigning totally unrelated types like booleans or objects.
// இருப்பினும், JavaScript முற்றிலும் தொடர்பில்லாத boolean அல்லது objects போன்றவற்றை ஒதுக்க அனுமதிக்கிறது.
identifier = true;
console.log("Invalid Identifier:", identifier);
// Expected Output: Invalid Identifier: true
// எதிர்பார்க்கப்படும் வெளியீடு: Invalid Identifier: true
```

### Output

```text
Identifier: 101
Updated Identifier: EMP101
Invalid Identifier: true
```

### Observation

JavaScript lacks union constraints. It allows variables to hold string or number, but also allows boolean values to enter variables meant only for identification codes.

JavaScript-ல் union கட்டுப்பாடுகள் இல்லை. இது எண்களையும் உரையையும் அனுமதிக்கும் அதே நேரத்தில், அடையாளக் குறியீடுகளுக்கு மட்டுமேயான variable-ல் பூலியன் மதிப்புகளையும் அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
// TypeScript uses Union types to act like a port that accepts only specified types (string or number).
// TypeScript குறிப்பிட்ட types-ஐ (string அல்லது number) மட்டுமே ஏற்கும் வகையில் Union types-ஐப் பயன்படுத்துகிறது.
var identifier: string | number = 101;
console.log("Identifier:", identifier);

// Changing to a string is allowed because it is in the union contract.
// Union ஒப்பந்தத்தில் இருப்பதால் இதனை string ஆக மாற்றுவது அனுமதிக்கப்படுகிறது.
identifier = "EMP101";
console.log("Updated Identifier:", identifier);

// Attempting to assign a boolean will cause a compile-time error.
// boolean மதிப்பை ஒதுக்க முயற்சித்தால் கம்பைல் நேரத்தில் பிழை ஏற்படும்.
identifier = true; // Compile Error
```

### Output

```text
Compilation Error: Type 'boolean' is not assignable to type 'string | number'.
```

### Observation

TypeScript permits assignments that match any type listed in the union definition while blocking completely unrelated types like booleans during compilation.

கம்பைல் நேரத்திலேயே முற்றிலும் தொடர்பில்லாத types-ஐத் தடுத்து, யூனியனில் வரையறுக்கப்பட்ட வகைகளை மட்டுமே TypeScript அனுமதிக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Type Flexibility | Unlimited (accepts any datatype dynamically) | Multi-type limits (only accepts datatypes defined in the union) |
| Invalid Assigments | Fails silently at runtime when invalid types are used | Caught immediately during compile time |
| IDE Support | Basic autocomplete suggestions | Custom suggestions based on active types (via type narrowing) |

---

## Real-World Example | நடைமுறை உதாரணம்

In an API customer lookup feature, a client can request customer details using either a numeric database ID (e.g. `1250`) or an alphanumeric username string (e.g. `"sathish_dev"`). A union type `number | string` allows the code to accept both lookup formats securely while preventing array or boolean objects from crashing the database query.

ஒரு API வாடிக்கையாளர் தேடல் வசதியில், வாடிக்கையாளர் விவரங்களைப் பெற எண் வடிவிலான ID அல்லது எழுத்து வடிவிலான பயனர் பெயரைப் பயன்படுத்தலாம். `number | string` என்ற union type இரண்டு வகையான உள்ளீடுகளையும் பாதுகாப்பாக அனுமதிக்கும் அதே வேளையில், பூலியன் அல்லது arrays போன்றவற்றால் தரவுத்தள வினவல் முடங்குவதைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Flexible and Safe | Restricts input choices to a controlled set of datatypes rather than just one type. |
| Eliminates Any Type | Replaces the dangerous `any` type with a specified set of allowed types. |
| Type Narrowing | Allows compiler to verify safety of operations using functions like `typeof`. |

---

## Interview Question

### What are Union Types in TypeScript, and how do you use them?

Union Types in TypeScript allow a variable to hold values of multiple specified types. They are defined using the pipe (`|`) character between types, such as `let data: string | number`. They are useful when a value can logically be one of a few types, providing flexibility while maintaining type safety. To use type-specific methods safely, TypeScript requires "type narrowing" (e.g., using `typeof` checks).

Union Types என்பது ஒரு variable பல குறிப்பிட்ட types-ல் ஏதேனும் ஒன்றை மதிப்பாகப் பெற அனுமதிப்பதாகும். இது `let data: string | number` என்பது போல பைப் (`|`) குறியீடு மூலம் வரையறுக்கப்படுகிறது. இது தர்க்கரீதியாகப் பல வகைகளை ஆதரிக்க வேண்டிய இடங்களில் நெகிழ்வுத்தன்மையையும் பாதுகாப்பையும் வழங்குகிறது.

---

## Summary | சுருக்கம்

* Allows variables to support multiple specific types using the pipe (`|`) symbol.
  பைப் (`|`) குறியீடு மூலம் பல குறிப்பிட்ட வகைகளை ஆதரிக்க அனுமதிக்கிறது.
* Prevents assignments of completely unrelated types during development.
  முற்றிலும் தொடர்பில்லாத வகைகளின் ஒதுக்கீடுகளை முன்கூட்டியே தடுக்கிறது.
* Replaces loose `any` typing with secure multi-type contracts.
  பாதுகாப்பற்ற `any` பயன்பாட்டிற்குப் பதிலாகப் பாதுகாப்பான பலவகை ஒப்பந்தங்களை வழங்குகிறது.
* Safe type-specific logic is achieved using type narrowing techniques.
  Type narrowing நுட்பங்கள் மூலம் தர்க்கப் பிழைகளற்ற பாதுகாப்பான செயல்பாடுகளை வழங்குகிறது.
