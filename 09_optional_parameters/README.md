# Optional Parameters

## Definition | வரையறை

An Optional Parameter is a function parameter that does not require an argument to be passed when calling the function. In TypeScript, optional parameters are declared by appending a question mark (`?`) to the parameter name (e.g. `paramName?: type`). Under the hood, their type becomes a union of the specified type and `undefined`.

Optional Parameter (விருப்ப அளபுரு) என்பது ஒரு function-ஐ அழைக்கும்போது மதிப்பு கடத்தப்பட வேண்டிய கட்டாயம் இல்லாத அளபுருவாகும். TypeScript-ல், அளபுருவின் பெயருக்கு அடுத்து கேள்விக்குறி (`?`) இட்டு இது குறிக்கப்படுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In JavaScript, every parameter is implicitly optional, and missing parameters default to `undefined` at runtime. If a function tries to perform operations on a missing parameter without safety checks, the program will crash or produce bugs. TypeScript makes optional parameters explicit, validating that optional arguments are handled safely and ensuring they are always declared after all required parameters.

JavaScript-ல் அனைத்து அளபுருக்களும் இயல்பாகவே விருப்பத்தேர்வு ஆகும், இதனால் விடுபட்டவை `undefined` ஆகும். இது ரன்டைம் பிழைகளுக்கு வழிவகுக்கலாம். TypeScript விருப்ப அளபுருக்களை வெளிப்படையாக்கி, அவை பாதுகாப்பாகக் கையாளப்படுவதை கம்பைல் நேரத்திலேயே உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// JavaScript treats all parameters as optional by default, requiring manual fallback checks.
// JavaScript, இயல்பாகவே அனைத்து அளபுருக்களையும் விருப்பத்தேர்வாகக் கருதுகிறது, இதனால் கையேடு சரிபார்ப்புகள் தேவைப்படுகிறது.
function buildBurger(bunType, pattyType, extraCheese) {
    var desc = bunType + " bun with " + pattyType + " patty";
    
    // Manual check is needed because extraCheese can be undefined.
    // extraCheese undefined-ஆக இருக்கக்கூடும் என்பதால் கையேடு சரிபார்ப்பு தேவைப்படுகிறது.
    if (extraCheese) {
        desc += " and extra cheese";
    }
    return desc;
}

console.log("Burger 1:", buildBurger("Sesame", "Chicken", true));
// Expected Output: Burger 1: Sesame bun with Chicken patty and extra cheese
// எதிர்பார்க்கப்படும் வெளியீடு: Burger 1: Sesame bun with Chicken patty and extra cheese

console.log("Burger 2:", buildBurger("Sesame", "Beef"));
// Expected Output: Burger 2: Sesame bun with Beef patty
// எதிர்பார்க்கப்படும் வெளியீடு: Burger 2: Sesame bun with Beef patty
```

### Output

```text
Burger 1: Sesame bun with Chicken patty and extra cheese
Burger 2: Sesame bun with Beef patty
```

### Observation

JavaScript executes functions cleanly without checking if arguments are omitted. The missing parameter is assigned `undefined` at runtime, which requires manual check logic to avoid logical issues.

JavaScript, விடுபட்ட அளபுருக்களை ரன்டைமில் `undefined` ஆக மாற்றும். இதனால் பிழைகளைத் தவிர்க்க கைமுறையாக சோதனைக் குறியீடுகளை எழுத வேண்டியது அவசியமாகிறது.

---

## TypeScript Example

```typescript
// TypeScript uses "?" to explicitly mark optional parameters. They must come after required ones.
// TypeScript, விருப்ப அளபுருக்களைக் குறிக்க "?" குறியீட்டைப் பயன்படுத்துகிறது. இவை தேவையானவற்றுக்குப் பின் வர வேண்டும்.
function buildBurger(bunType: string, pattyType: string, extraCheese?: boolean): string {
    var desc = bunType + " bun with " + pattyType + " patty";
    
    if (extraCheese) {
        desc += " and extra cheese";
    }
    return desc;
}

console.log("Burger 1:", buildBurger("Sesame", "Chicken", true));
console.log("Burger 2:", buildBurger("Sesame", "Beef"));

// Omitting required parameters is blocked during compilation.
// தேவையான அளபுருக்களை விட்டுவிடுவது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
// buildBurger("Sesame"); // Compile Error
```

### Output

```text
Compilation Error: Expected 2-3 arguments, but got 1. An argument for 'pattyType' was not provided.
```

### Observation

TypeScript checks the input contract, permitting optional arguments to be omitted safely while immediately blocking calls that miss required arguments (like `pattyType`).

விருப்ப அளபுருக்கள் விடுபடுவதை TypeScript அனுமதிக்கும் அதே வேளையில், தேவையான அளபுருக்கள் விடுபடும் போது கம்பைல் பிழையை ஏற்படுத்தி பாதுகாப்பை உறுதி செய்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Default Parameter Status | All parameters are implicitly optional | Parameters are required unless marked with `?` or given a default |
| Declaration Order | Optional parameters can be declared anywhere in the signature | Optional parameters must be declared at the end of the parameter list |
| Underlying Type | Resolves to value or `undefined` | Statically resolved to `type | undefined` union |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider an online ordering app where you build a custom burger. The burger bun type and patty type are absolutely required. Cheese, onions, and tomato toppings are optional additions. If a system in JavaScript forgets to validate if toppings are present, it might print "Sesame bun with Chicken patty and undefined". TypeScript guarantees clean and predictable output by enforcing proper checks.

ஒரு ஆன்லைன் உணவு ஆர்டர் செய்யும் செயலியில் பீட்சா அல்லது பர்கர் தயாரிக்கிறீர்கள். பர்கரின் ரொட்டி மற்றும் இறைச்சி வகை கட்டாயத் தேவைகள். சீஸ் போன்ற இதர கூடுதல் பொருட்கள் விருப்பத்தேர்வுகள் ஆகும். JavaScript இதற்கான சோதனைகளை மறக்கும் போது "Chicken patty and undefined" என அச்சிடலாம். TypeScript இதை முறையாகத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Flexible Invocations | Lets functions support multiple call styles depending on what details are available. |
| Strict Ordering | Guarantees that optional parameters sit at the end, maintaining parameter matching accuracy. |
| Safety Validation | Compels developers to write checks to handle possible `undefined` values. |

---

## Interview Question

### Can an optional parameter have a default value in TypeScript?

No. An optional parameter cannot have a default value. In TypeScript, a parameter cannot be both optional (using `?`) and have a default initializer (using `= value`) at the same time. If you specify a default value, the parameter is already implicitly optional because the default value will be used if the argument is omitted.

இல்லை. விருப்ப அளபுருவிற்கு இயல்புநிலை மதிப்பை (default value) வழங்க முடியாது. TypeScript-ல், ஒரு அளபுரு விருப்பமாகவும் (`?`), அதே நேரம் இயல்புநிலை மதிப்பாகவும் (`=`) இருக்க முடியாது. இயல்புநிலை மதிப்பை வழங்கும்போது அது தானாகவே விருப்ப அளபுருவாக மாறிவிடும்.

---

## Summary | சுருக்கம்

* Marked explicitly using the question mark (`?`) symbol in TypeScript.
  TypeScript-ல் கேள்விக்குறி (`?`) சின்னத்தின் மூலம் விருப்ப அளபுருவாகக் குறிக்கப்படும்.
* Statically types the parameter as a union of its type and `undefined`.
  குறிப்பிட்ட வகை மற்றும் `undefined` ஆகியவற்றின் இணைப்பாக இதனை வகைப்படுத்துகிறது.
* Enforces that all optional parameters come after required parameters.
  அனைத்து விருப்ப அளபுருக்களும் தேவையான அளபுருக்களுக்குப் பின்னரே வர வேண்டும்.
* Prevents silent bugs when arguments are omitted at compile-time.
  அளபுருக்கள் விடுபடும்போது ஏற்படும் ரன்டைம் பிழைகளை கம்பைல் நேரத்திலேயே தவிர்க்கிறது.
