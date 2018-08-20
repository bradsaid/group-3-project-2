// I will need to grab user input from their selection in the form
//I will need to then take those values and post them by creating a route to the example.handlebars page

$("#submitForm").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  //create avariable to hold each ids 
//ex:
    let multipleUse = $("#inputType").val().trim()
    let handiAccess = $("#inputHandicap").val().trim()
    let famRestroom = $("#inputFamily").val().trim()
    let changingTable = $("#inputChanging").val().trim()
    let unisex = $("#inputUnisex").val().trim()
    let keyRequested = $("#inputKeyReq").val().trim()
  

  

  var newReviewVals = {
    multipleUse: multipleUse,
    handiAccess: handiAccess,
    famRestroom: famRestroom,
    chagingTable: changingTable,
    unisex: unisex,
    keyRequested: keyRequested

  }

  //Send POST request
  $.ajax("/api/reviews", {
    type: "POST",
    data: newReviewVals
  }).then(function() {
    console.log("created new review");

    location.reload();
  });
});
