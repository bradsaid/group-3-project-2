$(document).ready(function () {
    $("#stars li").on("click", function () {
        let rating = parseInt($("#stars").data("value"), 10);
        let stars = $(this)
            .parent()
            .children("li.star");
        for (i = 0; i < rating; i++) {
            $(stars[i]).addClass("selected");
        }
    });

    $("#stars li").trigger("click")

});



