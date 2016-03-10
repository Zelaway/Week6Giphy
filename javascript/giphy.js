   var person = ['Nina Simone', 'Neyo', 'Madonna', 'Tina Turner', 'Beyonce', 'Cher', 'Michael Jackson', 'Prince', 'Bill Clinton', 'Obama'];
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
            console.log(response.data[1]);
            for(e =0; e<response.data.length; e++){
            var image = $('<img>');
            image.attr('src', response.data[e].images.original.url);
            var gifImage = response.data[e].images.original.url;

            $("#personsView").prepend(image);

        }
        }); 
        //------
    }
    renderButtons();
    $('#addPerson').on('click', function(){
        var newPerson = $('#movie-input').val().trim();
        newPerson.push(person);
        console.log(person);
        
        renderButtons();
        return false;
    });
    $(document).on('click', '.movie', displayMovieInfo);
