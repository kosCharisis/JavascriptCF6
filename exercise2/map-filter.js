let arr = [1, 2, 2, 3, -3, 7, 78, 67, -88, 8, 88]

let mapped = arr.map(el => el * 2)
console.log(mapped)

let filtered = arr.filter(el => el % 2 === 0)
console.log(filtered)

let isOnePositive = arr.some(el => el > 0)
console.log(isOnePositive)

let isAllPositive = arr.every(el => el > 0)
console.log(isAllPositive)