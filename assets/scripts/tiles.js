//Tile Hover Effects
$(function(){
    $(".tile").mouseover(function() {
        $(this).addClass("on");
    });

    $(".tile").mouseout(function() {
        $(this).removeClass("on");
    });
});     