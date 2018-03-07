      // Initial array of movies
      $(document).ready(function(){
      
      var topics = ["Red Hot Chili Peppers", "Pearl Jam", "Wu Tang Clan", "Jimi Hendrix", "Pink Floyd", "Fleetwood Mac", "Nirvana", "Johnny Cash",
    "Prince", "Eric Clapton"];

      // Function for displaying movie data
      function renderButtons() {
      
        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons-go-here").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var bandName = $("<button>");
          // Adding a class
          bandName.addClass("band");
          // Adding a data-attribute with a value of the movie at index i
          bandName.data("name", topics[i]);
          // Providing the button's text with a value of the movie at index i
          bandName.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons-go-here").append(bandName);
        }
      }

      // This function handles events where one button is clicked
      $("#add-band").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var band = $("#band-input").val().trim();
        // The movie from the textbox is then added to our array
        topics.push(band);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();

    });
