$(function(){
    // $(".f_v").slick ({
    //     autplay:true,
    //     autplaySpeed:2000,
    //     dots:true,
    //     pauseOnHover:true
    // });

    $('.instagram_photo').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: "linear",
        slidesToShow: 5, // 表示するスライドの数
        swipe: false,
        arrows: false,
        variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
            }
          }
        ]
      });

      $(function(){    
        $('.slider').slick({
            autoplay:true,//自動再生する
            autoplaySpeed:4000,//自動再生するスピード 4秒
            dots:true//ドット部分を表示する
        });
    });

    
      
});