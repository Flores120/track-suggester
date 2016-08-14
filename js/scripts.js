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
    $('#design').hide();
    $('#C').hide();
    $('#php').hide();


if (an1 === 'art' && an2 === 'some' && an3 === 'heckY' && an4 === 'yes' && an5 ==='dontcar' && an6 === 'sChal' || an1 === 'art' && an2 === 'more' && an3 === 'little' && an4 === 'maybe' && an5 === 'dontcar' && an6 === 'chal') {
$('#design').show();
} else if (an1 === 'science' && an2 === 'more' && an3 === 'little' && an4 === 'maybe' && an5 === 'big' && an6 === 'chal' || an1 === 'science' && an2 === 'more2' && an3 === 'no1' && an4 === 'no' && an5 === 'small' && an6 ==='sChal'){
$('#C').show();
} else if (an1 === 'lit' && an2=== 'more2' && an3 === 'no1' && an4 === 'no' && an5 == 'small' && an6 === 'vChal' || an1 === 'science' && an2 === 'more' && an3 === 'little' && an4 === 'maybe' && an5 === 'big' && an6 === 'chal'){
$('#php').show();
} else if (an1 === 'art' && an2 ==='some' && an3 === 'lttle' && an4 === 'maybe' && an5 === 'small' && an6 === 'vChal' || an1 === 'art' && an2 === 'more2' && an3 === 'little' && an4 === 'yes' && an5 === 'big' && an6 === 'chal')
event.preventDefault();
  });
});
