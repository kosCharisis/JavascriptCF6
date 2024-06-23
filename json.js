const user = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

const userJSONString = JSON.stringify(user)
console.log(userJSONString)
const userJSobj = JSON.parse(userJSONString)
console.log(userJSobj)