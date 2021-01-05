$(function () {

    $(".menuBox").on('show.bs.collapse',function () {
        $(".btn-menu img").attr("src","images/close_menu.png");
        $(".btn-menu img").css("transform","rotate(180deg)").css("transition","700ms");
    });

    $(".menuBox").on('hide.bs.collapse',function () {
        $(".btn-menu img").css("transform","rotate(-180deg)").css("transition","700ms");
        $(".btn-menu img").attr("src","images/menu-of-three-lines.png");
    });

    $(".menuBox ul li a").click(function () {
        $(".menuBox").collapse('hide');
        $("html , body").animate({scrollTop: $(this.hash).offset().top},1500)
    });

    $(".section-1 a[href='#service']").click(function () {
        $("html , body").animate({scrollTop: $(this.hash).offset().top},1000)
    });

    $(".elevator").click(function () {
        $("html , body").animate({scrollTop: 0},1000)
    });

    $(window).scroll(function () {

        if ($(".navbar").offset().top > 50){
            $(".fixed-top").addClass("navbar-custom-animation")
        }
        else {
            $(".fixed-top").removeClass("navbar-custom-animation")
        }


        if ($(window).scrollTop() > 400){
            $(".elevator").fadeIn()
        }
        else {
            $(".elevator").fadeOut()
        }

        if ($(window).scrollTop() > 250){
            $(".section-2 .row .col-md-6:nth-child(1)").addClass("animate__animated animate__pulse");
            $(".section-2 .row .col-md-6:nth-child(2)").addClass("animate__animated animate__pulse");
        }

        if ($(window).scrollTop() > 550){
            $(".section-2 .row .col-md-6:nth-child(3)").addClass("animate__animated animate__pulse");
            $(".section-2 .row .col-md-6:nth-child(4)").addClass("animate__animated animate__pulse");
        }

        if ($(window).scrollTop() > 980) {
            $(".section-3 .row .col-md-4").addClass("animate__animated animate__pulse");
        }

        if ($(window).scrollTop() > 1650) {
            $(".section-4 .row .col-md-4").addClass("animate__animated animate__zoomIn");
        }

        if ($(window).scrollTop() > 3900) {
            $(".section-6 .row .col-lg-6").addClass("animate__animated animate__fadeInRight");
        }

    });


});

