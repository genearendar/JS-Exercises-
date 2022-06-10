// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

function findSum(arr, num) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    // only using the items that are less than the target
    if (arr[i] < num) {
      // iterating only through the rest of the array since the previous items were already
      for (let i2 = i + 1; i2 < arr.length; i2++) {
        if (arr[i] + arr[i2] === num) {
          result = [arr[i], arr[i2]]
          return result
        }
      }
    }
  }
  return "No suitable numbers"
}
