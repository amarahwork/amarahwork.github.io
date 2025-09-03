//Homepage Project Previews
$(function(){
    $(".project").mouseover(function() {
        let project = $(this).attr("id");
        $("main").css("background-image", ("url(assets/layout/preview/" + project + "_dark.png)"));
    });
    
    $(".project").mouseout(function() {
        $("main").css("background-image", "none");
    });
});     