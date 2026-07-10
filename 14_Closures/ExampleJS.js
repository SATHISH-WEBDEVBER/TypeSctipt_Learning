// JavaScript closures allow inner functions to access outer scope variables even after execution ends.
// JavaScript closures, வெளிப்புற function இயங்கி முடிந்த பின்பும் அதன் variables-ஐ அணுக அனுமதிக்கிறது.
function createCounter() {
    var count = 0; // Captured variable in lexical scope

    return {
        increment: function () {
            count += 1;
            return count;
        },
        getValue: function () {
            return count;
        }
    };
}

var counter = createCounter();
console.log("Count 1:", counter.increment());
// Expected Output: Count 1: 1
// எதிர்பார்க்கப்படும் வெளியீடு: Count 1: 1

console.log("Count 2:", counter.increment());
// Expected Output: Count 2: 2
// எதிர்பார்க்கப்படும் வெளியீடு: Count 2: 2
