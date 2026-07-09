# Classes

## Definition | வரையறை

A Class is a blueprint or template for creating objects with predefined properties and methods. In TypeScript, classes extend JavaScript classes by adding static type annotations, access modifiers (`public`, `private`, `protected`), and constructor parameters, ensuring robust object-oriented programming.

Class என்பது முன்கூட்டியே வரையறுக்கப்பட்ட பண்புகள் மற்றும் செயல்பாடுகளைக் கொண்ட ஆப்ஜெக்ட்களை உருவாக்குவதற்கான ஒரு வார்ப்புரு அல்லது திட்டவடிவமாகும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript classes allow properties to be accessed and overwritten freely, even allowing arbitrary datatypes (e.g. changing a name string to a number). TypeScript classes provide encapsulation through access modifiers. Marking a field as `private` prevents it from being accessed or changed outside the class, keeping the object's internal state safe.

JavaScript-ல் பண்புகளை யார் வேண்டுமானாலும் திருத்த முடியும், இது சிக்கல்களுக்கு வழிவகுக்கலாம். TypeScript classes அணுகல் திருத்திகள் (access modifiers) மூலம் பாதுகாப்பை வழங்கி, வெளிப்புற மாற்றங்களில் இருந்து உட்புற நிலையைப் பாதுகாக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript classes do not enforce property types or access control, allowing dynamic additions.
// JavaScript classes, பண்புகளின் தரவு வகையையோ அல்லது அணுகல் கட்டுப்பாட்டையோ கட்டாயப்படுத்துவதில்லை.
class SmartDevice {
    constructor(deviceName) {
        this.name = deviceName; // Public by default
    }

    getStatus() {
        return this.name + " is active";
    }
}

var device = new SmartDevice("Smart TV");
console.log("Device Status:", device.getStatus());
// Expected Output: Device Status: Smart TV is active
// எதிர்பார்க்கப்படும் வெளியீடு: Device Status: Smart TV is active

// JavaScript allows dynamic assignment of arbitrary datatypes to properties.
// JavaScript, பண்புகளுக்கு வரம்பற்ற தரவு வகைகளை மாறும் வகையில் ஒதுக்க அனுமதிக்கிறது.
device.name = 100;
console.log("Altered Status:", device.getStatus());
// Expected Output: Altered Status: 100 is active
// எதிர்பார்க்கப்படும் வெளியீடு: Altered Status: 100 is active
```

### Output

```text
Device Status: Smart TV is active
Altered Status: 100 is active
```

### Observation

JavaScript permits modifying class instances freely at runtime. Private state is difficult to secure, and any property can be rewritten with an unexpected type like a number.

வகுப்பு உறுப்புகளை ரன்டைமில் சுதந்திரமாக மாற்ற JavaScript அனுமதிக்கிறது. இதனால் தனிப்பட்ட பண்புகளைப் பாதுகாப்பது கடினமாகும், மேலும் தரவு வகைகளையும் மாற்ற முடியும்.

---

## TypeScript Example

```typescript
// TypeScript classes support typed fields, constructors, and access modifiers (public/private).
// TypeScript classes, typed fields, constructors மற்றும் அணுகல் திருத்திகளை (access modifiers) ஆதரிக்கின்றன.
class SmartDevice {
    private name: string; // Restricted member access

    constructor(deviceName: string) {
        this.name = deviceName;
    }

    public getStatus(): string {
        return this.name + " is active";
    }
}

var device = new SmartDevice("Smart TV");
console.log("Device Status:", device.getStatus());

// Directly modifying private members or assigning incorrect types is blocked during compilation.
// தனிப்பட்ட உறுப்பினர்களை (private members) நேரடியாக மாற்றுவது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
device.name = "Smart Bulb"; // Compile Error
```

### Output

```text
Compilation Error: Property 'name' is private and only accessible within class 'SmartDevice'.
```

### Observation

TypeScript prevents compile-time errors by blocking code that attempts to access `private` class properties from outside the class instance scope.

தனிப்பட்ட (`private`) வகுப்புப் பண்புகளை வெளிப்புறத்திலிருந்து அணுக முயற்சிக்கும் குறியீடுகளை கம்பைல் நேரத்திலேயே TypeScript தடுத்து நிறுத்துகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Access Modifiers | Limited (all fields public by default; `#` prefix for ES2022 private fields) | Full support (`public`, `private`, `protected`) |
| Member Typing | Assumed dynamically | Statically annotated |
| Abstract Classes | Not supported natively | Supported natively to define template classes |

---

## Real-World Example | நடைமுறை உதாரணம்

Think of a bank vault. The vault contains customer deposits (private properties) and provides public withdrawal terminals (public methods). In JavaScript, a developer could mistakenly modify the deposit balances directly from outside. In TypeScript, access modifiers block direct access to the deposits, forcing all transactions to go through safe withdrawal routines.

ஒரு வங்கிச் சேமிப்பு பெட்டகத்தை (bank vault) நினைத்துப் பாருங்கள். பெட்டகம் வாடிக்கையாளர்களின் வைப்புத்தொகையை (private properties) oncologist-வது, மற்றும் பணம் எடுக்கும் பொது சாதனங்களை (public methods) வழங்குகிறது. JavaScript-ல் நேரடியாக வெளிப்புறத்திலிருந்து இருப்பைத் திருத்த முடியும். TypeScript-ல் வைப்புத்தொகைக்கு நேரடி அணுகல் தடுக்கப்பட்டு, பொது வழிகளின் மூலமே அனுமதி வழங்கப்படுகிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Encapsulation | Restricts access to sensitive class fields using `private` or `protected` modifiers. |
| Parameter Properties | Allows declaring and initializing class fields directly within constructor signatures (e.g. `constructor(private name: string)`). |
| Inheritance Support | Standard object-oriented class expansion using `extends` and `super()` overrides. |

---

## Interview Question

### What is the difference between `private`, `protected`, and `public` access modifiers in TypeScript classes?

- `public` (default): Members are accessible from anywhere.
- `private`: Members are accessible only within the class they are declared.
- `protected`: Members are accessible within the class they are declared and all of its subclasses (derived classes).

- `public`: உறுப்பினர்களை எங்கிருந்து வேண்டுமானாலும் அணுகலாம்.
- `private`: உறுப்பினர்களை அவை அறிவிக்கப்பட்ட வகுப்பிற்குள் மட்டுமே அணுக முடியும்.
- `protected`: உறுப்பினர்களை அவை அறிவிக்கப்பட்ட வகுப்பிற்குள்ளும் மற்றும் அதன் துணை வகுப்புகளுக்குள்ளும் (subclasses) மட்டுமே அணுக முடியும்.

---

## Summary | சுருக்கம்

* Acts as a template to instantiate clean object collections.
  பொருள்களை உருவாக்க ஒரு வார்ப்புருவாக செயல்படுகிறது.
* Features access modifiers (`public`, `private`, `protected`) for encapsulation.
  பாதுகாப்பிற்காக அணுகல் திருத்திகள் (access modifiers) போன்றவற்றை வழங்குகிறது.
* Ensures strict type annotations on fields and method signatures.
  பண்புகள் மற்றும் செயல்பாடுகளின் வகைகளை கம்பைல் நேரத்திலேயே உறுதி செய்கிறது.
* Supports inheritance to reuse and override class methods.
  வகுப்பு செயல்பாடுகளை மீண்டும் பயன்படுத்த inheritance முறையை ஆதரிக்கிறது.
