$(function(){
    $('.square img').click(function() {

        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
        } else {
            $('.square img').removeClass('active');
            $(this).addClass('active');
            location.assign( '#' + $(this).attr('id') );
        }

    });
});     