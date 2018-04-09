"use strict";
document.addEventListener("DOMContentLoaded", function() {
  //slider1 HELLO
  var slidePosition = -200;
  var slideCounter = document.getElementsByClassName("slide").length;
  var maxScroll = 100 * slideCounter;
  var slideInterval = setInterval(nextSlide, 8000);
  function nextSlide(e) {
    slidePosition -= 100;
    if (-slidePosition == 300) {
      slidePosition = 0;
    }
    document.getElementsByClassName("slider-wrapper")[0].style.transform =
      "translateX(" + slidePosition / 3 + "%)";
  }
  nextSlide();
  //slider2 TEAM
  var slide = document
    .getElementsByClassName("slider2")[0]
    .getElementsByClassName("slide");
  var sliderNav = document
    .getElementsByClassName("slider2")[0]
    .getElementsByTagName("label");
  function showFirstSlide(event) {
    var num1 = 0;
    slide[num1 + 1].style.display = "none";
    slide[num1 + 2].style.display = "none";
    slide[num1].style.display = "flex";
  }
  function showLastSlide(event) {
    var num2 = 2;
    slide[num2 - 1].style.display = "none";
    slide[num2 - 2].style.display = "none";
    slide[num2].style.display = "flex";
  }
  function showSlide(event) {
    var num3 = 1;
    slide[num3 - 1].style.display = "none";
    slide[num3 + 1].style.display = "none";
    slide[num3].style.display = "flex";
  }
  showFirstSlide();
  sliderNav[0].addEventListener("click", showFirstSlide, false);
  sliderNav[1].addEventListener("click", showSlide, false);
  sliderNav[2].addEventListener("click", showLastSlide, false);
});
