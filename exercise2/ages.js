const people = [{name: 'Alice', lastname: 'A.', age: 30}, {name: 'Bob', lastname: 'B.', age: 25}, {name: 'Charlie', lastname: 'C.', age: 35}, {name: 'Daniel', lastname: 'D.', age: 40},]

let filtered = people.filter(el => el.age <= 30)
console.log(filtered)

function mapPeople(people) {
    people.map(el => {
        let { name, age } = el
        console.log(name, age)
    })
}
 
mapPeople(people)

let mapped = people.map(el => ({"name":el.name, "age":el.age}))
console.log(mapped)