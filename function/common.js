export function countNegativeValue(arr) {
  const filteredArr = arr.filter((item) => item < 0);
  return filteredArr.length;
}
