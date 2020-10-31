let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = []

// for (var i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 == 0) {
//     newArray.push(myArray[i])
//   }
// }

newArray = myArray.filter((item) => {
  return item % 2 == 0
})

console.log(newArray)
// myArray.forEach((item) => {
//   console.log(item)
// })
