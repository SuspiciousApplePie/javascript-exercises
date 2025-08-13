
const findTheOldest = function(arr) {
    return arr.reduce((acc, curr) => {
        if (!curr['yearOfDeath']) curr['yearOfDeath'] = 2025;
        let age = curr['yearOfDeath'] - curr['yearOfBirth'];
        if (age > acc['age']) {
            acc['name'] = curr['name']
            acc['age'] = age;
        }
        return acc;
    }, 
    {age: 0});
};
// Do not edit below this line
module.exports = findTheOldest;
