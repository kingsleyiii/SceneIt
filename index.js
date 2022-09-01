const movieContainer = document.getElementById("movies-container")
const myForm = document.getElementById("search-form")



function renderMovies(movieArray) {
    // console.log("hello")
    let movieHtmlArray = movieArray.map(currentMovie => {
        return `<img class="card-img-top" src=${currentMovie.Poster} />
        <div class="movie card-body">
        <h2>${currentMovie.Title}</h2>
        <p>${currentMovie.Year}</p>
        <button class="add-button" data-imdbid="${currentMovie.imdbID}">Add Movie</button>
        </div>`
    })
    return movieHtmlArray.join(``)
}

document.addEventListener('DOMContentLoaded', function() {
    myForm.addEventListener("submit", e => {
        e.preventDefault();
        // code here will execute after the document is loaded
        movieContainer.innerHTML = renderMovies(movieData)
        });

})

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-button")) {
        movieID = e.target.dataset.imdbid
        saveToWatchlist(movieID)
        // console.log(movieID)
    }
})

function saveToWatchlist(movieID) {
    console.log(movieID)
    const movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == movieID
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    console.log(watchlist);
}

