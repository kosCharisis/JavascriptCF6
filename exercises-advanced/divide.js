const arr = [1, 2,"a", 2, 3, 3, 7, 78, 67,"a", 88, 8, 88,"a","b","a","g"]
const arr1 = [1, 2,"a","g"]

function divide (index, division) {
    let arr2 = [];
    let count = index.length / division.length
    for (let i = 0; i < count; i++) {
        arr2 = arr.splice(0, arr1.length)
        console.log(arr2)
    }
    return count
}

console.log(divide(arr, arr1))