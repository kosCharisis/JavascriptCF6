let fruits = {apples: 5, bananas: 10, peach: 7}

function objToUpper(obj) {
    let fruit = Object.entries(obj)  
    let capsFruit = fruit.map((element) => [element[0].toUpperCase(), element[1]])
    let capsFruits = Object.fromEntries(capsFruit);
    
    return capsFruits
}

console.log(objToUpper(fruits))