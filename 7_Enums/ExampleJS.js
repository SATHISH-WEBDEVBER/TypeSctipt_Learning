// JavaScript does not have native enum support, so we often use objects with freeze to mimic them.
// JavaScript-ல் enum ஆதரவு கிடையாது, எனவே நாம் freeze செய்யப்பட்ட objects-ஐப் பயன்படுத்துகிறோம்.
var TrafficLight = Object.freeze({
    RED: 0,
    YELLOW: 1,
    GREEN: 2
});

function getAction(state) {
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

// Without strict type protection, someone can pass an arbitrary number or string.
// வகை பாதுகாப்பு இல்லாததால், யார் வேண்டுமானாலும் எந்தவொரு எண்களையோ அல்லது உரையையோ அனுப்பலாம்.
console.log("Custom Input Action:", getAction(99));
// Expected Output: Custom Input Action: Invalid State
// எதிர்பார்க்கப்படும் வெளியீடு: Custom Input Action: Invalid State
