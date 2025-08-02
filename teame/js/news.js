$(function(){

    var windowWidth = $(window).width();
    var windowSm = 640;
    if (windowWidth >= windowSm) {
       $(".js-floating-floater").addClass("on");
    } else {
        $(".js-floating-floater").removeClass("on")
    }
    
        $(window).scroll(fixedFloater);
        $(window).resize(fixedFloater);
        fixedFloater();
        function fixedFloater(){
          var header_height = 300;
          $('.js-floating').each(function(){
          $placeholder = $(this);
          $floater     = $(this).children('.js-floating-floater.on');
          if( window.scrollY + header_height > $(this).offset().top ){
            $floater.width( $placeholder.width() );
            $placeholder.height( $floater.height() );
            $floater.addClass('fixed').css('top',header_height+'px');
          } else {
            $floater.width( '' );
            $placeholder.height( '' );
            $floater.removeClass('fixed');
          }
          });
        }


});


