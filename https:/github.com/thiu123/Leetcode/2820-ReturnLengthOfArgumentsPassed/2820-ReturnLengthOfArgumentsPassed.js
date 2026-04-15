// Last updated: 17:14:35 15/4/2026
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...arg) {
    return arg.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */