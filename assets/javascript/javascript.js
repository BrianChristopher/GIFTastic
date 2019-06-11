

//This is the example
//https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY
//This is the API key  
var APIKey = "1yMPuh6hF03rgqCEbFV4sg11YLk34RET";
//This is the search term (get this from UI)
var search = "cats";
//This is the queryURL
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIKey;
//This is the AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var ratingText = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(ratingText);
        gifDiv.prepend(gifImage);

        $("#build").prepend(gifDiv);
      }
    


    

});




