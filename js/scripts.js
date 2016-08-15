
$(function() {
  $("#submit").click(function(event) {
    var inputName = $("input#name").val();
    var an1 = $("#subj").val();
    var an2 = $('#work').val();
    var an3 = $('#content').val();
    var an4 = $('#layout').val();
    var an5 = $('#build').val();
    var an6 = $('#softW').val();

    $('.name').append(inputName);
    $('#design').hide();
    $('#C').hide();
    $('#php').hide();
// **********************Back end work****************************************
if (an1 === 'art' && an2 === 'some' && an3 === 'heckY' && an4 === 'yes' && an5 ==='dontcar' && an6 === 'sChal' || an1 === 'art' && an2 === 'more' && an3 === 'little' && an4 === 'maybe' && an5 === 'dontcar' && an6 === 'chal') {
$('#design').slideDown(300).show();
} else if (an1 === 'science' && an2 === 'more' && an3 === 'little' && an4 === 'maybe' && an5 === 'big' && an6 === 'chal' || an1 === 'science' && an2 === 'more2' && an3 === 'no1' && an4 === 'no' && an5 === 'small' && an6 ==='sChal'){
$('#C').slideDown(300).show();
} else if (an1 === 'lit' && an2=== 'more2' && an3 === 'no1' && an4 === 'no' && an5 == 'small' && an6 === 'vChal' || an1 === 'lit' && an2 === 'more' && an3 === 'little' && an4 === 'maybe' && an5 === 'big' && an6 === 'chal'){
$('#php').slideDown(300).show();
} else if (an1 === 'art' && an2 ==='some' && an3 === 'lttle' && an4 === 'maybe' && an5 === 'small' && an6 === 'vChal' || an1 === 'art' && an2 === 'more2' && an3 === 'little' && an4 === 'yes' && an5 === 'big' && an6 === 'chal'){
  $('#art').slideDown(300).show();
} else if (an1 === 'science' && an2 === 'some' && an3 === 'little' && an4 === 'maybe' && an5 === 'dontcar' && an6 === 'vChal' || an1 === 'science' && an2 === 'some' && an3 === 'no' && an4 === 'maybe' && an5 === 'small' && an6 === 'chal'){
$('#C').slideDown(300).show();
} else if (an1 === 'lit' && an2 === 'more' && an3 === 'no1' && an4 === 'no' && an5 === 'small' && an6 === 'vChal' || an1 === 'lit' &&  an2 === 'more2' && an3 === 'littlse' && an4 === 'maybe' && an5 === 'big' && an6 === 'chal') {
  $('#php').slideDown(300).show();
} event.preventDefault();
  });
});
