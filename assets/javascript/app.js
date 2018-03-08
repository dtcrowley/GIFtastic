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

    $("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
        var bandInfo = $(this).data("name");

    // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bandInfo + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

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

            // Appending the paragraph and image tag to the animalDiv
            bandsDiv.append(bandImage);
            bandsDiv.append(para);
            

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-go-here").prepend(bandsDiv);
        }
        });
      });
    });
