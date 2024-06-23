const arr = [[[1, 2], [2, 3, 3]], ["a", "a","g"]]

unnested = arr.reduce(function(a, b) {
    return a.concat(b)
}, []);

console.log (unnested)

unested1 = arr.reduce((a, b) => a.concat(b), [])

console.log (unested1)

function flatten(index) {
    let flattened = [];
    for(let i = 0; i < index.length; i++) {
        if(Array.isArray(index[i])) {
            flattened = flattened.concat(flatten(index[i]))
        } else {
            flattened.push(index[i])
        }
    }
    return flattened;
}
console.log (flatten(arr))

function flatten1(index) {
    let flattened = [];
    for(let i = 0; i < index.length; i++) {
        if(Array.isArray(index[i])) {
            flattened = flattened.concat(flatten(index[i]));
        } else {
            flattened.push(index[i])
        }
    }
    return flattened
}
console.log (flatten1(arr))