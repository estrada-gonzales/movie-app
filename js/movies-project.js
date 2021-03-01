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
            movies.forEach(movieObj => {
                let id = "Movie id: " + movieObj.id;
                console.log(id);
                let title = "Movie title: " + movieObj.title;
                console.log(title);
                let rating = "Movie rating: " + movieObj.rating;
                console.log(rating);
            })
        })
    let html = "";
    let movie = id + title + rating;
    console.log(movie);

    html += movie;
    $("#display").html(html);
}




// html to display to page
// function displayHTML() {
//     fetch(movieList)
//         .then(response => response.json())
//         // .then(movies.forEach(movieObj => {
//         //     let movie = movieObj;
//
//     let html = '';
//     // for (let i = 0; i < 5; i++) {
//     //     console.log(movieObj[i]);
//         let movieHtml = "<div class='card' style='width: 18rem'>";
//         movieHtml += "<div class='card-header'>" + "hello" + "</div>";
//         movieHtml += "<ul class='list-group list-group-flush'>";
//         movieHtml += "<li class='list-group-item text-center'>" + movie.title + "</li>";
//         movieHtml += "<li class='list-group-item text-center'>" + "hello" + "</li>";
//         movieHtml += "<li class='list-group-item text-center'>" + "hello" + "</li>";
//         movieHtml += "</ul>";
//         movieHtml += "</div>";
//         html += movieHtml;
//
//     $("#display").html();
// }


// displayHTML();


// To create this application, you need to
//     :calcifer: Not worry about the visual aspect until your code itself is fleshed out! :calcifer:
//     -Create the CRUD functions (and make sure each thing you type works before adding another piece)
// (console.log) :female-technologist:
// -Call the CRUD functions
// (console.log) :male-technologist:
// -Use some jQuery/DOM to add and remove things from the screen
// (console.log) :female-technologist:
// -Create a form to allow the user to search!
//     (console.log) :male-technologist:
// -Use some jQuery/DOM to allow the user to search
// (console.log) :male-technologist:
// -STYLE :clap: IT :clap: last :clap:
//     (console.log) :female-technologist:
// And whenever something goes wrong (it will)
// (console.log) :female-technologist:
// (make sure you're using the methods like fetch, etc as is shown in documentation)
// (console.log) :male-technologist:
// If THAT doesn't work, try this:
// :white_check_mark: -Isolate what exactly isn't working (the specific function)
// :white_check_mark: -Find the point in that code where things do work
//     :white_check_mark: -SLOWLY, CAREFULLY add code back in, console logging with each small step until things break
// :white_check_mark: -When you find that breaking point, and each single piece before it worked -> that's probably where the issue is <-
// :white_check_mark: -Ask yourself if you called the method appropriately. Passed in the correct data type, returned the correct data type, called it in the correct place, etc.
// :white_check_mark: -If not, check the documentation, curriculum, and lecture notes. Chances are, you may have missed some smol detail!
//     I'm a firm believer that complicated things can be accomplished if they are broken into easy tasks and we take a methodical approach to making sure each tiny piece works before moving on! :female_superhero::skin-tone-2:

// :rotating_light: SAVE THIS. PUT IT SOMEWHERE AND CONSTANTLY LOOK BACK AT IT WHEN YOU GET STUCK
