// TypeScript closures provide type safety for captured variables, ensuring strict type bounds.
// Captured variables-களுக்கு வகை பாதுகாப்பை வழங்கி, TypeScript closures இயங்குகிறது.
function createCounter() {
    let count: number = 0; // Lexically captured typed variable

    return {
        increment: (): number => {
            count += 1;
            return count;
        },
        getValue: (): number => {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Count 1:", counter.increment());
// Expected Output: Count 1: 1
// எதிர்பார்க்கப்படும் வெளியீடு: Count 1: 1

console.log("Count 2:", counter.increment());
// Expected Output: Count 2: 2
// எதிர்பார்க்கப்படும் வெளியீடு: Count 2: 2

// Attempting to reassign captured variables with invalid types is blocked by compiler check.
// பிடிபட்ட மாறிகளுக்கு (captured variables) தவறான தரவு வகையை ஒதுக்கீடு செய்ய முயல்வது தடுக்கப்படும்.
// count = "invalid";
