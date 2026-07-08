// TypeScript introduces native "enum" to declare a set of named constants.
// குறிப்பிட்ட மாறிலி மதிப்புகளின் தொகுப்பை உருவாக்க TypeScript-ல் "enum" வசதி அறிமுகப்படுத்தப்பட்டுள்ளது.
enum TrafficLight {
    RED,
    YELLOW,
    GREEN
}

function getAction(state: TrafficLight): string {
    if (state === TrafficLight.RED) {
        return "Stop";
    } else if (state === TrafficLight.YELLOW) {
        return "Slow Down";
    } else if (state === TrafficLight.GREEN) {
        return "Go";
    }
    return "Invalid State";
}

console.log("Light Action:", getAction(TrafficLight.RED));
// Expected Output: Light Action: Stop
// எதிர்பார்க்கப்படும் வெளியீடு: Light Action: Stop

// Passing values outside the Enum options is blocked during compilation.
// Enum உறுப்புகளைத் தவிர வேறு ஏதேனும் மதிப்புகளை அனுப்ப முயன்றால் கம்பைலரால் தடுக்கப்படும்.
// getAction(99);
