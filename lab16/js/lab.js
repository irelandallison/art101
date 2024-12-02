// index.js - JSON and APIs 
// Author: Ireland Allison
// Date: 12/02/24

$.ajax({
    url: "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json",
    type: "GET",
    success: function(comicObj) {
        let outputDiv = $("#output");

        // Create title and image elements
        let comicTitle = $("<h3>").text(comicObj.title);
        let comicImage = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt);

        // Update the output div with the comic
        outputDiv.empty()
            .append(comicTitle)
            .append(comicImage);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);
        $("#output").text("Sorry, could not retrieve comic.");
    }
});



