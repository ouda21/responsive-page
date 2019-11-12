$(document).ready(function(){
    
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });

     $(".nav-close").click(function(){
         $(".full-nav").removeClass("open");
     });

     $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll>0){
            $(".nav").addClass("sticky");
        }else{
            $(".nav").removeClass("sticky");
        }
     });


    $('.bxslider').bxSlider({
        mode:'horizontal',
        moveSlides:1,
        slideMargin:40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:3,
        speed:1200,
    });
});