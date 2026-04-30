const pascal = function (layer) {
  const triangle = [];
  if (layer === 1) {
    triangle.push(layer);
    return triangle;
  }
  const pascalled = pascal(layer - 1);
  for (let i = 0; i <= layer - 1; i++) {
    if (i === 0 || i === layer) triangle.push(1);
    else {
      triangle.push(pascalled[i - 1] + (pascalled[i] || 0));
    }
  }
  return triangle;
};

// Do not edit below this line
module.exports = pascal;
