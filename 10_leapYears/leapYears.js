const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isFourHundred = year % 400 === 0;
    if ((divisibleByFour 
        && !isCentury) 
        || isFourHundred) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
