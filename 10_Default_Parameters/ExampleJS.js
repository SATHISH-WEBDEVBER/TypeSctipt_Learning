// JavaScript originally required manual checks or logical OR operators to assign default values.
// ஆரம்பத்தில் JavaScript-ல் இயல்புநிலை மதிப்புகளை வழங்க கையேடு சோதனைகள் அல்லது logical OR தேவைப்பட்டது.
function orderCoffee(size, milkType) {
    var milk = milkType || "Regular Milk";
    return size + " coffee with " + milk;
}

console.log("Order 1:", orderCoffee("Large", "Oat Milk"));
// Expected Output: Order 1: Large coffee with Oat Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 1: Large coffee with Oat Milk

// ES6 introduced native default parameter syntax in JavaScript.
// ES6-ல் JavaScript-ல் நேரடி இயல்புநிலை அளபுரு (default parameter) முறை அறிமுகப்படுத்தப்பட்டது.
function orderCoffeeES6(size, milkType = "Regular Milk") {
    return size + " coffee with " + milkType;
}

console.log("Order 2:", orderCoffeeES6("Medium"));
// Expected Output: Order 2: Medium coffee with Regular Milk
// எதிர்பார்க்கப்படும் வெளியீடு: Order 2: Medium coffee with Regular Milk
