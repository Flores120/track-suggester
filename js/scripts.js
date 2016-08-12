var css = 0
var php = 0
var c = 0

var firstQ = function(an1) {
    if (an1 === 'agree') {
    css ++;
  } else if (an1 === 'neautral') {
    php ++;
  } else if (an1 === 'disagree') {
    c ++;
  } return ( css, php, c);
}
// ------------->front end work<---------------------
$(function() {
  $("#submit").click(function(event) {
    alert("hello");
    var an1 = $('input[name=q1]:checked').val();
    var an2 = $('input[name=q2]:checked').val();
    var an3 = $('input[name=q3]:checked').val();
    var an4 = $('input[name=q4]:checked').val();
    var an5 = $('input[name=q5]:checked').val();
    event.preventDefault();
    alert("hey it works");
  });
});
