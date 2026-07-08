// TypeScript uses "?" to explicitly mark optional parameters. They must come after required ones.
// TypeScript, விருப்ப அளபுருக்களைக் குறிக்க "?" குறியீட்டைப் பயன்படுத்துகிறது. இவை தேவையானவற்றுக்குப் பின் வர வேண்டும்.
function buildBurger(bunType: string, pattyType: string, extraCheese?: boolean): string {
    var desc = bunType + " bun with " + pattyType + " patty";
    
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

// Omitting required parameters is blocked during compilation.
// தேவையான அளபுருக்களை விட்டுவிடுவது கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
// buildBurger("Sesame");
