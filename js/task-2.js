// ====================== TASK 2 ======================

console.log("====================== TASK 2 ======================");

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// Вариант 1
// function makeArray(firstArray, secondArray, maxLength) {
//   const arr = [];
//   const concatArr = firstArray.concat(secondArray);
//   for (let i = 0; i < concatArr.length && i < maxLength; i++) {
//     arr.push(concatArr[i]);
//   }
//   return arr;
// }

// Вариант 2
function makeArray(firstArray, secondArray, maxLength) {
  const concatArr = firstArray.concat(secondArray);

  if (concatArr.length > maxLength) {
    return concatArr.slice(0, maxLength);
  } else {
    return concatArr;
  }
}
