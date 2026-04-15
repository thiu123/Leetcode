// Last updated: 17:14:36 15/4/2026
var createCounter = function(init) {
    let counter = init; 

    return {
        increment() { 
            counter++;
            return counter;
        },
        decrement() { 
            counter--;
            return counter;
        },
        reset() { 
            counter = init; 
            return counter;
        }
    };
};

const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset());     
