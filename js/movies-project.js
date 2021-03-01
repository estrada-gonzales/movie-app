"use strict"
// movieList is the API url from where we will be retrieving our data from
const movieList = 'https://foregoing-ballistic-cephalopod.glitch.me/movies'
// double click to start running function
$(document).ready(() => {
    $('#searchMoviesForm').dblclick(function (e) {
        let searchText = ($('#searchText').val());
        getMovies(searchText);
        e.preventDefault();
    });
});
// getMovies fetches the url, and created a promise that pulls the movie Objects from the array
function getMovies() {
    return fetch(movieList)
        .then(response => response.json())
        .then(movies => {
            for (let i = 0; i < movies.length; i++) {
                // console.log ( movies[i] );
                let movie = movies[i];
                console.log(movie.title);
                let html = "";
                let moviesHtml = '<div>'
                moviesHtml += '<tr>Title<th>' + movie.title + ' </th></tr>';
                moviesHtml += '<tr>ID: ' + movie.id + '</tr>';
                moviesHtml += '<tr>Rating: ' + movie.rating + ' </tr>';
                moviesHtml += '</div>';
                html += moviesHtml;
                $("#display").html(html);
            }

        });


}