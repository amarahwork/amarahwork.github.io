//Homepage Project Previews
$(function(){
    $(".project").mouseover(function() {
        let project = $(this).attr("id");
        $("body").css("background-image", ("url(assets/layout/preview/" + project + ".gif)"));
    });

    $(".project").mouseout(function() {
        $("body").css("background-image", "none");
    });
});     