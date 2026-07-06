// JavaScript originally required manual checks or logical OR operators to assign default values.
// ஆரம்பத்தில் JavaScript-ல் இயல்புநிலை மதிப்புகளை வழங்க கையேடு சோதனைகள் அல்லது logical OR தேவைப்பட்டது.
function orderCoffee(size, milkType) {
    var milk = milkType || "Regular Milk";
    return size + " coffee with " + milk;
}

console.log("Order 1:", orderCoffee("Large", "Oat Milk"));
// Expected Output: Order 1: Large coffee with Oat Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 1: Large coffee with Oat Milk
