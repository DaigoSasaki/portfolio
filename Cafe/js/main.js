$(function(){
    $(".hbg").click(function(){
        $(this).toggleClass("active");
        $("#header .navi").toggleClass("active");
    });
    $(".navi a").click(function(){
        $(".hbg").removeClass("active");
        $("#header .navi").removeClass("active");
    });
});