let object = { a: 1, b: 2, c: 3, d: 4 }

function valueFn(value) {
    return value * 10
}

function mappedValues(obj, fn) {
  let mapped = {}

    Object.keys(obj).forEach((key) => {
        mapped[key] = fn(obj[key])
      })

   return mapped
}

console.log(mappedValues(object, valueFn))