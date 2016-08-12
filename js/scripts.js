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
  } return css, php, c;
}
var secQ = function(an2) {
    if (an2 === 'agree') {
    c ++;
  } else if (an2 === 'neautral') {
    php ++;
  } else if (an2 === 'disagree') {
    css ++;
  } return css, php, c;
}
var thirdQ = function(a3) {
    if (a3 === 'agree') {
    php ++;
  } else if (a3 === 'neautral') {
    c ++;
  } else if (a3 === 'disagree') {
    css ++;
  } return css, php, c;
}
var fourthQ = function(an4) {
    if (an4 === 'agree') {
    css ++;
  } else if (an4 === 'neautral') {
    c ++;
  } else if (an4 === 'disagree') {
    php ++;
  } return css, php, c;
}
var fifthQ = function(an5) {
    if (an5 === 'agree') {
    php ++;
  } else if (an5 === 'neautral') {
    c ++;
  } else if (an5 === 'disagree') {
    css ++;
  } return css, php, c;
}
// ------------->front end work<---------------------
$(function() {
  $("#submit").click(function(event) {
    var an1 = $('input[name=q1]:checked').val();
    var an2 = $('input[name=q2]:checked').val();
    var an3 = $('input[name=q3]:checked').val();
    var an4 = $('input[name=q4]:checked').val();
    var an5 = $('input[name=q5]:checked').val();
    return (firstQ(an1) + secQ(an2) + thirdQ(an3) + fourthQ(an4) + fifthQ(an5));
    event.preventDefault();
  });
});
