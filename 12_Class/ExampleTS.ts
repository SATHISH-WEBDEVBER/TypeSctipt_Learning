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
// Expected Output: Device Status: Smart TV is active
// எதிர்பார்க்கப்படும் வெளியீடு: Device Status: Smart TV is active

// Directly modifying private members or assigning incorrect types is blocked during compilation.
// தனிப்பட்ட உறுப்பினர்களை (private members) நேரடியாக மாற்றுவது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
// device.name = "Smart Bulb";
