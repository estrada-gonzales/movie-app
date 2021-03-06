"use strict"
// movieList is the API url from where we will be retrieving our data from
const movieList = 'https://foregoing-ballistic-cephalopod.glitch.me/movies'

// getMovies fetches the url, and created a promise that pulls the movie Objects from the array
getMovies();

function getMovies() {
    $("#display").html(" ");
    return fetch(movieList)
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                // console.log(movie);
                let output = "";
                let moviesHtml = '<div class ="card m-3 border-danger” style=“width: 18rem:">'
                moviesHtml += "<div class=“card-header”>"
                moviesHtml += '<ul class="list-group list-group-flush text-center">';
                moviesHtml += '<li class="list-group-item">Title: ' + movie.title + '</li>';
                moviesHtml += '<li class="list-group-item" id="hideId">Id: ' + movie.id + '</li>';
                moviesHtml += '<li class="list-group-item">Rating: ' + movie.rating + '</li>';
                moviesHtml += '<button class="edit" id="edit-button">Edit</button>';
                moviesHtml += '<button class="delete" id="delete-button">Delete</button>';
                moviesHtml += '</ul>';
                moviesHtml += '</div>';
                output += moviesHtml;
                $("#display").append(output);
            });
        });
}

$(".testing").click(function() {
    $(this).css("color", "red");
})


$(".delete").click(function() {
    $(this).css("color", "red");
});


function postMovie(movieObject) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObject)
    };
    return fetch(movieList, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            getMovies();
        })
        .catch(error => console.error(error));
}


$("#postAMovie").click(function (e) {
    e.preventDefault();
    postMovie({
        "title": $("#movieTitle").val(),
        "rating": $("#movieRating").val()
        // id: $("#movieId").val()
    })
});

function editMovie(movieObject) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObject)
    };
    return fetch(movieList, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            getMovies();
        })
        .catch(error => console.error(error));
}

$("#edit-button").click(function (e) {
    e.preventDefault();
    editMovie({
        "title": $("#movieTitle").val(),
        "rating": $("#movieRating").val(),
        "id": $("#movieId").val()
    })
});


function deleteMovie(id) {
    fetch(`$movieUrl/${id}`), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
        .then(response => response.json())
        .then(() => {
            console.log("deleted")
        })
        .catch(error => console.error(error));
}




// $("#delete-button").click(function () {
    // console.log("delete");
    // $(this).parent('div').remove();
    // let movieId = $('#hideId').text();
    // console.log("delete");
    // deleteMovie(movieId).then(console.log);
// })


