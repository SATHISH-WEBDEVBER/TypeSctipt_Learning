// let counterValue = 0;

// function incrementCounter() {
//     counterValue++;
// }

// function getCounterValue() {
//     return counterValue;
// }

// incrementCounter();
// console.log(getCounterValue());


// incrementCounter();
// console.log(getCounterValue());

function createCounter() {
    let counterValue = 0;

    return {
        increment: function(){
            counterValue++;
        },
        getValue: function() {
            return counterValue;
        }
    }
}

const counter1 = createCounter();
counter1.increment();   
console.log(counter1.getValue());