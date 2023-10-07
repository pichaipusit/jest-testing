export function countNegativeValue(arr) {
  const filteredArr = arr.filter((item) => item < 0);

  return filteredArr.length;
}

export function clearUpChaosToWord(a, b) {
  const firstWord = a.replace("%", "");
  const secondArr = b.replace("%", "").split("");
  const secondWord = secondArr.reverse().join("");

  return firstWord[0].toUpperCase() + firstWord.slice(1) + secondWord;
}
