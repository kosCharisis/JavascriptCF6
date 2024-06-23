const arr = [1, 2,"a", 2, 3, 3, , , ,"a", "a","g"]

function removeDuplicates(index) {
    let pure = [];
    index.forEach(element => {
        if (!pure.includes(element)) {
            pure.push(element)
        }
    });
    return pure
}
console.log(removeDuplicates(arr))