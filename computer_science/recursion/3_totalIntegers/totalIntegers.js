const totalIntegers = function (dataStructure) {
  let total = 0;
  if (!(typeof dataStructure === "object" && dataStructure !== null))
    return undefined;
  array = Object.values(dataStructure);
  array
    .filter(
      (item) =>
        (typeof item === "object" && item !== null) || Number.isInteger(item)
    )
    .map((item) => {
      if (Number.isInteger(item)) return total++;
      else return (total += totalIntegers(item));
    }, total);
  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
