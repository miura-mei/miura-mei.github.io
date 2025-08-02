$(function(){
  $(".viewer_list").click(function(){
    $("figure img").attr("src", $(this).attr("href"));

    return false;
  });
});