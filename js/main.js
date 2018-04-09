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
  //slide 3 COMMENT
  var slide3 = document
    .getElementsByClassName("slider3")[0]
    .getElementsByClassName("slide");
  var slider3Nav = document
    .getElementsByClassName("slider3")[0]
    .getElementsByTagName("label");
  function showFirstSlide3(event) {
    var num1 = 0;
    slide3[num1 + 1].style.display = "none";
    slide3[num1 + 2].style.display = "none";
    slide3[num1].style.display = "flex";
  }
  function showLastSlide3(event) {
    var num2 = 2;
    slide3[num2 - 1].style.display = "none";
    slide3[num2 - 2].style.display = "none";
    slide3[num2].style.display = "flex";
  }
  function showSlide3(event) {
    var num3 = 1;
    slide3[num3 - 1].style.display = "none";
    slide3[num3 + 1].style.display = "none";
    slide3[num3].style.display = "flex";
  }
  showFirstSlide3();
  slider3Nav[0].addEventListener("click", showFirstSlide3, false);
  slider3Nav[1].addEventListener("click", showSlide3, false);
  slider3Nav[2].addEventListener("click", showLastSlide3, false);
});
