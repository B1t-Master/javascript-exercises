//heavily used assistance needs to be looked into at a later time

const permutations = function (array, tempArray = [], resultArray = []) {
  // resultArray.push(array);
  if (!array.length) resultArray.push([...tempArray]);
  // if (array.length === 1) return [array];

  for (let i = 0; i < array.length; i++) {
    const newArray = array.filter((n, index) => index !== i);
    tempArray.push(array[i]);
    permutations(newArray, tempArray, resultArray);
    tempArray.pop();
  }

  return resultArray;
};

// Do not edit below this line
module.exports = permutations;
