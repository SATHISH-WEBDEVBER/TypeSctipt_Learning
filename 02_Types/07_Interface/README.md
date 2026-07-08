# Interface

## Definition | வரையறை

An Interface is a structural blueprint that defines the contract/shape an object must follow. In TypeScript, once an interface is defined, any object assigned to that interface type must declare all required properties with their correct datatypes, preventing shape discrepancies.

Interface என்பது ஒரு object பின்பற்ற வேண்டிய வடிவமைப்பு ஒப்பந்தமாகும். TypeScript-ல், ஒரு interface வரையறுக்கப்பட்டால், அந்த அமைப்பை ஏற்கும் எந்தவொரு object-ம் அனைத்து தேவையான பண்புகளையும் சரியான தரவு வகைகளுடன் கொண்டிருக்க வேண்டும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript functions expect certain keys in argument objects. If a developer calls a function with a misspelled key (e.g. `fullName` instead of `name`), the function executes with `undefined` values, causing silent bugs. Interfaces enforce these structural shape rules during compilation.

JavaScript functions வாதங்களில் (arguments) குறிப்பிட்ட சாவிகளை எதிர்பார்க்கின்றன. எழுத்துப்பிழையுள்ள சாவிகளுடன் (எ.கா. `name`-க்குப் பதிலாக `fullName`) function அழைக்கப்பட்டால், அது `undefined` மதிப்புடன் இயங்கி பிழையை ஏற்படுத்தும். Interfaces இந்த வடிவமைப்பு விதிகளை கம்பைல் நேரத்தில் கட்டாயப்படுத்துகிறது.

---

## JavaScript Example

```javascript
// In JavaScript, there are no interfaces to enforce object structures.
// JavaScript-ல் object அமைப்புகளைக் கட்டுப்படுத்த interfaces இல்லை.
function printEmployee(employee) {
    console.log("Employee Name:", employee.name);
    console.log("Employee ID:", employee.id);
}

// Creating a valid employee object.
// சரியான employee object உருவாக்கப்படுகிறது.
var emp = { id: 101, name: "Sathish" };
printEmployee(emp);
// Expected Output: Employee Name: Sathish
// Expected Output: Employee ID: 101
// எதிர்பார்க்கப்படும் வெளியீடு: Employee Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: Employee ID: 101

// Accessing misspelled properties returns undefined silently.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
var invalidEmp = { id: 102, fullName: "Sathish" };
printEmployee(invalidEmp);
// Expected Output: Employee Name: undefined
// Expected Output: Employee ID: 102
// எதிர்பார்க்கப்படும் வெளியீடு: Employee Name: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Employee ID: 102
```

### Output

```text
Employee Name: Sathish
Employee ID: 101
Employee Name: undefined
Employee ID: 102
```

### Observation

JavaScript lacks interface support, enabling objects with missing or misspelled properties to be passed to functions, leading to runtime failures like `undefined` printing.

JavaScript-ல் interfaces ஆதரவு இல்லாததால், விடுபட்ட அல்லது எழுத்துப்பிழையுள்ள பண்புகளுடன் கூடிய objects functions-க்கு அனுப்பப்பட்டு, `undefined` போன்ற ரன்டைம் பிழைகளை ஏற்படுத்துகின்றன.

---

## TypeScript Example

```typescript
// An interface acts like a business contract ensuring the employee structure.
// ஒரு interface என்பது employee அமைப்பை உறுதி செய்யும் வணிக ஒப்பந்தம் போன்றது.
interface Employee {
    id: number;
    name: string;
}

function printEmployee(employee: Employee) {
    console.log("Employee Name:", employee.name);
    console.log("Employee ID:", employee.id);
}

// Creating a valid object following the Employee contract.
// Employee ஒப்பந்தத்தைப் பின்பற்றி ஒரு சரியான object உருவாக்கப்படுகிறது.
var emp: Employee = { id: 101, name: "Sathish" };
printEmployee(emp);

// Attempting to create an object violating the contract causes an error.
// ஒப்பந்தத்தை மீறும் வகையில் ஒரு object-ஐ உருவாக்க முயன்றால் பிழை ஏற்படும்.
var invalidEmp: Employee = { id: 102, fullName: "Sathish" }; // Compile Error
```

### Output

```text
Compilation Error: Property 'name' is missing in type '{ id: number; fullName: string; }' but required in type 'Employee'.
```

### Observation

TypeScript prevents invalid object shapes from being passed or assigned by validating schemas against the interface contract during compilation.

இடைமுக (interface) ஒப்பந்தத்துடன் ஒப்பிட்டு சரிபார்ப்பதன் மூலம், தவறான வடிவங்களை கொண்ட objects பயன்படுத்தப்படுவதைத் தடுத்து கம்பைல் நேரத்திலேயே TypeScript பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Structural Contracts | None (objects are dynamic and unrestricted) | Declared via `interface`, ensuring object strictness |
| Type Enforcement | No checks (allows missing keys or incorrect types) | Compilation fails if required keys are missing or mismatch types |
| Readability | Relies on external documentation or manual code checking | Self-documenting; shapes are clearly visible to developers |

---

## Real-World Example | நடைமுறை உதாரணம்

In an payment processing system, an invoice must contain an `amount` (number) and a `currency` (string). If a developer misspelled it as `amt` or omitted currency, JavaScript would process the transaction incorrectly. An interface `Invoice` guarantees that every transaction object strictly meets these property requirements.

கட்டணச் செயலாக்க அமைப்பில், ஒரு விலைப்பட்டியலில் (invoice) `amount` மற்றும் `currency` ஆகியவை இருக்க வேண்டும். ஒரு டெவலப்பர் `amt` என தவறாக எழுதினால் அல்லது நாணயத்தை (currency) எழுத மறந்துவிட்டால், JavaScript தவறான பரிவர்த்தனையைச் செய்யும். `Invoice` என்ற interface பரிவர்த்தனைகள் அனைத்தும் இந்தத் தேவைகளை நிறைவு செய்வதை உறுதி செய்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Strict Schemas | Enforces strict structures for object shapes, preventing typo bugs. |
| Inheritance Support | Interfaces can extend other interfaces (`extends`), allowing clean code reuse. |
| Class Blueprint | Classes can implement (`implements`) interfaces to enforce structure. |

---

## Interview Question

### What is the difference between Interface and Class in TypeScript?

An Interface is a virtual contract that exists only during compilation to validate object structures and is completely removed from the compiled JavaScript code. A Class, however, is a runtime blueprint that compiles to JavaScript constructor functions and can define both structure (shapes) and executable logic (methods and constructors).

Interface என்பது கம்பைல் நேரத்தின் போது object வடிவங்களைச் சரிபார்க்க மட்டுமே பயன்படும் ஒரு தற்காலிக ஒப்பந்தமாகும், இது கம்பைல் செய்யப்பட்ட JavaScript கோப்பில் இருக்காது. ஆனால் Class என்பது ரன்டைம் வடிவமைப்பாகும், இது JavaScript-ல் constructor functions ஆக மாறும், மேலும் இது வடிவத்தையும் செயல்படுத்தக்கூடிய தர்க்கத்தையும் (methods) கொண்டிருக்கலாம்.

---

## Summary | சுருக்கம்

* Defines custom templates and structures that objects must follow.
  Objects பின்பற்ற வேண்டிய தனிப்பயன் மாதிரிகள் மற்றும் கட்டமைப்புகளை வரையறுக்கிறது.
* Caught during compilation, avoiding invalid data passes.
  தவறான தரவு அனுப்பப்படுவதைக் கம்பைல் நேரத்திலேயே கண்டறிந்து தடுக்கிறது.
* Supports extensibility through inheritance (`extends` keyword).
  `extends` மூலம் எளிதாக வடிவங்களை விரிவுபடுத்திக்கொள்ள உதவுகிறது.
* Can be implemented by classes to enforce standard behavior blueprints.
  தரப்படுத்தப்பட்ட கட்டமைப்புகளுக்காக classes மூலம் செயல்படுத்தப்படலாம்.
