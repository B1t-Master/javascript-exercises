const contains = function (object, value) {
  if (object === null) return false;

  let items = Object.values(object);
  if (items.includes(value)) return true;

  return items
    .filter((key) => typeof key === "object" && key !== null)
    .some((e) => contains(e, value));
};

// Do not edit below this line
module.exports = contains;
