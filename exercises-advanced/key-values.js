const arr = [{key1: '1', key2: "value1"}, {key1: 2, key2: 2}, {key1: 3, key2: 3}, {key1 : 4, key2 : 4}]
const arr1 = ["value1", 4]

function keyValues(obj, key) {
  let set = [];
  for (let i = 0; i < key.length; i++) {
    set = obj.filter(element => element.key2 === key[i])//.map(element => element)
    console.log(set)
    }
    return arr1.length
  }

console.log(keyValues(arr, arr1))
