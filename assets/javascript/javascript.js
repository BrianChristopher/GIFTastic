

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

    //Build a row


    for (var i = 0; i < results.length; i++) {
        var columnDiv = $("<div>").addClass("col-md-3");
        var gifDiv = $("<div>").addClass("card m-3").attr("style", "width: 18rem;");
        var rating = results[i].rating;
        var ratingText = $("<h6>").text("Rating: " + rating).addClass("m-2");
        var gifImage = $("<img>").addClass("card-img-top gif");
        gifImage.attr({
            "src": results[i].images.fixed_width_still.url,
            "data-still": results[i].images.fixed_width_still.url,
            "data-animate": results[i].images.fixed_width.url,
            "data-state": "still"
        });
        gifDiv.append(gifImage);
        gifDiv.append(ratingText);
        columnDiv.append(gifDiv);


        $("#build").prepend(columnDiv);
    }




    $(".gif").on("click", function () {
        var gifState = $(this).attr("data-state");
        console.log(gifState);

        if (gifState == "still") {
            $(this).attr("data-state", "animate");
            $(this).attr("src", $(this).attr("data-animate"));
        }

        if (gifState == "animate") {
            $(this).attr("data-state", "still");
            $(this).attr("src", $(this).attr("data-still"));
        }

    });


    // <div class="card" style="width: 18rem;">
    //   <img src="..." class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>




});




