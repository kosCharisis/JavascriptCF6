function printText() {
    const inputDom = document.getElementById('inputText')
    const inputText = inputDom.value

    const parDom = document.getElementById('helloText')
    parDom.innerHTML = inputText

}