# Array

## Definition | வரையறை

An Array datatype represents an ordered collection of values. In TypeScript, arrays are strongly typed, meaning you define the type of items allowed in the collection (e.g., `number[]` or `string[]`), and the compiler prevents items of any other datatype from being added.

Array என்பது வரிசைப்படுத்தப்பட்ட மதிப்புகளின் தொகுப்பாகும். TypeScript-ல், arrays strongly typed ஆக இருக்கும், அதாவது தொகுப்பில் அனுமதிக்கப்படும் உறுப்புகளின் வகையை நீங்கள் முன்கூட்டியே வரையறுக்க வேண்டும் (எ.கா., `number[]` அல்லது `string[]`), மேலும் பிற உறுப்புகள் சேமிக்கப்படுவதை கம்பைலர் தடுக்கிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript allows mixing multiple datatypes in a single array. If a string is pushed into an array intended for calculations, mathematical operations during iteration will fail (e.g., string concatenation instead of addition). Strong typing ensures that the array remains homogeneous and safe.

JavaScript ஒரு array-க்குள் பல datatypes-ஐக் கலக்க அனுமதிக்கிறது. கணக்கீட்டிற்கான array-ல் ஒரு உரை நுழைந்தால், லூப் இயங்கும் போது கணக்கீடு பிழையடையும் (எ.கா., கூடுவதற்குப் பதிலாக உரையாக இணையும்). Strong typing, array உறுப்புகள் அனைத்தும் ஒரே வகையாக இருப்பதை உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// An array acts like a train compartment where JavaScript allows passengers of any type.
// ஒரு array என்பது JavaScript எந்தவொரு வகை பயணிகளையும் அனுமதிக்கும் ரயில் பெட்டி போன்றது.
var prices = [100, 200, 300];
console.log("Prices:", prices);
// Expected Output: Prices: [ 100, 200, 300 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Prices: [ 100, 200, 300 ]

// JavaScript allows pushing a string value into a number array.
// JavaScript ஒரு number array-ல் string மதிப்பைச் சேர்க்க அனுமதிக்கிறது.
prices.push("Free");
console.log("Updated Prices:", prices);
// Expected Output: Updated Prices: [ 100, 200, 300, 'Free' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Prices: [ 100, 200, 300, 'Free' ]

// Performing calculation loops on mixed arrays leads to logical calculation failures (like NaN).
// கலவையான arrays-ல் கணக்கீட்டு வளையங்களை (loops) இயக்கும் போது கணக்கீட்டுப் பிழைகள் (NaN) ஏற்படுகின்றன.
var total = 0;
prices.forEach(function (price) {
    total += price;
});
console.log("Total Price:", total);
// Expected Output: Total Price: 600Free
// எதிர்பார்க்கப்படும் வெளியீடு: Total Price: 600Free
```

### Output

```text
Prices: [ 100, 200, 300 ]
Updated Prices: [ 100, 200, 300, 'Free' ]
Total Price: 600Free
```

### Observation

JavaScript permits heterogeneous arrays, allowing a string `"Free"` to enter a numeric array. This leads to string concatenation instead of addition during total calculation.

JavaScript பலவகை உறுப்புகளைக் கொண்ட arrays-ஐ அனுமதிக்கிறது. இதனால் `"Free"` என்ற உரை எண் array-ல் சேர்ந்து, கூட்டலுக்குப் பதிலாக உரை இணைப்பாக மாறுகிறது.

---

## TypeScript Example

```typescript
// TypeScript locks the compartment so only numeric tickets are allowed.
// எண் டிக்கெட்டுகளை மட்டுமே அனுமதிக்கும் வகையில் TypeScript ரயில் பெட்டியைப் பூட்டுகிறது.
var prices: number[] = [100, 200, 300];
console.log("Prices:", prices);

// Attempting to push a string value into a number array causes an error.
// number array-ல் string மதிப்பைச் சேர்க்க முயற்சித்தால் பிழை ஏற்படும்.
prices.push("Free"); // Compile Error

// TypeScript guarantees that all array items are uniform, allowing safe calculations.
// அனைத்து array உறுப்புகளும் ஒரே வகையாக இருப்பதை உறுதி செய்வதன் மூலம் பாதுகாப்பான கணக்கீட்டை TypeScript வழங்குகிறது.
var total: number = 0;
prices.forEach(function (price) {
    total += price;
});
console.log("Total Price:", total);
```

### Output

```text
Compilation Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Observation

TypeScript guarantees type uniformity within the array by checking operations at compile time, ensuring arithmetic loops only perform mathematical operations.

Array உறுப்புகள் அனைத்தும் ஒரே மாதிரியாக இருப்பதை உறுதி செய்வதன் மூலம், கணித செயல்பாடுகள் மட்டுமே லூப்பில் நடைபெறுவதை TypeScript உறுதி செய்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Array Homogeneity | Allows mixed values (`[100, "Free", true]`) | Enforces uniform item types (`number[]` or `string[]`) |
| Modification Checks | Elements can be pushed regardless of their datatypes | Restricts `push` and assignments to the declared element type |
| Loop Safety | Iterations can cause runtime calculation bugs or function crashes | Compiler guarantees every item matches the type, ensuring safe processing |

---

## Real-World Example | நடைமுறை உதாரணம்

In a billing system, a list of product item totals is processed to calculate the final invoice. If a bug inserts an item name instead of the item price into the list, JavaScript will produce a corrupted total invoice string. TypeScript enforces a strict `number[]` array to block non-numeric billing items.

ஒரு பில்லிங் முறையில், இறுதி விலைப்பட்டியலைக் கணக்கிட தயாரிப்பு விலைகளின் பட்டியல் செயலாக்கப்படுகிறது. விலைப்பட்டியலில் விலைக்குப் பதிலாக தயாரிப்பின் பெயர் நுழைந்தால், JavaScript சிதைந்த பில் தொகையை உருவாக்கும். TypeScript கடுமையான `number[]` கட்டுப்பாட்டை விதிப்பதன் மூலம் இதனைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Consistent Elements | Guarantees that every item in the collection has the same data type. |
| Secure Loops | Eliminates logic failures when iterating through items to run calculations or methods. |
| Autocomplete Helpers | Suggests correct methods (like `.toFixed()` for number arrays or `.substring()` for strings). |

---

## Interview Question

### How do you define arrays in TypeScript, and what is the benefit of using homogeneous arrays?

In TypeScript, arrays are defined by appending square brackets to the datatype, like `number[]`, or by using the generic syntax `Array<number>`. The key benefit of homogeneous arrays is compile-time validation, ensuring that all elements are of the same type. This prevents runtime bugs during iteration, such as adding strings in a math calculation, and guarantees method availability.

TypeScript-ல், arrays `number[]` என்ற அடைப்புக்குறி மூலமாகவோ அல்லது `Array<number>` என்ற generic வடிவிலோ வரையறுக்கப்படும். இதன்பயன் கம்பைல் நேரத்திலேயே அனைத்து உறுப்புகளும் ஒரே வகையைச் சார்ந்தவை எனச் சரிபார்ப்பதே ஆகும். இது லூப்களில் ஏற்படும் runtime பிழைகளைத் தடுத்து, உறுப்புகளின் செயல்பாடுகளைப் பாதுகாப்பானதாக்குகிறது.

---

## Summary | சுருக்கம்

* Enforces single-type item collections using notations like `type[]`.
  `type[]` குறியீடுகள் மூலம் ஒரே வகை உறுப்புகளின் தொகுப்பை உறுதி செய்கிறது.
* Prevents runtime logic and loop crashes from heterogeneous values.
  பலவகை உறுப்புகளால் லூப்களில் ஏற்படும் runtime பிழைகளைத் தடுக்கிறது.
* Enables rich autocomplete suggestions tailored to the element type.
  உறுப்புகளின் வகைக்கு ஏற்ற autocomplete வசதிகளை வழங்குகிறது.
* Checked statically, blocking invalid array modifications during development.
  மறைமுகத் தவறுகளை டெவலப்மெண்ட் நேரத்திலேயே கம்பைல் மூலம் தடுக்கிறது.
