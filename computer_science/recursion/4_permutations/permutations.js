const permutations = function (numbers) {
  let result = [];
  if (!numbers.length) {
    result.push([]);
    return result;
  }
  for (let i = 0; i <= numbers.length - 1; i++) {
    const numberCopy = numbers.slice();
    numberCopy.splice(i, 1);
    const permutated = permutations(numberCopy);
    permutated.forEach((index) => {
      let permutatedList = [];
      console.log(`push the ${numbers[i]} to array`);
      permutatedList.push(numbers[i]);
      console.log(`combine ${numbers[i]} and ${index} to the array`);
      permutatedList = permutatedList.concat(index);
      result.push(permutatedList);
    });
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;
