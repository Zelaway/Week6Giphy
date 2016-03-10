//alert("hi");

//Globla Variables:
var musicians = ['Nina Simone', 'Neyo', 'Madonna', 'Tina', 'Beyonce', 'Cher', 'Michael Jackson', 'Prince', 'Elton John', 'Tony Benet'];

//functions
//----------------------
 function startMusicians(){
 
   for (var i = 0; i < musicians.length; i++){

        
        /*
            Write code between the dashes below to 
                * make a button    
                    * give the button a class of movie
                    * set the data-name attribute of the button to movie name
                    * set the text of the button to the movie name 
                * append the button to moviesView
        */

        //------YOUR CODE GOES IN THESE DASHES
        if(musicians.length==10){
        $("#originals").append("<button type='button' class='btn btn-default'>" + musicians[i] + "</button>");
	    }//else if (musicians.length>10){

	    // }
    }
}
$("#searchButton").click(function() {
  var newPerson;
  musicians.push(newPerson);
  console.log(musicians);

});
startMusicians();