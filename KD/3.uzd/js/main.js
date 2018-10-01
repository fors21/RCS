// $('#some-btn').click(function(){
    
//     $('.super-p').toggle(2000)
//     $('.super-b').toggle(2000)
// });

// $('#other-btn').click(function(){
//       $('.super-b').toggle(2000)
// });
$('input').keyup( function(){
if($('#input1').val() == $('#input2').val())  {
    $('p').html('yay!')
}  else {
    $('p').html('oh no...')
}
});

