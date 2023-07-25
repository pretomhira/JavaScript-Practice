export default function countDuplicate(arr) {
  const countValue = {};

  const test = arr.map((value) => {
    countValue[value] = (countValue[value] || 0) + 1;
  });

  const arryObject = Object.entries(countValue).map(([key, value]) => ({
    [key]: value,
  }));

  return arryObject;
}
