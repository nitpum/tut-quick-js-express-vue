const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10]

const totalNumber = myArray.reduce(function (total, currentNumber) {
  return total + currentNumber
}, 0)

console.log(totalNumber)
