var css = 0
var php = 0
var c = 0

var firstQ = function(an1) {
    if (an1 === 'agree') {
    css += 3;
  } else if (an1 === 'neutral') {
    php += 2;
  } else if (an1 === 'disagree') {
    c ++;
  }
}
var secQ = function(an2) {
    if (an2 === 'agree') {
    c += 3;
  } else if (an2 === 'neutral') {
    php += 2;
  } else if (an2 === 'disagree') {
    css ++;
  }
}
var thirdQ = function(a3) {
    if (a3 === 'agree') {
    php += 3;
  } else if (a3 === 'neutral') {
    c += 2;
  } else if (a3 === 'disagree') {
    css ++;
  }
}
var fourthQ = function(an4) {
    if (an4 === 'agree') {
    css += 3;
  } else if (an4 === 'neutral') {
    c += 2;
  } else if (an4 === 'disagree') {
    php ++;
  }
}
var fifthQ = function(an5) {
    if (an5 === 'agree') {
    php += 3;
  } else if (an5 === 'neutral') {
    c += 2;
  } else if (an5 === 'disagree') {
    css ++;
  }
}
var sixthQ = function(an6) {
    if (an6 === 'agree') {
    c += 3;
  } else if (an6 === 'neutral') {
    php += 2;
  } else if (an6 === 'disagree') {
    css ++;
  }
}
var results = function(res1){
  if (css > c && php) {
  console.log('yu');
} else if (c > css && php){
}
}


// ------------->front end work<---------------------
$(function() {
  $("#submit").click(function(event) {
    var an1 = $("#art").val();
    var an2 = $('input[name=q2]:checked').val();
    var an3 = $('input[name=q3]:checked').val();
    var an4 = $('input[name=q4]:checked').val();
    var an5 = $('input[name=q5]:checked').val();
    var an6 = $('input[name=q6]:checked').val();
    return (firstQ(an1) + secQ(an2) + thirdQ(an3) + fourthQ(an4) + fifthQ(an5) + sixthQ(an6));
    event.preventDefault();
  });
});
