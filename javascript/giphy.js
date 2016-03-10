   var person = ['Nina Simone', 'Neyo', 'Madonna', 'Tina', 'Beyonce', 'Cher', 'Michael Jackson', 'Prince', 'Elton John', 'Tony Benet'];
    function renderButtons(){ 
        $('#buttonsView').empty();
        for (var i = 0; i < person.length; i++){
            var a = $('<button>')
            a.addClass('movie');
            a.attr('data-name', person[i]);
            a.html(person[i]);
            $('#buttonsView').append(a);
        }
    }
    function displayMovieInfo(){
        var person = $(this).attr('data-name');
        //var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ person +"&limit=10&rating=g&api_key=dc6zaTOxFJmzC";
        //Write code between the dashes below to hit the queryURL, take the data and display it in the div with an id of moviesView
        
        //------YOUR CODE GOES IN THESE DASHES
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
            console.log(response);
            console.log(response.data);
            var image = $('<img>');
            image.attr("src", response.data);
            console.log(response.data);
            $("#personsView").prepend(JSON.stringify(response));
        }); 
        //------
    }
    renderButtons();
    $('#addPerson').on('click', function(){
        var movie = $('#movie-input').val().trim();
        movies.push(movie);
        
        renderButtons();
        return false;
    });
    $(document).on('click', '.movie', displayMovieInfo);
