// JavaScript functions do not enforce parameter types or count, allowing any input at runtime.
// JavaScript functions, அளபுருக்களின் வகைகளையோ அல்லது எண்ணிக்கையையோ கட்டாயப்படுத்துவதில்லை.
function prepareJuice(fruit, sugarQuantity) {
    var sugar = sugarQuantity || 1; // Default fallback in JS
    return fruit + " Juice with " + sugar + " spoons of sugar";
}

console.log("Juice 1:", prepareJuice("Apple", 2));
// Expected Output: Juice 1: Apple Juice with 2 spoons of sugar
// எதிர்பார்க்கப்படும் வெளியீடு: Juice 1: Apple Juice with 2 spoons of sugar

// Missing arguments result in undefined values being used in operations.
// விடுபட்ட அளபுருக்கள் செயல்பாடுகளின் போது undefined மதிப்புகளாக மாற்றப்படும்.
console.log("Juice 2:", prepareJuice());
// Expected Output: Juice 2: undefined Juice with 1 spoons of sugar
// எதிர்பார்க்கப்படும் வெளியீடு: Juice 2: undefined Juice with 1 spoons of sugar
