const totalIntegers = function (numbers) {
  if (typeof numbers !== "object") return;
  if (!Array.isArray(numbers)) numbers = Object.values(numbers);
  return numbers.reduce((totalAmountOfIntegers, currentInteger) => {
    if (Number.isInteger(currentInteger)) ++totalAmountOfIntegers;
    if (
      Array.isArray(currentInteger) ||
      (typeof currentInteger === "object" &&
        !Array.isArray(currentInteger) &&
        currentInteger !== null)
    )
      totalAmountOfIntegers += totalIntegers(currentInteger);
    return totalAmountOfIntegers;
  }, 0);
};

// Do not edit below this line
module.exports = totalIntegers;
