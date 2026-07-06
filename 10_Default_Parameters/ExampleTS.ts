// TypeScript supports typed default parameters, enforcing type safety on the default value too.
// TypeScript, இயல்புநிலை மதிப்பிற்கும் வகை பாதுகாப்பை உறுதி செய்யும் typed default parameters-ஐ ஆதரிக்கிறது.
function orderCoffee(size: string, milkType: string = "Regular Milk"): string {
    return size + " coffee with " + milkType;
}

console.log("Order 1:", orderCoffee("Large", "Oat Milk"));
// Expected Output: Order 1: Large coffee with Oat Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 1: Large coffee with Oat Milk
