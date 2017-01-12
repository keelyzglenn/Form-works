$(document).ready(function() {
  $("form#buyer").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var recipt= name + " " + address;
    $("#result").text(recipt);
  });
});
