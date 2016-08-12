// var css = 0
// var php = 0
// var c = 0
//
// var firstQ = function(an1) {
//     if (an1 === 'agree') {
//     css += 3;
//   } else if (an1 === 'neutral') {
//     php += 2;
//   } else if (an1 === 'disagree') {
//     c ++;
//   }
// }
// var secQ = function(an2) {
//     if (an2 === 'agree') {
//     c += 3;
//   } else if (an2 === 'neutral') {
//     php += 2;
//   } else if (an2 === 'disagree') {
//     css ++;
//   }
// }
// var thirdQ = function(a3) {
//     if (a3 === 'agree') {
//     php += 3;
//   } else if (a3 === 'neutral') {
//     c += 2;
//   } else if (a3 === 'disagree') {
//     css ++;
//   }
// }
// var fourthQ = function(an4) {
//     if (an4 === 'agree') {
//     css += 3;
//   } else if (an4 === 'neutral') {
//     c += 2;
//   } else if (an4 === 'disagree') {
//     php ++;
//   }
// }
// var fifthQ = function(an5) {
//     if (an5 === 'agree') {
//     php += 3;
//   } else if (an5 === 'neutral') {
//     c += 2;
//   } else if (an5 === 'disagree') {
//     css ++;
//   }
// }
// var sixthQ = function(an6) {
//     if (an6 === 'agree') {
//     c += 3;
//   } else if (an6 === 'neutral') {
//     php += 2;
//   } else if (an6 === 'disagree') {
//     css ++;
//   }
// }
// var result = function(){
//   if (css > c && php) {

// }
// }




// ------------->front end work<---------------------
$(function() {
  $("#submit").click(function(event) {
    var name = $('#usr').append();
    var an1 = $("#subj").val();
    var an2 = $('#work').val();
    var an3 = $('#content').val();
    var an4 = $('#layout').val();
    var an5 = $('#build').val();
    var an6 = $('#softW').val();
      // $('.name').text(inputName);
      if (an1 === 'art' && an2 === 'some' && an3 === 'agree' && an4 === 'yes' && an5 ==='dontcar' && an6 === 'sChal'){
       $('.design').show();
    event.preventDefault();
  }
  });
});
