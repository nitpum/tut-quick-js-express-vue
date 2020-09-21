/**
 *
 * Variable
 *
 */
var my_var = 12
my_var = 'hello'

const my_con = 12
my_con = 'hello'

let my_let = 12
my_let = 'hello'

/**
 *
 *
 * Casing
 *
 */
// Case name
PascalCase
camelCase
snake_case
UPPERCASE
lowwercase

// In js everything use camelCase

/**
 *
 *
 * GLobal
 *
 */
// Global scope
var location = 'home'

// Local scope
function fName() {
  const house = ''
  let home = ''
}

// Function
function greeting() {
  return 10
}

const bye = function () {}

// Function type
function findMyHome() {
  return 'hello'
}

const goodbye = () => {
  return 'bye'
}

// Arrow function
function getFirstname(user) {
  return user.fisrtname
}

const getFirstNameArrow = (user) => user.fisrtname

/**
 *
 *
 * Array & Object
 *
 */
const myArray = [1, 2, 3]
const myObject = { id: 0, firstName: 'nitpum' }
const myObjectSpecial = { 'first-name': 'nitpum' }
const myObjectInObject = { id: 0, children: { firstname: 'asd', asd: '' } }
const myArrayInObject = { id: 0, list: [1, 2, 3, 4] }
const myObjectInArray = [
  { id: 0, firstname: 'baba' },
  { id: 1, firstname: 'foor' },
]

// Access Array and object
myArray[0] // Index
myObject.firstName
myObject.id
myObjectInArray[1].firstname // Access object in array
myArrayInObject.list[1] // Access array in object
myObjectSpecial['first-name'] // Access object with string key

//
// Object magic
//

const firstName = 'nitpum'
const id = 123
const myObject = { firstName: firstName } // traditional way
const myObject = { firstName } // magic
const myObject = { id: id } // traditional way
const myObject = { id } // magic

/**
 *
 *
 * Condition
 *
 */
if (true) {
} else {
}

// True condition
if (firstName) {
  // True when
  // firstName != ''
  // firstName != null
  // firstName != undefiend
}

function getName() {
  if (firstName != '') {
    return firstName
  } else {
    return nickName
  }
}

// Short if
const getName = () => (firstName != '' ? firstName : nickName)
const getName = () =>
  firstName != '' ? firstName : lastName != '' ? lastName : nickName
const myName = firstName != '' ? firstName : nickName

// Short circuit
// Traditional function
function getName() {
  if (firstName) {
    return firstName
  } else {
    return 'noName'
  }
}

// Short circuit
const getName = () => firstName || 'noName' // return noName if firstName is false
const myName = firstName || 'noName'
const getName = () => firstName && nickName // return Nickname if firstName is true
const myName = firstName && nickName
const fullname = firstName || (nickName && lastName)

/**
 *
 *
 * Foreach, Map, Filter, Reduce
 *
 */
const myArray = [1, 2, 3, 4, 5]
for (let i = 0; i < myArray.length; i++) {
  // do something
}

// forEach
myArray.forEach(function (value) {
  // do something
})
myArray.forEach((value) => console.log(value))
myArray.forEach(function (value, index) {
  console.log(index + ': ' + value)
})

myArray.forEach(function (value, index) {
  myArray[index] = value * 2
})

// Map
myArray.map(function (value) {
  return value * 2
})
myArray.map((value) => value * 2)

const mutiply = (value) => value * 2
myArray.map(mutiply)
myArray2.map(mutiply)

// filter
myArray.filter(function (value) {
  if (value % 2 == 1) {
    return true
  }
  return false
})
myArray.filter((value) => value % 2 == 1)

const isOddNumber = (value) => value % 2 == 1
myArray.filter(isOddNumber)

//  Reduce
const myArray = [1, 2, 3, 4, 5, 6]
myArray.reduce(function (total, currentNumber) {
  return total + currentNumber
}, 0)
myArray.reduce((total, currentNumber) => total + currentNumber)

const plusNumber = (total, currentNumber) => total + currentNumber
myArray.reduce(plusNumber, 0)

// Chaining
myArray
  .map(convertNameToThai)
  .filter(genderMale)
  .filter(ageYounger)
  .reduce(countAge)

/***
 *
 *
 * Bonus: Arrow function
 *
 */
const myArrow = () => 2131
const myArray = () => {
  // if () {
  //   ...
  // }

  return 123
}

// Arrow function return object
const myArrow = (user) => ({
  id: 0,
  firstName: user.firstName,
})
