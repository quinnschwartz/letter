$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var personInput = $("input#person").val();

    $(".person").text(personInput.toUpperCase());
    $("#letter").show();

   event.preventDefault();
 });
});
