// TypeScript supports typed default parameters, enforcing type safety on the default value too.
// TypeScript, இயல்புநிலை மதிப்பிற்கும் வகை பாதுகாப்பை உறுதி செய்யும் typed default parameters-ஐ ஆதரிக்கிறது.
function orderCoffee(size: string, milkType: string = "Regular Milk"): string {
    return size + " coffee with " + milkType;
}

console.log("Order 1:", orderCoffee("Large", "Oat Milk"));
// Expected Output: Order 1: Large coffee with Oat Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 1: Large coffee with Oat Milk

// The compiler ensures that any explicitly passed argument matches the expected datatype.
// கடத்தப்படும் வெளிப்படையான மதிப்பு எதிர்பார்க்கும் தரவு வகையுடன் பொருந்துவதை கம்பைலர் உறுதி செய்கிறது.
console.log("Order 2:", orderCoffee("Medium"));
// Expected Output: Order 2: Medium coffee with Regular Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 2: Medium coffee with Regular Milk

// Passing an invalid datatype is blocked during compilation.
// தவறான தரவு வகையைக் கடத்துவது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
// orderCoffee("Small", 123);
