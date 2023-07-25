// this function count every value from an array
// return array of object that show how many times
// a value is stroed in that array
export function countDuplicate(arr) {
  const countValue = {};

  const test = arr.map((value) => {
    countValue[value] = (countValue[value] || 0) + 1;
  });

  const arryObject = Object.entries(countValue).map(([key, value]) => ({
    [key]: value,
  }));

  return arryObject;
}

// this function remove falsy value from the array
// and return an array of truthy values
export function removeFalsy(arr) {
  const truthyValue = arr.filter(Boolean);
  return truthyValue;
}

// this function take a value and return as a boolean
export function makeBoolean(value) {
  return !!value;
}
