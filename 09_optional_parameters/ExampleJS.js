// JavaScript treats all parameters as optional by default, requiring manual fallback checks.
// JavaScript, இயல்பாகவே அனைத்து அளபுருக்களையும் விருப்பத்தேர்வாகக் கருதுகிறது, இதனால் கையேடு சரிபார்ப்புகள் தேவைப்படுகிறது.
function buildBurger(bunType, pattyType, extraCheese) {
    var desc = bunType + " bun with " + pattyType + " patty";
    
    // Manual check is needed because extraCheese can be undefined.
    // extraCheese undefined-ஆக இருக்கக்கூடும் என்பதால் கையேடு சரிபார்ப்பு தேவைப்படுகிறது.
    if (extraCheese) {
        desc += " and extra cheese";
    }
    return desc;
}

console.log("Burger 1:", buildBurger("Sesame", "Chicken", true));
// Expected Output: Burger 1: Sesame bun with Chicken patty and extra cheese
// எதிர்பார்க்கப்படும் வெளியீடு: Burger 1: Sesame bun with Chicken patty and extra cheese

console.log("Burger 2:", buildBurger("Sesame", "Beef"));
// Expected Output: Burger 2: Sesame bun with Beef patty
// எதிர்பார்க்கப்படும் வெளியீடு: Burger 2: Sesame bun with Beef patty
