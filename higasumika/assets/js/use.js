$(function(){
    $(".interior_1 a").click(function(){
        $(".one_f img").attr("src", $(this).attr("href"));
        return false;
    });
    $(".interior_2 a").click(function(){
        $(".second_f img").attr("src", $(this).attr("href"));
        return false;
    });
});