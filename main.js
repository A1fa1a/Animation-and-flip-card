// let names = function (...name) {
//   return `String [${name.join("], [")}] => Done !`;
// }

let names = (...name) => { return `String [${name.join("], [")}] => Done !`; }

console.log(names("abdo", "saad", "fatma"))

console.clear()

let numbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => { return (one + two) + nums[0] }

let calc = function (one, two, ...nums) {
  return (one + two) + nums[0]
}

console.log(calc(10, numbers[1], numbers[0]))