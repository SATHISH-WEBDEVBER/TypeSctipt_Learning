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
