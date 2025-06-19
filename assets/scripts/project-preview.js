//Homepage Project Previews
$(function(){
    $(".row").mouseover(function() {
        let project = $(this).attr("id");
        $("body").css("background-image", ("url(assets/layout/preview/" + project + ".gif)"));
    });

    $(".projects").mouseout(function() {
        $("body").css("background-image", "none");
    });
});     