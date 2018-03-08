$(document).ready(function(){
      // Initial array of bands/topics
      var topics = ["Red Hot Chili Peppers", "Pearl Jam", "Wu Tang Clan", "Jimi Hendrix", "Pink Floyd", "Fleetwood Mac", "Nirvana", "Johnny Cash",
    "Prince", "Eric Clapton"];

      //Function for displaying buttons
      function renderButtons() {
      
        // Deleting the band buttons prior to adding new band buttons
        $("#buttons-go-here").empty();

        // Looping through the array of bands
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each band/artist in the array.
          var bandName = $("<button>");
          // Adding a class
          bandName.addClass("band");
          // Adding a data-attribute with a value of the band/artist topic at index i
          bandName.data("name", topics[i]);
          // Providing the button's text with a value of the band/artist topic at index i
          bandName.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons-go-here").append(bandName);
        }
      }

      // This function handles events where one button is clicked
      $("#add-band").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // This line will grab the text from the input box
        var band = $("#band-input").val().trim();
        // The band/artist from the textbox is then added to the topics array
        topics.push(band);

        // calling renderButtons which handles the processing of our band/artist topics array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of bands/artists
      renderButtons();

    });
