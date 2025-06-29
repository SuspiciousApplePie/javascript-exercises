const removeFromArray = function(numbers, ...removals) {
    for (let i = 0; i < numbers.length; i++) {
        if (removals.includes(numbers[i])) {
            numbers.splice(i, 1);
            i--;
        }
    }
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
