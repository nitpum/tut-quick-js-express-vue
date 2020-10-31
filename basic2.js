var userId = 12
userId = 13
userId = 'Hello'

const userId = 12

let userId = 12

/**
 * Function
 */

function getUser(a, b) {
  return a + b
}

const getUser = function (a, b) {
  return a + b
}

const getUser = (a, b) => {
  return a + b
}

const plus = (a, b) => a + b

/**
 * Array & Object
 */

const myArray = [1, 2, 3]
const user = {
  id: 12,
  name: 'Nitipoom',
}

myArray[0]
user.id
user.id = 123123
user['id']
user['id'] = 123123

let myArray2 = [
  1,
  2,
  3,
  {
    id: 12,
    name: 'Nitipoom',
    list: [1, 2, 3, 4, 5],
  },
]

let id = 123
const newUser = {
  id: id,
}

const newUser2 = {
  id,
}

// .forEach
// .map
// .reduce
// .filter

for (var i = 0; i < myArray.length; i++) {
  let item = myArray[i]

  myArray[i] = myArray[i] + 1
}

let myArray = [1, 2, 3, 4]
myArray.forEach((item) => {})

myArray.map((item) => {
  item = item + 1
  return item
})

myArray.filter((item) => {
  return item % 2 == 0
})
