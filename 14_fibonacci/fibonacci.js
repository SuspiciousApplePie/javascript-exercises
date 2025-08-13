const fibonacci = function(num) {
    num = Number(num);
    let prev = 0;
    let curr = 1;
    let total = 0; // Accumulator
    if (num < 0) return 'OOPS';
    if (num === 1) return curr;
    for (i = 2; i <= num; i++) {
        total = curr + prev;
        prev = curr;
        curr = total;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
