# Default Parameters

## Definition | வரையறை

A Default Parameter is a function parameter that is automatically initialized with a default value if no argument is passed (or if `undefined` is passed) when calling the function. In TypeScript, you declare them by assigning a value directly in the signature (e.g. `paramName: type = defaultValue`).

Default Parameter (இயல்புநிலை அளபுரு) என்பது ஒரு function-ஐ அழைக்கும்போது மதிப்பு எதுவும் கடத்தப்படாவிட்டால் (அல்லது `undefined` கடத்தப்பட்டால்) தானாகவே ஒரு தொடக்க மதிப்பை எடுத்துக்கொள்ளும் அமைப்பாகும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

In dynamic environments, omission of arguments often leads to calculations using `undefined`, resulting in NaN bugs or errors. JavaScript ES6 introduced default parameters to handle this, but does not prevent a caller from passing mismatched datatypes (like passing a number instead of a string). TypeScript combines ES6 defaults with strict compile-time type validation, ensuring that both passed arguments and default values conform to the expected type contract.

தவறவிடப்படும் அளபுருக்கள் ரன்டைமில் `NaN` அல்லது பிற பிழைகளுக்கு வழிவகுக்கின்றன. JavaScript ES6 இயல்புநிலை அளபுருக்களை அறிமுகப்படுத்தினாலும், தவறான தரவு வகை கடத்தப்படுவதைத் தடுப்பதில்லை. TypeScript இயல்புநிலை மதிப்புகளுடன் வகை பாதுகாப்பையும் இணைத்து பிழைகளைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript originally required manual checks or logical OR operators to assign default values.
// ஆரம்பத்தில் JavaScript-ல் இயல்புநிலை மதிப்புகளை வழங்க கையேடு சோதனைகள் அல்லது logical OR தேவைப்பட்டது.
function orderCoffee(size, milkType) {
    var milk = milkType || "Regular Milk";
    return size + " coffee with " + milk;
}

console.log("Order 1:", orderCoffee("Large", "Oat Milk"));
// Expected Output: Order 1: Large coffee with Oat Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 1: Large coffee with Oat Milk

// ES6 introduced native default parameter syntax in JavaScript.
// ES6-ல் JavaScript-ல் நேரடி இயல்புநிலை அளபுரு (default parameter) முறை அறிமுகப்படுத்தப்பட்டது.
function orderCoffeeES6(size, milkType = "Regular Milk") {
    return size + " coffee with " + milkType;
}

console.log("Order 2:", orderCoffeeES6("Medium"));
// Expected Output: Order 2: Medium coffee with Regular Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 2: Medium coffee with Regular Milk
```

### Output

```text
Order 1: Large coffee with Oat Milk
Order 2: Medium coffee with Regular Milk
```

### Observation

JavaScript resolves omitted parameters by assigning default values using either the manual OR (`||`) fallback pattern or ES6 default parameter parameters at runtime.

JavaScript, விடுபட்ட அளபுருக்களுக்கு ரன்டைமில் manual OR (`||`) அல்லது ES6 default parameters மூலமாக இயல்புநிலை மதிப்புகளை ஒதுக்குகிறது.

---

## TypeScript Example

```typescript
// TypeScript supports typed default parameters, enforcing type safety on the default value too.
// TypeScript, இயல்புநிலை மதிப்பிற்கும் வகை பாதுகாப்பை உறுதி செய்யும் typed default parameters-ஐ ஆதரிக்கிறது.
function orderCoffee(size: string, milkType: string = "Regular Milk"): string {
    return size + " coffee with " + milkType;
}

console.log("Order 1:", orderCoffee("Large", "Oat Milk"));
console.log("Order 2:", orderCoffee("Medium"));

// Passing an invalid datatype is blocked during compilation.
// தவறான தரவு வகையைக் கடத்துவது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
orderCoffee("Small", 123); // Compile Error
```

### Output

```text
Compilation Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Observation

TypeScript permits functions to omit default parameters safely while strictly validating that any explicitly passed argument matches the expected type constraints.

இயல்புநிலை அளபுருக்களை விட்டுவிடுவதை அனுமதிக்கும் அதே வேளையில், வெளிப்படையாகக் கடத்தப்படும் மதிப்புகள் சரியான தரவு வகையைச் சேர்ந்தவை என்பதை TypeScript கம்பைல் நேரத்திலேயே சரிபார்க்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Type Verification | None (accepts any datatype as override value) | Strong (validates that both the default value and arguments match the type) |
| Missing Arguments | Uses default value or returns `undefined` (if no default specified) | Uses default value safely; missing non-default parameters are blocked |
| Syntax Style | Native since ES6 | Extends ES6 syntax with static type annotations |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider a coffee shop ordering system. When ordering a coffee, if the customer does not specify their milk choice, the system defaults to "Regular Milk". If a bug in JavaScript allowed a numeric price like `100` to be passed as the milk type, the order slip would print "Coffee with 100". TypeScript stops this at compile-time by strictly locking the milk type to a string.

ஒரு காபி கடையில் ஆர்டர் செய்யும் அமைப்பை நினைத்துப் பாருங்கள். வாடிக்கையாளர் பாலைக் குறிப்பிடவில்லை எனில், அது "Regular Milk" என எடுத்துக்கொள்ளப்படும். JavaScript-ல் உள்ள பிழையால் பால் வகைக்குப் பதிலாக `100` என்ற எண் கடத்தப்பட்டால் "Coffee with 100" என அச்சிடலாம். TypeScript இதை கம்பைல் நேரத்திலேயே தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Implicit Optionality | Parameters with default values are automatically optional, meaning callers do not need to pass them. |
| Strict Type Safety | Ensures the default value itself matches the parameter's designated datatype. |
| Code Reduction | Removes the need for writing manual fallback checks inside the function body. |

---

## Interview Question

### Can a parameter have both a default value and be marked as optional with a question mark (?) in TypeScript?

No. A parameter cannot be marked as optional with a question mark `?` and have a default value at the same time. Doing so results in a compilation error. Providing a default value already makes the parameter optional implicitly, so the `?` is redundant and prohibited.

இல்லை. ஒரு அளபுருவை ஒரே நேரத்தில் விருப்ப அளபுருவாக `?` கொண்டு அறிவிக்கவும், அதே நேரம் இயல்புநிலை மதிப்பை `=` கொண்டு வழங்கவும் முடியாது. இயல்புநிலை மதிப்பை வழங்கும்போது அது தானாகவே விருப்ப அளபுருவாகிவிடுவதால் `?` குறியீடு தேவையற்றதாகிறது.

---

## Summary | சுருக்கம்

* Automatically supplies a fallback value when arguments are omitted.
  அளபுருக்கள் விடுபடும்போது இயல்புநிலை மதிப்பைத் தானாகவே வழங்குகிறது.
* Implicitly marks the parameter as optional for callers.
  அழைப்பாளர்களுக்கு அந்த அளபுருவை விருப்பத்தேர்வாக மாற்றுகிறது.
* Enforces strict type constraints on both default values and call arguments.
  இயல்புநிலை மற்றும் கடத்தப்படும் மதிப்புகளுக்கு வகை பாதுகாப்பை உறுதி செய்கிறது.
* Avoids runtime runtime calculation issues like NaN or undefined.
  ரன்டைமில் NaN அல்லது undefined போன்ற கணக்கீட்டுப் பிழைகளைத் தவிர்க்கிறது.
