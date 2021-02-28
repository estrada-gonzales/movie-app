"use strict"

// const moviesPost = true;
const movieList = 'https://foregoing-ballistic-cephalopod.glitch.me/movies';

fetch(movieList)
.then(response => console.log(response.json()))
    .then(movies => {
        // console.log(`<h1>${movies[0]}</h1>`);
        console.log(movies);
    })
.catch(error => console.error(error));

$.post(movieList);


// $("button").click(function(){
//     $.post("demo_test_post.asp",
//         {
//             name: "Donald Duck",
//             city: "Duckburg"
//         },
//         function(data, status){
//             alert("Data: " + data + "\nStatus: " + status);
//         });
// });



// function showMovies() {
//     let html = "";
//     let movie =
//
// }









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


console.log("test");
//
// $(document).ready(function () {
//     return "test";
// });

$('h1').click(function() {
    $(this).css('color', 'red');
})