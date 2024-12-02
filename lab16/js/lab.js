// index.js - JSON and APIs 
// Author: Ireland Allison
// Date: 12/02/24

$.ajax({
    url: "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json",
    type: "GET",
    success: function(comicObj) {
        console.log(comicObj);  // Check what data you're getting
        let outputDiv = $("#output");

        let comicTitle = $("<h3>").text(comicObj.title);
        let comicImage = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt);

        outputDiv.empty()
            .append(comicTitle)
            .append(comicImage);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").text("Sorry, could not retrieve comic.");
    }
});
