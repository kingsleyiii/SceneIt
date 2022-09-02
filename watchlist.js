const movieContainer = document.getElementById("movies-container")

function renderMovies(movieArray) {
    // console.log("hello")
    let movieHtmlArray = movieArray.map((currentMovie, i) => {
        console.log(currentMovie, i)
        return `<img class="card-img-top" src="${currentMovie?.Poster}" />
        <div class="movie card-body">
        <h2>${currentMovie?.Title}</h2>
        <p>${currentMovie?.Year}</p>
        <button class="add-button" data-imdbid="${currentMovie?.imdbID}">Add Movie</button>
        </div>`
    })
    return movieHtmlArray.join(``)
}

document.addEventListener('DOMContentLoaded', function() {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"))
    movieContainer.innerHTML = renderMovies(watchlist)
    // console.log(watchlist)
})
