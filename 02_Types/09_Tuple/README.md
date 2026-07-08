# Tuple

## Definition | வரையறை

A Tuple is a specialized array with a fixed number of elements where each element has a predefined datatype at its specific position (index). In TypeScript, you define a tuple by declaring the types in brackets (e.g. `[number, string]`), and the compiler enforces both the array length and element types at each index.

Tuple என்பது ஒரு குறிப்பிட்ட எண்ணிக்கையிலான உறுப்புகளைக் கொண்ட சிறப்பு array ஆகும், இதில் ஒவ்வொரு உறுப்பும் அதன் குறிப்பிட்ட இடத்தில் (index) முன்கூட்டியே வரையறுக்கப்பட்ட தரவு வகையைக் கொண்டிருக்கும். TypeScript-ல், இது `[number, string]` என்பது போல அடைப்புக்குறிக்குள் வரையறுக்கப்பட்டு கட்டுப்படுத்தப்படுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript handles all arrays dynamically, meaning elements can be added or type-swapped at any index freely. If you need to store data with a strict sequence (like latitude and longitude coordinates), JavaScript cannot prevent changes, which can lead to bugs. Tuples guarantee index-specific structures.

JavaScript அனைத்து arrays-ஐயும் மாறும் தன்மையுடன் கையாள்கிறது. இதனால் உறுப்புகளை எப்போது வேண்டுமானாலும் சேர்க்கலாம் அல்லது மாற்றலாம். அட்சரேகை மற்றும் தீர்க்கரேகை (latitude/longitude) போன்ற துல்லியமான வரிசையமைப்புத் தரவுகளைச் சேமிக்க வேண்டியிருக்கும் போது, JavaScript தற்காப்பு வழங்காது. Tuples இந்த இடத்திற்குரிய துல்லியமான கட்டமைப்பை உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// JavaScript does not support tuples, treating them as regular flexible arrays.
// JavaScript-ல் tuples கிடையாது, அவை சாதாரண மற்றும் மாறக்கூடிய arrays போலவே செயல்படுகின்றன.
var point = [12.97, 80.27];
console.log("Point:", point);
// Expected Output: Point: [ 12.97, 80.27 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Point: [ 12.97, 80.27 ]

// JavaScript allows pushing extra elements, violating length requirements.
// JavaScript கூடுதல் உறுப்புகளைச் சேர்க்க அனுமதிக்கிறது, இதனால் நீளக் கட்டுப்பாடு மீறப்படுகிறது.
point.push("Chennai");
console.log("Updated Point:", point);
// Expected Output: Updated Point: [ 12.97, 80.27, 'Chennai' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Point: [ 12.97, 80.27, 'Chennai' ]

// JavaScript allows swapping types at positions freely.
// JavaScript ஒவ்வொரு இடத்திலும் உள்ள types-ஐ எளிதாக மாற்ற அனுமதிக்கிறது.
point[0] = "twelve";
console.log("Corrupted Point:", point);
// Expected Output: Corrupted Point: [ 'twelve', 80.27, 'Chennai' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Corrupted Point: [ 'twelve', 80.27, 'Chennai' ]
```

### Output

```text
Point: [ 12.97, 80.27 ]
Updated Point: [ 12.97, 80.27, 'Chennai' ]
Corrupted Point: [ 'twelve', 80.27, 'Chennai' ]
```

### Observation

JavaScript lacks tuple safety, enabling developer modifications to array length and index datatypes, which destroys structured data formats like coordinates.

JavaScript-ல் tuple பாதுகாப்பு இல்லாததால், டெவலப்பர்கள் அதன் நீளத்தையும் வகையையும் மாற்றிவிட முடியும், இது அச்சுக்கோடுகள் போன்ற கட்டமைக்கப்பட்ட தரவுகளைச் சிதைத்துவிடும்.

---

## TypeScript Example

```typescript
// A Tuple locks the array length and defines the exact type for each index location.
// Tuple என்பது array-ன் நீளத்தைப் பூட்டி, ஒவ்வொரு இடத்திலும் உள்ள type-ஐத் துல்லியமாக வரையறுக்கிறது.
var point: [number, number] = [12.97, 80.27];
console.log("Point:", point);

// Attempting to assign a string to a numeric index causes an error.
// எண் அமைப்பைக் கொண்ட இடத்தில் string-ஐ ஒதுக்க முயன்றால் பிழை ஏற்படும்.
point[0] = "twelve"; // Compile Error

// Attempting to violate the fixed layout of properties is blocked.
// வரையறுக்கப்பட்ட கட்டமைப்பை மீறும் செயல்பாடுகள் கம்பைல் நேரத்தில் தடுக்கப்படும்.
point = [12.97, 80.27, "Chennai"]; // Compile Error
```

### Output

```text
Compilation Error: Type 'string' is not assignable to type 'number'.
```

### Observation

TypeScript locks the array structure to the defined sequence schema, preventing size changes and datatype violations at each index location during compilation.

ஒவ்வொரு இடத்திலும் தரவு வகைகளையும் நீளத்தையும் கம்பைல் நேரத்தில் சரிபார்ப்பதன் மூலம், வரையறுக்கப்பட்ட அமைப்பில் எந்த மாற்றமும் ஏற்படுவதை TypeScript தடுத்து பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Size Enforcement | Variable (elements can be added/removed at runtime) | Strict (length is locked to the defined tuple template) |
| Position Validation | Indexes do not have specific type rules | Each index location has a strictly bound datatype requirement |
| Structure Safety | High risk of data misalignment | Guarantees ordered key/value structures |

---

## Real-World Example | நடைமுறை உதாரணம்

In a coordinates mapping application, a GPS coordinate is stored as `[latitude, longitude]`. If a database query accidentally swaps the coordinates or appends a city name to the array, the maps API will crash. A tuple `[number, number]` guarantees that only two numbers are stored in that sequence.

ஒரு வரைபட அமைப்பில், GPS ஒருங்கிணைப்புகள் `[latitude, longitude]` எனச் சேமிக்கப்படுகின்றன. தரவுத்தள வினவல் தவறுதலாக அவற்றின் இடத்தை மாற்றினால் அல்லது நகரத்தின் பெயரைச் சேர்த்தால், வரைபட API முடங்கும். `[number, number]` என்ற tuple இரண்டு எண்கள் மட்டுமே அந்த வரிசையில் சேமிக்கப்படுவதை உறுதி செய்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Fixed Layouts | Guarantees array collections maintain strict lengths and positions. |
| Positional Checking | Enforces that each specific index holds its designated type. |
| Lightweight Data | Replaces objects with lightweight arrays while maintaining type safety. |

---

## Interview Question

### What is a Tuple in TypeScript, and how is it different from a normal Array?

A Tuple is a specialized array with a fixed length where the datatype of each element at its specific index is predefined (e.g. `[string, number]`). A normal Array (`string[]` or `number[]`), however, represents a collection of arbitrary length containing elements of a uniform type, where elements can be pushed or popped dynamically without positional constraint.

Tuple என்பது ஒரு குறிப்பிட்ட நீளம் மற்றும் ஒவ்வொரு இடத்திலும் (index) முன்கூட்டியே வரையறுக்கப்பட்ட தரவு வகையைக் கொண்ட ஒரு சிறப்பு array ஆகும் (எ.கா. `[string, number]`). ஆனால் சாதாரண Array என்பது குறிப்பிட்ட நீளமில்லாமல் ஒரே வகையான பல உறுப்புகளைக் கொண்ட தொகுப்பாகும், இதில் உறுப்புகளை எப்போது வேண்டுமானாலும் கட்டுப்பாடு இல்லாமல் சேர்க்கலாம்.

---

## Summary | சுருக்கம்

* Defines fixed-length arrays with position-specific datatypes.
  இடத்திற்குரிய தரவு வகைகளுடன் கூடிய நிலையான நீளமுடைய arrays-ஐ வரையறுக்கிறது.
* Prevents runtime bugs caused by array length modifications.
  Array நீள மாற்றங்களால் ஏற்படும் runtime பிழைகளைத் தடுக்கிறது.
* Ensures positional safety for structured sequences like key-value pairs.
  சாவி-மதிப்பு போன்ற வரிசையமைப்புகளுக்குத் துல்லியமான பாதுகாப்பை அளிக்கிறது.
* Validated statically during development to eliminate data corruption.
  தரவு சிதைவைத் தடுக்க டெவலப்மெண்ட் நேரத்திலேயே கம்பைல் மூலம் சரிபார்க்கிறது.
