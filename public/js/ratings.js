$(document).ready(function() {
  $("#stars li")
    .on("mouseover", function() {
      let onStar = parseInt($(this).data("value"), 10);
      $(this)
        .parent()
        .children("li.star")
        .each(function(e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function() {
      $(this)
        .parent()
        .children("li.star")
        .each(function() {
          $(this).removeClass("hover");
        });
    });

  $("#stars li").on("click", function() {
    let onStar = parseInt($(this).data("value"), 10); 
    let stars = $(this)
      .parent()
      .children("li.star");
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    let ratingValue = parseInt(
      $("#stars li.selected")
        .last()
        .data("value"),
      10
    );
    console.log(ratingValue);
  });
});
