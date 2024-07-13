const DEFAULT = 0
let counter = 0

// window.addEventListener('DOMContentLoaded', function() {
//     this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked())
//     this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked())
//     this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked())
// })

$(function() {
    $('#btnDecr').on('click',() => onDecreaseClicked())
    })

$(function() {
    $('#btnReset').on('click',() => onResetClicked())
    })

$(function() {
    $('#btnIncr').on('click',() => onIncreaseClicked())
    })


/**
 * Actions taken after the 'Decrease' button
 * was clicked. Actions include decrease the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after the 'Reset' button
 * was clicked. Actions include reset the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Actions taken after the 'Increase' button
 * was clicked. Actions include increase the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

//Model

/**
 * Decreases the counter by one and renders to UI.
 */
function decreaseCounter() {
    counter--
    showCounter()
}

/**
 * Resets the counter and renders to UI
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}

/**
 * Increases the counter by one and renders to UI
 */
function increaseCounter() {
    counter++
    showCounter()
}

/**
 * Assigns the counter to the corresponding UI Element
 * Ands gives styling accordingly
 */
function showCounter() {
    //Data binding
    const counterDOM = document.querySelector('#counter')
    counterDOM.textContent = counter

    //Styling
    styleCounterElement(counterDOM)
}

function styleCounterElement(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter === 0)

    // if (counter == 0) {
    //     document.querySelector('#counter').style.color = "black"
    // } else if (counter > 0) {
    //     counterDOM.style.color = "green"
    // } else if (counter < 0) {
    //     counterDOM.style.color = "red"
}

$(function() {
    counterWord()
})

function counterWord() {
    $('#counterWord').html('Counter')
}

$(function() {
    buttonNameReset()
})

function buttonNameReset() {
    $('#btnReset').html('Reset')
}

$(function() {
    buttonNameDecrease()
})

function buttonNameDecrease() {
    $('#btnDecr').html('Decrease')
}

$(function() {
    buttonNameIncrease()
})

function buttonNameIncrease() {
    $('#btnIncr').html('Increase')
}