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
export function removeFalsy(arr) {
  const truthyValue = arr.filter(Boolean);
  return truthyValue;
}
