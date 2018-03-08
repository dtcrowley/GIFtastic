$(document).ready(function(){
      // Initial array of bands/topics
      var topics = ["Red Hot Chili Peppers", "Pearl Jam", "Wu Tang Clan", "Jimi Hendrix", "Pink Floyd", "Fleetwood Mac", "Nirvana", "Johnny Cash",
    "Prince", "Eric Clapton"];

   function displayBandInfo () {
    // Grabbing and storing the data-name property value from the button
        var bandInfo = $(this).data("name");

    // Constructing a queryURL using the band/artist name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bandInfo + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

        // storing the data from the AJAX request in the results variable
        var results = response.data;

        //Deleting previously generated GIFs so that the new button-click is the only result displayed
        $("#gifs-go-here").empty();
        
        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var bandsDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var para = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var bandImage = $("<img>");
            
            // Setting the src attribute of the image to a property pulled off the result item
            bandImage.attr("src", results[i].images.fixed_height.url);
            bandImage.data("animate", results[i].images.fixed_height.url);
            bandImage.data("still", results[i].images.fixed_height_still.url);
            bandImage.data("state", "animate");
            bandImage.addClass("gif");
 
            // Appending the paragraph and image tag to the bandsDiv
            bandsDiv.append(para);
            bandsDiv.append(bandImage);

            // Prepending the bandsDiv to the HTML page in the "#gifs-go-here" div
            $("#gifs-go-here").prepend(bandsDiv);

            }
        });
    };

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
      
        // event.preventDefault() prevents the form from trying to submit itself.
        

      function changeImage() {

            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).data("state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
                $(this).attr("src", $(this).data("animate"));
                $(this).data("state", "animate");
            } else {
                $(this).attr("src", $(this).data("still"));
                $(this).data("state", "still");
            }
    
    };

    $(document).on("click", ".band", displayBandInfo);
    $(document).on("click", ".gif", changeImage);
    $(document).on("click", "#add-band", function(event) {
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
