// Last updated: 17:14:29 15/4/2026
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const checkEmptyObj = Object.keys(obj).length
    if (checkEmptyObj === 0) {
        return true
    }
    return false
};