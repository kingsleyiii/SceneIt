document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
    });
function renderMovies(movieArray) {
    let movieHtmlArray = movieArray.map(currentMovie => {
       return `<div>
       <h2>${currentMovie.Title}</h2>`
    })
    return movieHtmlArray.join(``)

}