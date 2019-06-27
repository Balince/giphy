var gifs = "";

function giphy() {

    var gif = $(this).attr("data-name");
    var gifURL = "api.giphy.com/v1/gifs/search" + gif + "&api_key=F8dB4r92j4yxrwiuupE9l5L7n2tGLqjL";

$.ajax ({
    url: gifURL,
    method: "GET"
}).then(function(response) {

    var gifDiv = $("<div class='gif'>");
    
    var rating = response.Rated; // check for imdb rating
    var gifCheck = $("<p>").text("Rating: " + rating);
    var gifDiv.append(gifCheck);

    var gifImg = response.Image;
    var image = $("<img>").attr("src", gifImg);
    gifDiv.append(image);

    $("gifView").prepend(gifDiv);
});

}

function gifButtons() {
$("#seeGif").empty();

for (var i=0; i < gifs.length; i++); {

var a = $("<button>");

a.addClass("gif-btn");

a.attr("data-name", gifs[i]);

a.text(gifs[i]);

$("#seeGif").append(a);
}

}

$("#addGif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gifAdd").val();
    gifs.push(gif);
    gifButtons();
});

$(document).on("click", ".gif-btn", );
gifButtons();
