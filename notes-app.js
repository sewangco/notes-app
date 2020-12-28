let notes = getSavedNotes()
// DOM Document Object Model

// Add a new element

// const newParagraph= document.createElement('p')
// newParagraph.textContent = "This is a new element"
// document.querySelector('body').appendChild(newParagraph)

const filters = {
    searchText: '',
    sortBy: 'byEdited',
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click',(e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title:'',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    // renderNotes(notes,filters)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

// document.querySelector('#name-form').addEventListener('submit', (e)=>{
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value =''
// })

document.querySelector('#filter-by').addEventListener('change',(e) => {
    filters.sortBy= e.target.value
    renderNotes(notes,filters)
})

window.addEventListener('storage',(e) => {
    if(e.key === 'notes'){
        note = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})


