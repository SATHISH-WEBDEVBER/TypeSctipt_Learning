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
// Expected Output: Activity: Sanjay expands the shop online
// எதிர்பார்க்கப்படும் வெளியீடு: Activity: Sanjay expands the shop online

// Overriding with an incompatible signature is blocked during compilation.
// இணக்கமற்ற சிக்னேச்சர் உடன் பெற்றோர் முறையை ஓவர்ரைடு செய்ய முயற்சிப்பது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
// class Daughter extends Father {
//     public work(hours: number): number { return hours; }
// }
