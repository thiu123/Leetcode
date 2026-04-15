// Last updated: 17:14:31 15/4/2026
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkArray = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkArray.push(arr.slice(i, i + size));
    }
    return chunkArray
};
