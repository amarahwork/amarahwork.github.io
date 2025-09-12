$(function(){
    $('.square').click(function() {

        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
        } else {
            $('.square img').removeClass('active');
            $(this).addClass('active');    
        }
    });
});     