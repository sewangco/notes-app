const notes = getSavedNotes()
// DOM Document Object Model

// Add a new element

// const newParagraph= document.createElement('p')
// newParagraph.textContent = "This is a new element"
// document.querySelector('body').appendChild(newParagraph)

const filters = {
    searchText: ''
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click',function(e){
    notes.push({
        id: uuidv4(),
        title:'',
        body:''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value =''
// })

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})