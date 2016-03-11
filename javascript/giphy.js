
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
        console.log("I work");
        var newPerson = $('#movie-input').val().trim();
        person.push(newPerson);
        console.log(person);
        
        renderButtons();
        return false;
    });
    $(document).on('click', '.movie', displayMovieInfo);

//get giphy images to stay still-------------------------
$('.animalImage').on('click', function(){
            //STEP ONE: study the html above. Look at all the data attributes. Run the file in the browser. Look at the images. After you fill in steps 1 and 2 you'll be able to pause gifs from giphy.
            //STEP TWO: make a variable named state and then reference the button's data-state into it. Do not use .data('state'). It won't work the way we expect.
            //---------------FILL IN CODE HERE FOR STEP TWO----------------------------
            var state = $(this).attr('data-state'); 
            //----------------------------------------------------
            /*STEP THREE: 
                * if variable state is equal to 'still' then 
                    * update the src attribute of this image that you clicked on to what data-animate is equal to for this image
                    * and update the data-state attribute to 'animate'
                * if state does not equal 'still' then 
                    * update the src attribute of this image that you clicked on to what data-still is equal to for this image
                    * and update the data-state attribute to 'still'
            */
            //---------------FILL IN CODE HERE FOR STEP THREE----------------------------
            if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
            //----------------------------------------------------
            //STEP FOUR: open the file in the browser and click on the images. Then click again to pause.
        }); 