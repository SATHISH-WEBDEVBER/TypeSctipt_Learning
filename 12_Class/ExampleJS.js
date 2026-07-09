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
