let windowWidth = window.innerWidth;

$(document).ready(function () {
    if (windowWidth < 1024) {
        $(".nav__links").hide();
    }
});

let resizeEventTimeout;
$(window).resize(function () {
    clearTimeout(resizeEventTimeout);
    resizeEventTimeout = setTimeout(resizeEvent, 100); // Only triggered every 100ms
});

function resizeEvent() {
    windowWidth = window.innerWidth;
    animateHero();
    if (windowWidth > 1024) {
        $(".nav__links").show();
    } else {
        $(".nav__links").hide();
    }
};

let currHero = 1;

$(".nav__toggle").click(function (e) {
    $(".nav__links").fadeIn("fast");
});

$(".nav__close").click(function (e) {
    $(".nav__links").fadeOut("fast");
});

$(".slider__right").click(function (e) {
    currHero += 1;
    if (currHero > 3) {
        currHero = 1;
    }
    animateHero();
});

$(".slider__left").click(function (e) {
    currHero -= 1;
    if (currHero < 1) {
        currHero = 3;
    }
    animateHero();
});

function animateHero() {
    $(".header__shop").fadeOut(200, function () {
        $(".header__shop").slideDown(200);
    });
    $("header").fadeOut(200, function () {
        if (windowWidth > 1024) {
            $("header").css("background", `center / cover no-repeat url(../../images/desktop-image-hero-${currHero}.jpg)`);
        } else {
            $("header").css("background", `center / cover no-repeat url(../../images/mobile-image-hero-${currHero}.jpg)`);
        }
        $("header").fadeIn(200);
    });
    if (windowWidth < 1024) {
        if (currHero === 1) {
            $(".main__headers").animate({
                marginLeft: "0"
            }, 400);
        } else if (currHero === 2) {
            $(".main__headers").animate({
                marginLeft: "-100vw"
            }, 400);
        } else {
            $(".main__headers").animate({
                marginLeft: "-200vw"
            }, 400);
        }
    } else {
        $(".main__headers").css("margin-left", 0);
        if (currHero === 1) {
            $(".main__headers").animate({
                right: "-1200px"
            }, 400);
        } else if (currHero === 2) {
            $(".main__headers").animate({
                right: "-600px"
            }, 400);
        } else {
            $(".main__headers").animate({
                right: "0"
            }, 400);
        }
    }

}