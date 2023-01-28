$("a.scroll-to").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    
         /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 0){
    $('header').addClass('header-fixed');
    $('body').addClass('body-fixed');
    } else{
         /*Если меньше 100px удаляем класс для header*/
    $('header').removeClass('header-fixed');
    $('body').removeClass('body-fixed');
    }
    
});

$(".burger").click(function() {
    $(".menu").toggleClass('d-block');
});

$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".menu").length == 0 && $target.closest(".burger").length == 0) {
        $(".menu").removeClass("d-block");
    }
  });