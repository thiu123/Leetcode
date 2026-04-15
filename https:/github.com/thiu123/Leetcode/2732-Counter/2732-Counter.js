// Last updated: 17:14:41 15/4/2026
/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(start) {
  let count = start;
  return function() {
    return count++;
  }
}

const counter = createCounter(10);
console.log(counter()); 
console.log(counter()); 
console.log(counter());
