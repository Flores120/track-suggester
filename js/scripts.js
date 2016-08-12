// var art = $("input:radio[name=art]:checked").val();
// **************
$(function() {
  $('#submitButton').click(function(event) {
    var an1 = $('input[name=q1]:checked').val();
    var an2 = $('input[name=q2]:checked').val();
    var an3 = $('input[name=q3]:checked').val();
    var an4 = $('input[name=q4]:checked').val();
    var an5 = $('input[name=q5]:checked').val();
    event.preventDefault();
    console.log();
  });
});
