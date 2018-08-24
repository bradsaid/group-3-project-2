// I will need to grab user input from their selection in the form
//I will need to then take those values and post them by creating a route to the example.handlebars page

$("#submitForm").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  //create avariable to hold each ids 
//ex:
    let cleanliness = $("#stars li.selected").val()
    let name = $("#locationName").val().trim()
    let addr = $("#inputAddress").val().trim()
    let singleStall = parseInt($("#inputType option:selected").val());
    let handicapAccess = parseInt($("#inputHandicap option:selected").val());
    let famBath = parseInt($("#inputFamily option:selected").val());
    let ChangeTable = parseInt($("#inputChanging option:selected").val());
    let Unisex = parseInt($("#inputUnisex option:selected").val());
    let keyRequired = parseInt($("#inputKeyReq option:selected").val());
  

  

  var newReviewVals = {
    cleanliness: cleanliness,
    name: name,
    addr: addr,
    singleStall: singleStall,
    handicapAccess: handicapAccess,
    famBath: famBath,
    ChangeTable: ChangeTable,
    Unisex: Unisex,
    keyRequired: keyRequired

  }

  console.log(newReviewVals);

  //Send POST request
  $.ajax("/api/potties", {
    type: "POST",
    data: newReviewVals
  }).then(function() {
    console.log("created new review values");

    // location.reload();
  });
});
