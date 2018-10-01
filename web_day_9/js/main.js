
// document.getElementById('some-btn')
// .addEventListener('click',function (){
//     var el = document.getElementById('this');
//     if (el.innerText =='foo'){
//         el.innerText = 'bar';
//     } else {
//         el.innerText = 'foo';
//     }
// });
// vai rakstām jQuery

// $('#some-btn').click(function(){
// click nomainot uz hover, nav pat jāspiež poga



//--------------------------------------------------

// $('#some-btn').click(function () {
//     $('.super-p').each(function (i) {
//         var num = i + 1;
//         if ($(this').html() =='foo' + num){
//                $(this).html('bar' + num);
//     } else if ($(this).html() == 'bar' + num) {
//         $(this).html('baz' + num);
//     } else {
//         $(this).html('foo' + num);
//     }

// });
//     });
//----------------------------------------------------------

    // $('#some-btn').click(function () {
    //     $('.super-p').each(function () {
    //         var num = $(this).attr('data-number');
    //         if ($(this').html() =='foo' + num) {
    //                $(this).html('bar' + num);
    //     } else if ($(this).html() == 'bar' + num) {
    //         $(this).html('baz' + num);
    //     } else {
    //         $(this).html('foo' + num);
    //     }

    // });
    //     });
    //-------------------------------------------------------------

    $('#some-btn').click(function () {
        if ($('.super-p span').html() =='foo') {
            $('.super-p span').html('bar');
        } else if ($('.super-p span').html() == 'bar'){
            $('.super-p span').html('baz');
        } else {
            $('super-p span').html('foo');
        }
    });

    $('#some-other-btn').click(function(){
        // $('.super-p').hide (2000)
        $('.super-p').toggle(2000)
    });

    $('.add').click(function(){
        var action =  $(this).attr ('data-action');
        var currentNumber = $('#some-input').val();
        var newValue = parseInt(currentNumber) + parseInt(action);
        $('#some-input').val(newValue);
    });


    






















