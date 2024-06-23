const arr = [1, 2,"a", 78, 7, 8, 88, "e"]
const arr1 = [1, "e", 2,"a","g", 9, 10, 12, 8]

function commonElements(arr1, arr2) {
    let common = [];
    
    arr1.forEach(element => {
        if (arr2.includes(element)) {
            common.push(element)
        }
    })

    return common
}


console.log(commonElements(arr,arr1))