let [a, b] = [1, 2] // destructuring assignment

console.log("a: ", a)
console.log("b ", b)

let [c, d] = [10, 20]  // destructuring assignment
[c, d] = [d, c]      // destructuring assignment and swap

const user = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

let { firstname, lastname } = user
// let { firstname: first, lastname: last } = user 
console.log("firstname: " + firstname)
consloge.log("Lastname: " + lastname)
