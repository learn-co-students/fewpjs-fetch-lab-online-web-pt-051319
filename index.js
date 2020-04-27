function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  
    .then(resp => resp.json())
    .then(json => renderBooks(json))
  }

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h4 = document.createElement('h4')
    h4.innerHTML = `<h4>${book.name}</h4>`
    main.appendChild(h4)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
