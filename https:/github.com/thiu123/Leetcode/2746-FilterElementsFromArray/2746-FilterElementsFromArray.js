// Last updated: 17:14:37 15/4/2026
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}