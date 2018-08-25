// I will need to grab user input from their selection in the form
//I will need to then take those values and post them by creating a route to the example.handlebars page

$("#submitForm").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  //create avariable to hold each ids 
//ex:
    let cleanliness = $("#inputRating").val().trim()
    let name = $("#inputName").val().trim()
    let addr = $("#inputAddress").val().trim()
    let singleStall = $("#inputType").val().trim()
    let handicapAccess = $("#inputHandicap").val().trim()
    let famBath = $("#inputFamily").val().trim()
    let ChangeTable = $("#inputChanging").val().trim()
    let Unisex = $("#inputUnisex").val().trim()
    let keyRequired = $("#inputKeyReq").val().trim()
  

  

  var newReviewVals = {
    cleanliness: cleanliness,
    name: name,
    addr: addr,
    singleStall: singleStall,
    handicapAccess: handicapAccess,
    famBath: famBath,
    ChangeTable: changingTable,
    Unisex: Unisex,
    keyRequired: keyRequired

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
