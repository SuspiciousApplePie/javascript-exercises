const contains = function (obj, val) {
  for (let subObj of Object.values(obj)) {
    if (Object.is(val, subObj)) return true;
    if (typeof subObj === "object" && subObj !== null) {
      const isContain = contains(subObj, val);
      if (isContain) return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
