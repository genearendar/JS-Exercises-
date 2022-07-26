// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these
// into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const cleanRoom = (arr) => {
  // Sorting the array and putting strings after numbers
  const sorted = arr.sort((a, b) => {
    if (typeof a === "number" && typeof b === "string") {
      return -1
    } else if (typeof b === "number" && typeof a === "string") {
      return 1
    }
    return a - b
  })
  let finalArr = []

  for (let i = 0; i < arr.length; i++) {
    // Skipping the repeating items to only filter them once
    while (arr[i] === arr[i - 1] && arr[i] > 0) {
      i++
      // Avoinding exceeding the arr.length if the last item is a part of a repeated sequence
      if (i === arr.length) {
        return finalArr
      }
    }
    let filtered = sorted.filter((val) => {
      return val === arr[i]
    })
    // pushing either the original array's item (if single) or the filtered array to the finalArr
    if (filtered.length === 1) {
      finalArr.push(arr[i])
    } else {
      finalArr.push(filtered)
    }
  }
  return finalArr
}
cleanRoom([1, 2, 4, 591, "2", 392, 391, 2, 5, 10, 2, "1", 1, "1", 20, 20, "2"])

cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20])
