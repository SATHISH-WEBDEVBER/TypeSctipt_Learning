# Number

## Definition | வரையறை

The Number datatype is used to store numeric values, including integers and floating-point numbers. In TypeScript, all numbers are treated under a single `number` type, and assigning non-numeric values to a number variable is blocked.

Number என்பது முழு எண்கள் மற்றும் தசம எண்கள் உட்பட அனைத்து எண் மதிப்புகளையும் சேமிக்கப்ப்படுகிறது. TypeScript-ல், அனைத்து எண்களும் ஒரே `number` வகை கீழ் வருகின்றன, மேலும் எண் அல்லாத மதிப்புகள் சேமிக்கப்படுவது தடுக்கப்படுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In JavaScript, if a text value like `"abc"` slips into a variable meant for calculations, the application will produce `NaN` (Not-a-Number) errors without warning, leading to broken math. Strong typing ensures that only numeric values can enter math slots.

JavaScript-ல், கணக்கீட்டிற்குரிய variable-ல் `"abc"` போன்ற உரை நுழைந்தால், செயலி எந்த எச்சரிக்கையுமின்றி `NaN` பிழையை உருவாக்கும். Strong typing, எண் சார்ந்த இடங்களுக்குள் எண் மதிப்புகள் மட்டுமே நுழைவதை உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// A variable acts like a calculator memory slot that can store any type.
// ஒரு variable எந்த வகையையும் சேமிக்கக்கூடிய கால்குலேட்டர் மெமரி ஸ்லாட் போன்றது.
var price = 100;
console.log("Price:", price);
// Expected Output: Price: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Price: 100

// JavaScript allows putting a string value into a number variable.
// JavaScript ஒரு number variable-ல் string மதிப்பை வைக்க அனுமதிக்கிறது.
price = "one hundred";
console.log("Updated Price:", price);
// Expected Output: Updated Price: one hundred
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Price: one hundred

// Performing math calculations with strings causes unexpected NaN results silently.
// உரையுடன் கணிதக் கணக்கீடுகளைச் செய்யும்போது மறைமுகமாக NaN பிழை முடிவு கிடைக்கிறது.
var quantity = 5;
var total = price * quantity;
console.log("Total:", total);
// Expected Output: Total: NaN
// எதிர்பார்க்கப்படும் வெளியீடு: Total: NaN
```

### Output

```text
Price: 100
Updated Price: one hundred
Total: NaN
```

### Observation

JavaScript does not block assigning text values to numeric variables, which causes mathematical calculations to fail silently with `NaN`.

JavaScript, எண் சார்ந்த variables-க்கு உரை மதிப்புகள் ஒதுக்கப்படுவதைத் தடுப்பதில்லை, இதனால் கணிதக் கணக்கீடுகள் எவ்வித எச்சரிக்கையுமின்றி `NaN` உடன் தோல்வியடைகின்றன.

---

## TypeScript Example

```typescript
// TypeScript locks the variable to only accept numeric values.
// TypeScript எண் மதிப்புகளை மட்டுமே ஏற்கும் வகையில் variable-ஐ பூட்டுகிறது.
var price: number = 100;
console.log("Price:", price);

// Attempting to assign a string to a number variable causes an error.
// number variable-க்கு string மதிப்பை வழங்க முயற்சித்தால் பிழை ஏற்படும்.
price = "one hundred"; // Compile Error

// TypeScript ensures safe math calculations by checking types at compile time.
// கம்பைல் நேரத்திலேயே சரிபார்ப்பதன் மூலம் பாதுகாப்பான கணிதக் கணக்கீட்டை TypeScript உறுதி செய்கிறது.
var quantity: number = 5;
var total: number = price * quantity;
console.log("Total:", total);
```

### Output

```text
Compilation Error: Type 'string' is not assignable to type 'number'.
```

### Observation

TypeScript guarantees mathematical operations remain valid by blocking the assignment of non-numeric data to number variables.

எண் அல்லாத தரவுகள் number variables-க்கு வழங்கப்படுவதைத் தடுப்பதன் மூலம், கணித செயல்பாடுகள் சரியாக நடைபெறுவதை TypeScript உறுதி செய்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Math Security | Allows strings in math operations, resulting in `NaN` | Prevents compiling if non-numeric inputs are used in math |
| Types of Numbers | No separation, all numbers are dynamic floats | Single unified `number` type, strictly checked |
| Coercion | Converts values automatically (e.g., `5 + "5" = "55"`) | Rejects mixed operations (e.g., number + string requires explicit conversion) |

---

## Real-World Example | நடைமுறை உதாரணம்

In an e-commerce cart, the total amount is calculated by multiplying price and quantity. If the quantity variable is populated with an invalid string like `"many"`, JavaScript will return `NaN` as the final price, which can disrupt payment checkouts. TypeScript prevents this by strictly validating that price and quantity are numbers.

ஒரு ஆன்லைன் ஷாப்பிங்கில், மொத்த தொகை விலை மற்றும் எண்ணிக்கையைப் பெருக்கிக் கணக்கிடப்படுகிறது. எண்ணிக்கை variable-ல் `"many"` போன்ற தவறான உரை வந்தால், JavaScript இறுதி விலையை `NaN` எனத் தரும், இது பணம் செலுத்தும் முறையை முடக்கும். TypeScript விலை மற்றும் எண்ணிக்கை எண்களாக மட்டுமே இருக்க வேண்டும் என்று சரிபார்ப்பதன் மூலம் இதனைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Safe Calculations | Guarantees that arithmetic calculations are performed only on valid numbers. |
| Catch NaN Early | Eliminates the occurrence of `NaN` bugs in business logic. |
| Float and Integer Support | Handles both whole numbers and decimals under one reliable type. |

---

## Interview Question

### How does TypeScript handle numeric datatypes compared to JavaScript, and how does it prevent calculation bugs?

Unlike some languages that separate integers and floats, TypeScript (like JavaScript) represents all numbers as floating-point values under a single `number` type. However, unlike JavaScript, TypeScript strictly checks and blocks non-numeric inputs during math calculations, catching errors that would otherwise result in silent `NaN` values at runtime.

முழு எண்கள் மற்றும் தசம எண்களைப் பிரிக்கும் சில மொழிகளைப் போலல்லாமல், TypeScript அனைத்து எண்களையும் ஒரே `number` வகை கீழ் கையாள்கிறது. ஆனால் JavaScript போலல்லாமல், TypeScript கணக்கீடுகளின் போது எண் அல்லாத உள்ளீடுகளைத் தடுத்து, runtime-ல் `NaN` பிழைகள் ஏற்படுவதை முன்கூட்டியே கம்பைல் நேரத்திலேயே கண்டறிந்து தடுக்கிறது.

---

## Summary | சுருக்கம்

* Handles integers and decimal values under one unified `number` type.
  முழு எண்கள் மற்றும் தசம எண்களை ஒரே `number` வகை கீழ் கையாள்கிறது.
* Prevents arithmetic errors by blocking non-numeric data.
  எண் அல்லாத தரவைத் தடுப்பதன் மூலம் கணக்கீட்டுப் பிழைகளைத் தவிர்க்கிறது.
* Eliminates the risk of silent `NaN` calculation failures.
  மறைமுக `NaN` கணக்கீட்டுத் தோல்விகளின் அபாயத்தை நீக்குகிறது.
* Automatically checked during compile time for error-free logic.
  பிழையற்ற செயல்பாட்டிற்காக கம்பைல் நேரத்திலேயே தானாகவே சரிபார்க்கப்படுகிறது.
