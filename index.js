const movieContainer = document.getElementById("movies-container")
const myForm = document.getElementById("search-form")



function renderMovies(movieArray) {
    // console.log("hello")
    let movieHtmlArray = movieArray.map(currentMovie => {
        return `<div>
        <h2>${currentMovie.Title}</h2>
        </div>`
    })
    return movieHtmlArray.join(``)
}

document.addEventListener('DOMContentLoaded', function() {
    myForm.addEventListener("submit", e => {
        e.preventDefault();
        console.log("hello")
        // code here will execute after the document is loaded
        movieContainer.innerHTML = renderMovies(movieData)
        });

})


