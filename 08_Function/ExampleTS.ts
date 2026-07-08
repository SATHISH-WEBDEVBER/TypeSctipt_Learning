// TypeScript enforces parameter types, return types, optional elements (?), and default values (=).
// TypeScript, அளபுரு வகைகள், திரும்பும் மதிப்பு வகை, விருப்ப கூறுகள் (?) மற்றும் இயல்புநிலை மதிப்புகளை (=) கட்டாயமாக்குகிறது.
function prepareJuice(fruit: string, sugarQuantity: number = 1): string {
    return fruit + " Juice with " + sugarQuantity + " spoons of sugar";
}

console.log("Juice 1:", prepareJuice("Apple", 2));
// Expected Output: Juice 1: Apple Juice with 2 spoons of sugar
// எதிர்பார்க்கப்படும் வெளியீடு: Juice 1: Apple Juice with 2 spoons of sugar

// TypeScript blocks invalid call arguments and missing required parameters during compilation.
// தவறான உள்ளீடுகளையும் மற்றும் தேவையான அளபுருக்கள் விடுபடுவதையும் கம்பைலர் நேரத்திலேயே TypeScript தடுக்கிறது.
// prepareJuice();
