const arr = [1, 2, 3, 4, 5]

// stack - LIFO
arr.push(6)
let popped = arr.pop()

console.log(popped)

//queues - FIFO

const bankQueue = [1, 2, 3, 4, 5 ]
bankQueue.push(6)
let first = bankQueue.shift()

//insert front
const arr3 = [1, 2]
arr3.unshift(0)