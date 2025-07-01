const sumAll = function(a, b) {
    // Put the arguments in a list.
    const args = [...arguments];
    // Check if item in list is not an integer or is a negative number.
    if (args.some(item => (!Number.isInteger(item) ||
                            item < 0))) 
                            return 'ERROR';
    // Sort args from ascending order.                
    const compared = args.sort((a, b) => a - b);
    let sum = 0;
    // Calculate the total
    for (let i = compared[0]; i <= compared[1]; i++) 
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
