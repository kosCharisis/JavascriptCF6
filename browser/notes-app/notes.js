const DayGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthGR= ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαίου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(printGRDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertController(document.querySelector('#inputNote').value.trim())
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if (e.Key === 'Enter') {
            onInsertController(this.value.trim())
        }
    })
})

function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthStr = monthGR[month]

    let dateStr = `${dayStr}, ${date}  ${monthStr}  ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:
                   ${(minutes < 10) ? '0' : ''}${minutes}:
                   ${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr
}

/**
 * Controller for insert button clicked.
 * 
 * @param {String} data 
 */
function onInsertController(data) {
    insertNote(data)
    reset()
}

