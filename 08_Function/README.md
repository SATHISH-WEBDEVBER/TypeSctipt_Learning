# Functions

## Definition | வரையறை

A Function is a reusable block of code designed to perform a specific task. In TypeScript, functions are strongly typed, meaning you must specify the datatype of each parameter (input) and the return value (output), ensuring that the function is called and executed with the correct types.

Function என்பது ஒரு குறிப்பிட்ட பணியைச் செய்ய வடிவமைக்கப்பட்ட மீண்டும் பயன்படுத்தக்கூடிய குறியீட்டுத் தொகுப்பாகும். TypeScript-ல், functions-ன் அளபுருக்கள் (inputs) மற்றும் திரும்பும் மதிப்புகள் (outputs) துல்லியமாக தட்டச்சு செய்யப்படுகின்றன.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript functions do not validate their inputs. If a developer forgets an argument, it becomes `undefined`. If they pass the wrong datatype, it can lead to silent bugs or runtime crashes. TypeScript eliminates these errors at compile-time by validating argument types, enforcing argument counts, and verifying return values.

JavaScript functions அவற்றின் உள்ளீடுகளைச் சரிபார்ப்பதில்லை. ஏதேனும் அளபுரு விடுபட்டால் அது `undefined` ஆகிவிடும். TypeScript அளபுருக்களின் எண்ணிக்கை, வகை மற்றும் திரும்பும் மதிப்பு போன்றவற்றை கம்பைல் நேரத்திலேயே சரிபார்த்து பிழைகளைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript functions do not enforce parameter types or count, allowing any input at runtime.
// JavaScript functions, அளபுருக்களின் வகைகளையோ அல்லது எண்ணிக்கையையோ கட்டாயப்படுத்துவதில்லை.
function prepareJuice(fruit, sugarQuantity) {
    var sugar = sugarQuantity || 1; // Default fallback in JS
    return fruit + " Juice with " + sugar + " spoons of sugar";
}

console.log("Juice 1:", prepareJuice("Apple", 2));
// Expected Output: Juice 1: Apple Juice with 2 spoons of sugar
// எதிர்பார்க்கப்படும் வெளியீடு: Juice 1: Apple Juice with 2 spoons of sugar

// Missing arguments result in undefined values being used in operations.
// விடுபட்ட அளபுருக்கள் செயல்பாடுகளின் போது undefined மதிப்புகளாக மாற்றப்படும்.
console.log("Juice 2:", prepareJuice());
// Expected Output: Juice 2: undefined Juice with 1 spoons of sugar
// எதிர்பார்க்கப்படும் வெளியீடு: Juice 2: undefined Juice with 1 spoons of sugar
```

### Output

```text
Juice 1: Apple Juice with 2 spoons of sugar
Juice 2: undefined Juice with 1 spoons of sugar
```

### Observation

JavaScript executes the function even when parameters are completely missing, filling empty slots with `undefined` which can ruin outputs or crash code.

அளபுருக்கள் முற்றிலும் விடுபட்டிருந்தாலும் JavaScript function-ஐ இயக்கி, வெற்று இடங்களை `undefined` கொண்டு நிரப்புகிறது, இது தவறான வெளியீட்டைத் தரும்.

---

## TypeScript Example

```typescript
// TypeScript enforces parameter types, return types, optional elements (?), and default values (=).
// TypeScript, அளபுரு வகைகள், திரும்பும் மதிப்பு வகை, விருப்ப கூறுகள் (?) மற்றும் இயல்புநிலை மதிப்புகளை (=) கட்டாயமாக்குகிறது.
function prepareJuice(fruit: string, sugarQuantity: number = 1): string {
    return fruit + " Juice with " + sugarQuantity + " spoons of sugar";
}

console.log("Juice 1:", prepareJuice("Apple", 2));

// TypeScript blocks invalid call arguments and missing required parameters during compilation.
// தவறான உள்ளீடுகளையும் மற்றும் தேவையான அளபுருக்கள் விடுபடுவதையும் கம்பைலர் நேரத்திலேயே TypeScript தடுக்கிறது.
prepareJuice(); // Compile Error
```

### Output

```text
Compilation Error: Expected 1-2 arguments, but got 0. An argument for 'fruit' was not provided.
```

### Observation

TypeScript guarantees call reliability by catching missing arguments and mismatched types at compile-time before the application runs.

பயன்பாடு இயங்குவதற்கு முன்பே, விடுபட்ட அளபுருக்கள் மற்றும் பொருந்தாத வகைகளை கம்பைல் நேரத்திலேயே கண்டறிந்து நம்பகத்தன்மையை TypeScript உறுதி செய்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Parameter Validation | Ignored (arguments are fully dynamic) | Enforced statically (type validation on inputs) |
| Missing Arguments | Permitted (treated as `undefined` at runtime) | Blocked (unless explicitly marked optional `?` or default `=`) |
| Return Verification | None (can return anything dynamically) | Confirmed (checks if return matches declared output type) |

---

## Real-World Example | நடைமுறை உதாரணம்

Think of a juice blender machine. The blender has a specific intake slot size and expects fruit. In JavaScript, you can feed a stone into the blender; it tries to blend it and breaks. In TypeScript, the slot is designed to reject anything that is not fruit, ensuring the machine operates safely.

ஒரு ஜூஸ் பிளெண்டரை நினைத்துப் பாருங்கள். இது ஒரு பழத்தை உள்ளீடாக எதிர்பார்க்கிறது. JavaScript-ல் நீங்கள் ஒரு கல்லை ஜூஸரில் போடலாம்; அது அதை அரைக்க முயன்று பழுதடையும். TypeScript-ல், பழங்களைத் தவிர வேறு எதையும் ஏற்காதவாறு வடிவம் உள்ளதால், இயந்திரம் பாதுகாப்பாக இயங்குகிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Optional Parameters | Use `?` to mark parameters that are not mandatory (e.g., `middleName?: string`). |
| Default Parameters | Define fallback values directly in the signature (e.g., `taxRate = 0.05`). |
| Type Inference | TypeScript can automatically determine the return type if it is omitted in the definition. |

---

## Interview Question

### What is the difference between an Optional Parameter and a Default Parameter in TypeScript?

An optional parameter is declared using a question mark `?` after its name (e.g., `age?: number`), and its value is `undefined` if omitted. A default parameter is initialized with a value (e.g., `role: string = "user"`), and if the caller omits it or passes `undefined`, the default value is used instead. Optional parameters must always be declared after required parameters.

விருப்ப அளபுரு (Optional Parameter) பெயருக்கு பின் `?` குறி கொண்டு அறிவிக்கப்படும், இது விடுபடும்போது `undefined` மதிப்பை ஏற்கும். இயல்புநிலை அளபுரு (Default Parameter) ஒரு தொடக்க மதிப்புடன் வரையறுக்கப்படும், இது விடுபடும்போது இயல்பு மதிப்பை ஏற்கும். விருப்ப அளபுருக்கள் எப்போதும் தேவையான அளபுருக்களுக்குப் பின்னரே அறிவிக்கப்பட வேண்டும்.

---

## Summary | சுருக்கம்

* Locks down the datatype for each function input and output.
  function-ன் ஒவ்வொரு உள்ளீடு மற்றும் வெளியீட்டின் தரவு வகையை உறுதி செய்கிறது.
* Restricts arguments count, preventing missing variable errors.
  அளபுருக்களின் எண்ணிக்கையைக் கட்டுப்படுத்தி, மாறிலிகள் விடுபடும் பிழைகளைத் தடுக்கிறது.
* Supports optional (`?`) and default (`=`) parameters.
  விருப்ப மற்றும் இயல்புநிலை அளபுரு முறைகளை ஆதரிக்கிறது.
* Caught during compile-time to maintain clean runtime logs.
  ரன்டைம் தூய்மையை பராமரிக்க கம்பைல் நேரத்திலேயே பிழைகளைத் தடுக்கிறது.
