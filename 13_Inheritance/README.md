# Inheritance

## Definition | வரையறை

Inheritance is a key concept of Object-Oriented Programming (OOP) where a child class (subclass) inherits properties and methods from a parent class (superclass). In TypeScript, inheritance is declared using the `extends` keyword, enabling code reusability and method overriding.

Inheritance (மரபுரிமம்) என்பது ஒரு துணை வகுப்பு (child class) பெற்றோர் வகுப்பின் (parent class) பண்புகள் மற்றும் செயல்பாடுகளைப் பெற்றுக்கொள்ள அனுமதிக்கும் முக்கிய OOP கருத்தாகும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript classes support inheritance natively since ES6, but do not prevent child classes from overriding parent methods with incompatible formats (e.g. changing a method that returns a string to return a number, or modifying parameters). This breaks polymorphism. TypeScript enforces type safety during method overriding, ensuring that any overridden method signature in the child class is fully compatible with the parent's signature.

JavaScript-ல் பெற்றோர் வகுப்பின் செயல்பாடுகளை வடிவமைப்பு விதிகள் இன்றி குழந்தை வகுப்பால் மாற்ற முடியும். TypeScript மரபுரிம ஓவர்ரைடிங்கில் வகை இணக்கத்தன்மையை (type compatibility) கட்டாயப்படுத்திப் பாதுகாப்பைத் தருகிறது.

---

## JavaScript Example

```javascript
// JavaScript implements prototype inheritance using ES6 class extends and super().
// JavaScript, ES6 class extends மற்றும் super() வாயிலாக மரபுரிமத்தை (inheritance) செயல்படுத்துகிறது.
class Father {
    constructor(name) {
        this.fatherName = name;
    }

    work() {
        return this.fatherName + " manages the family shop";
    }
}

class Son extends Father {
    constructor(fatherName, sonName) {
        super(fatherName); // Must call parent constructor
        this.sonName = sonName;
    }

    // Overriding the work method
    // work முறையை மாற்றி எழுதுதல் (method overriding)
    work() {
        return this.sonName + " expands the shop online";
    }
}

var child = new Son("Karthik", "Sanjay");
console.log("Activity:", child.work());
// Expected Output: Activity: Sanjay expands the shop online
// எதிர்பார்க்கப்படும் வெளியீடு: Activity: Sanjay expands the shop online
```

### Output

```text
Activity: Sanjay expands the shop online
```

### Observation

JavaScript executes overridden methods dynamically at runtime, but does not verify if the overridden signatures conform to the parent interface contract, posing risks when code expects unified return types.

JavaScript, பெற்றோர் முறையின் வடிவமைப்பிற்கு இணங்க ஓவர்ரைடிங் குறியீடுகள் உள்ளனவா என்று சரிபார்ப்பதில்லை, இது செயல்பாட்டு குளறுபடிகளுக்குக் காரணமாகும்.

---

## TypeScript Example

```typescript
// TypeScript enforces constructor rules and type compatibility when overriding inherited methods.
// TypeScript, மரபுரிம முறைகளில் கன்ஸ்ட்ரக்டர் விதிகள் மற்றும் ஓவர்ரைடிங் இணக்கத்தன்மையை உறுதி செய்கிறது.
class Father {
    protected fatherName: string;

    constructor(name: string) {
        this.fatherName = name;
    }

    public work(): string {
        return this.fatherName + " manages the family shop";
    }
}

class Son extends Father {
    private sonName: string;

    constructor(fatherName: string, sonName: string) {
        super(fatherName); // Enforces calling super() before referencing 'this'
        this.sonName = sonName;
    }

    // Overriding parent method with compatible signature
    // இணக்கமான சிக்னேச்சர் உடன் பெற்றோர் முறையை ஓவர்ரைடு செய்தல்
    public work(): string {
        return this.sonName + " expands the shop online";
    }
}

var child = new Son("Karthik", "Sanjay");
console.log("Activity:", child.work());

// Overriding with an incompatible signature is blocked during compilation.
// இணக்கமற்ற சிக்னேச்சர் உடன் பெற்றோர் முறையை ஓவர்ரைடு செய்ய முயற்சிப்பது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
class Daughter extends Father {
    public work(hours: number): number { return hours; } // Compile Error
}
```

### Output

```text
Compilation Error: Property 'work' in type 'Daughter' is not assignable to the same property in base type 'Father'.
  Type '(hours: number) => number' is not assignable to type '() => string'.
```

### Observation

TypeScript prevents compilation if a child class alters the expected return type or parameters of an inherited method, ensuring safe polymorphic structures.

பெற்றோர் செயல்பாட்டின் திரும்பும் வகை அல்லது அளபுருக்களை குழந்தை வகுப்பு தவறாக மாற்றும்போது TypeScript கம்பைல் நேரத்திலேயே அதைத் தடுத்து பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Override Safety | None (can change parameters or return types arbitrarily) | Enforced (overridden signatures must remain compatible) |
| Constructor Enforcement | Throws runtime error if `super()` is omitted in child constructor | Throws compile-time error if `super()` is omitted |
| Access Sharing | No visibility sharing rules (all inherited items public) | Supports `protected` modifier (accessible inside derived subclasses only) |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider a family business where a father manages a physical shop, and his son inherits it. The father has established a business contract to deliver goods. If the son overrides this method but changes the returns from "goods" to "bills of debt" (an incompatible change), the customers (code calling the class) will face issues. TypeScript's compiler acts as a business legal advisor, ensuring the son satisfies the established contracts.

ஒரு குடும்ப வணிகத்தை நினைத்துப் பாருங்கள். தந்தை ஒரு கடையை நடத்துகிறார், மகன் அதை மரபுரிமமாகப் பெறுகிறார். தந்தை பொருட்களை வழங்க ஒப்புக்கொண்ட ஒப்பந்தத்தைக் கொண்டுள்ளார். மகன் இந்த வழிமுறையை மாற்றி (override) பொருட்களுக்குப் பதிலாகக் கடன்களை வழங்கினால் வாடிக்கையாளர்கள் பாதிக்கப்படுவர். TypeScript கம்பைல் நேரத்திலேயே இதனைத் தடுத்து பழைய ஒப்பந்தங்கள் மீறப்படாமல் பாதுகாக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Code Reuse | Allows child classes to inherit field logic and constructor structures, avoiding code repetition. |
| Protected Access | Use `protected` to share properties with subclasses while keeping them hidden from external variables. |
| Safe Polymorphism | Guarantees that instances of different child classes can be used interchangeably based on parent types. |

---

## Interview Question

### What is the purpose of the `super` keyword in TypeScript class constructors, and where must it be called?

In a derived (child) class constructor, `super` is used to invoke the constructor of the base (parent) class. TypeScript strictly requires that `super()` must be called **before** you access any properties using `this` (e.g. `this.sonName = sonName`) in the child constructor. This ensures that the parent class is fully initialized before child initialization occurs.

துணை (child) வகுப்பின் கன்ஸ்ட்ரக்டரில், பெற்றோர் (parent) வகுப்பின் கன்ஸ்ட்ரக்டரை அழைக்க `super` பயன்படுகிறது. `this` குறியீடு மூலம் உறுப்புகளைத் திருத்துவதற்கு **முன்பாகவே** `super()` அழைக்கப்பட வேண்டும் என TypeScript கட்டாயப்படுத்துகிறது.

---

## Summary | சுருக்கம்

* Uses `extends` to reuse base class properties and method scripts.
  பெற்றோர் வகுப்பின் பண்புகள் மற்றும் செயல்பாடுகளைப் பெற `extends` பயன்படுத்துகிறது.
* Enforces constructor `super()` calls before accessing child `this` objects.
  குழந்தை வகுப்பு `this`-ஐ அணுகுவதற்கு முன் `super()` அழைப்பைக் கட்டாயமாக்குகிறது.
* Restricts method overriding to prevent incompatible signatures.
  வடிவமைப்பு மாற்றங்களைத் தடுக்க செயல்பாடுகளை ஓவர்ரைடு செய்வதைக் கட்டுப்படுத்துகிறது.
* Supports `protected` to share access strictly with subclasses.
  துணை வகுப்புகளுடன் மட்டும் பண்புகளைப் பகிர `protected` வசதியை ஆதரிக்கிறது.
