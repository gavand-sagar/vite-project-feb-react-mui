
const item = [6, 7, 8]

// const array = [1, ...item] //  [1, 6,7,8]

const array = [...item, 9]
// shortcut for push and clone at the same time
//

console.log(array)
console.log('array.length', array.length)

