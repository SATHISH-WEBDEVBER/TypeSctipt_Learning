# Arrays

## Definition | வரையறை

An Array is an ordered collection of values accessed via index numbers. In TypeScript, arrays are typed to ensure type safety. You can define them using the square bracket notation (e.g., `number[]`) or the generic array notation (e.g., `Array<string>`), ensuring that all elements in the collection conform to the specified datatype.

Array என்பது எண்களின் குறியீடுகள் (indices) மூலம் அணுகப்படும் வரிசைப்படுத்தப்பட்ட மதிப்புகளின் தொகுப்பாகும். TypeScript-ல், arrays பாதுகாப்பிற்காக வகைகளாக வரையறுக்கப்படுகின்றன. இவற்றை `number[]` அல்லது `Array<string>` என்ற generic வடிவில் எழுதலாம்.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript allows arrays to hold heterogeneous values (mixed types) and change dynamically. If a string value accidentally enters an array of numbers, operations like math loops or array map transformations (`.map()`) will result in calculation bugs like `NaN`. TypeScript enforces type homogeneity, making array iterations highly predictable and crash-proof.

JavaScript, ஒரே array-க்குள் பலவகை தரவுகளைச் சேமிக்க அனுமதிக்கிறது. இதனால் எண் தொகுப்பில் உரை மதிப்பு நுழைந்து, map போன்ற செயல்பாடுகளில் `NaN` பிழையை ஏற்படுத்தலாம். TypeScript உறுப்புகள் அனைத்தும் ஒரே வகையாக இருப்பதை உறுதி செய்து பிழைகளைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript treats arrays dynamically, allowing different datatypes in the same list.
// JavaScript, ஒரே பட்டியலில் வெவ்வேறு வகையான மதிப்புகளைச் சேமிக்க அனுமதிக்கிறது.
var shoppingCart = [100, 200, 300];
console.log("Cart Items:", shoppingCart);
// Expected Output: Cart Items: [ 100, 200, 300 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Cart Items: [ 100, 200, 300 ]

// We can push a string to a numeric array.
// நாம் எண் பட்டியலில் உரை மதிப்பைச் சேர்க்கலாம்.
shoppingCart.push("Free Item");
console.log("Updated Cart:", shoppingCart);
// Expected Output: Updated Cart: [ 100, 200, 300, 'Free Item' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Cart: [ 100, 200, 300, 'Free Item' ]

// Using array methods like map on mixed arrays can cause unexpected string conversions.
// கலவையான arrays-ல் map போன்ற முறைகளைப் பயன்படுத்தும்போது எதிர்பாராத முடிவுகள் ஏற்படும்.
var discountedCart = shoppingCart.map(function (price) {
    return price * 0.9;
});
console.log("Discounted Cart:", discountedCart);
// Expected Output: Discounted Cart: [ 90, 180, 270, NaN ]
// எதிர்பார்க்கப்படும் வெளியீடு: Discounted Cart: [ 90, 180, 270, NaN ]
```

### Output

```text
Cart Items: [ 100, 200, 300 ]
Updated Cart: [ 100, 200, 300, 'Free Item' ]
Discounted Cart: [ 90, 180, 270, NaN ]
```

### Observation

JavaScript permits pushing values of any datatype into any array, which leads to arithmetic transformations like `.map()` producing invalid results (`NaN`) at runtime.

JavaScript, எந்தவொரு வகையையும் array-க்குள் சேர்க்க அனுமதிப்பதால், லூப் மற்றும் map செயல்பாடுகளின் போது `NaN` போன்ற ரன்டைம் பிழைகளை ஏற்படுத்துகிறது.

---

## TypeScript Example

```typescript
// TypeScript supports two array syntaxes: bracket syntax (type[]) and generic syntax (Array<type>).
// TypeScript இரு வகையான array முறைகளை ஆதரிக்கிறது: அடைப்புக்குறி முறை (type[]) மற்றும் ஜெனரிக் முறை (Array<type>).
var shoppingCart: number[] = [100, 200, 300];
var invoiceIds: Array<string> = ["INV-01", "INV-02"];

console.log("Cart:", shoppingCart);

// Pushing a string value into a number array is blocked by the compiler.
// number array-ல் string மதிப்பைச் சேர்க்க முயற்சிப்பது கம்பைலரால் தடுக்கப்படும்.
shoppingCart.push("Free Item"); // Compile Error

// TypeScript guarantees that mapping over a number array yields safe calculation results.
// number array-ல் map செயல்பாடுகளைச் செய்வது பாதுகாப்பான கணக்கீட்டைத் தரும் என TypeScript உறுதியளிக்கிறது.
var discountedCart: number[] = shoppingCart.map(function (price: number) {
    return price * 0.9;
});
console.log("Discounted Cart:", discountedCart);
```

### Output

```text
Compilation Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Observation

TypeScript prevents invalid array operations at compile time, rejecting incorrect element insertions and securing mapping transformations.

கம்பைல் நேரத்திலேயே தவறான உறுப்புகள் சேர்க்கப்படுவதைத் தடுத்து, பாதுகாப்பான மாற்றுச் செயல்பாடுகளை (mapping) TypeScript உறுதி செய்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Syntaxes Allowed | Single array type | Bracket notation (`type[]`) and Generic notation (`Array<type>`) |
| Element Validation | No checks (allows arbitrary types) | Strictly enforces homogeneous items |
| Method Safety | Callbacks in map/filter can execute on invalid datatypes | Callback arguments are statically checked for type-safety |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider a warehouse management system where inventory barcodes are processed. If the barcodes are stored as a list of strings (`string[]`), JavaScript might allow a bug to push a numeric total price into the list. When the printing module calls `.toLowerCase()` on all elements, the number crashes the program. TypeScript prevents this by strictly locking the array structure.

ஒரு கிடங்கு மேலாண்மை அமைப்பில் தயாரிப்புகளின் பார்கோடு பட்டியல் கையாளப்படுகிறது. பார்கோடு பட்டியல் உரை வடிவில் (`string[]`) இருக்கும்போது, JavaScript அதில் எண் மதிப்பைச் சேர்க்க அனுமதிக்கலாம். அச்சு சாதனம் உரை எழுத்துகளை மாற்ற `.toLowerCase()`-ஐ அழைக்கும் போது எண் பிழையை உண்டாக்கும். TypeScript இத்தகைய பிழைகளைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Multiple Syntaxes | Supports both `type[]` and `Array<type>` notations for flexibility. |
| Secure Array Methods | Ensures `.map()`, `.filter()`, and `.reduce()` operate with safe type constraints. |
| Editor Autocomplete | Offers precise code suggestions for elements within the collection. |

---

## Interview Question

### What are the two ways to declare an array in TypeScript, and is there any performance difference between them?

In TypeScript, you can declare an array using **Bracket Notation** (e.g. `let list: number[]`) or **Generic Array Notation** (e.g. `let list: Array<number>`). There is absolutely no performance difference between the two at runtime because both compile to standard JavaScript arrays (`[]`). The difference is purely syntactic preference, though bracket notation is more commonly used in the community.

TypeScript-ல், array-ஐ **Bracket Notation** (`number[]`) அல்லது **Generic Array Notation** (`Array<number>`) மூலம் அறிவிக்கலாம். இவை இரண்டும் ரன்டைமில் சாதாரண JavaScript arrays ஆக மாறுவதால், செயல்பாட்டுத் திறனில் (performance) எந்தவொரு வேறுபாடும் இல்லை. இவை வெறும் குறியீட்டுத் தேர்வுகளே ஆகும்.

---

## Summary | சுருக்கம்

* Supports both bracket `type[]` and generic `Array<type>` definitions.
  `type[]` மற்றும் `Array<type>` ஆகிய இரண்டு வரைவிலக்கண முறைகளையும் ஆதரிக்கிறது.
* Ensures elements in the collection conform to a uniform datatype.
  தொகுப்பில் உள்ள அனைத்து உறுப்புகளும் ஒரே வகையானவை என்பதை உறுதி செய்கிறது.
* Protects array transformation methods like `.map()` and `.filter()` from type errors.
  `.map()` மற்றும் `.filter()` போன்ற செயல்பாடுகளை ரன்டைம் பிழைகளில் இருந்து பாதுகாக்கிறது.
* Checked statically at compile time, eliminating runtime type mismatches.
  ரன்டைம் பிழைகளை நீக்க கம்பைல் நேரத்திலேயே சரிபார்க்கப்படுகிறது.
