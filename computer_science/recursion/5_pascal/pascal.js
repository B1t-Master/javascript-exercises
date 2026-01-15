const pascal = function (n, array = []) {
  if (n === 1) {
    array.push(1);
    return array;
  }
  pascal(n - 1, array);

  array.push(0);
  array.unshift(0);
  array.map((element, index, array) => {
    if (index === array.length - 1) return;
    array[index] = array[index] + array[index + 1];
  });

  return array.filter((index) => index != 0);
};

// Do not edit below this line
module.exports = pascal;
