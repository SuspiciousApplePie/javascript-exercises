const palindromes = function (word) {
 arr = word.replaceAll(/[^A-Za-z0-9/s]/g, '').toLowerCase().split('');
 let reverse = arr.reduceRight((acc, curr) => {
    acc.push(curr);
    return acc;
 }, [])
 return reverse.join('') === arr.join('');
};

// Do not edit below this line
module.exports = palindromes;
