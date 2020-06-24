//main.js

var transSlideInterval = setInterval(transSlide, 3000)
var slideNum = 0
/*function transSlide*/
function transSlide() {
    console.log("trans slide")
    var slideBanner = document.querySelectorAll(".banner-slide > li")
    slideBanner[slideNum].classList.remove("trans")
    slideNum++
    if (slideBanner.length === slideNum) {
        slideNum = 0
    }
    slideBanner[slideNum].classList.add("trans")
}

/*-----jQuery-----*/
$(function () {
    console.log("loaded")
    var $ham = $('.top-hbb')
    var $sch = $('.top-sch')
    var $mnb = $('.mobile-gnb')
    var $schb = $('.mobile-serch')
    $ham.click(function () {
        $mnb.slideToggle(500);
    })
    $sch.click(function () {
        $schb.slideToggle(300);
    })
}) /*-----jQuery-----*/
