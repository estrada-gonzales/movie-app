"use strict"

// const moviesPost = true;
const movieList = 'https://foregoing-ballistic-cephalopod.glitch.me/movies';

fetch(movieList)
.then(response => console.log(response.json()))
    .then(movies => {
        // console.log(`<h1>${movies[0]}</h1>`);
        // console.log(movies);
    }).catch(error => console.error(error));

$.post(movieList);

console.log("test");


$('h1').click(function() {
    $(this).css('color', 'red');
})