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
  //scroll-button to next section
  var button = document
    .getElementById("Hello")
    .getElementsByClassName("button")[0];
  var prevSection = document.getElementById("Hello");
  var nextSection = document.getElementById("Portfolio");
  button.addEventListener("click", function() {
    nextSection.scrollIntoView();
  });
  //create gallery
  var data = [
    {
      image: "img/line1.1.png",
      classImg: "print"
    },
    {
      image: "img/line1.2.png",
      classImg: "branding"
    },
    {
      image: "img/line1.3.png",
      classImg: "branding"
    },
    {
      image: "img/line1.4.png",
      classImg: "branding"
    },
    {
      image: "img/line2.1.png",
      classImg: "HTML"
    },
    {
      image: "img/line2.2.png",
      classImg: "branding"
    },
    {
      image: "img/line2.3.png",
      classImg: "HTML"
    },
    {
      image: "img/line2.4.png",
      classImg: "print"
    }
  ];
  if (data) {
    var productCount = data.length;
    console.log(productCount);
    var resultContainer = document.getElementsByClassName("gallery")[0];
    console.log(resultContainer);
    renderProduct();

    function renderProduct(str) {
      if (!str) {
        //load all
        for (var i = 0; i < productCount; i++) {
          var arr = [];
          for (var key in data[i]) {
            arr.push(data[i][key]);
          }
          resultContainer.appendChild(createElement(arr));
        }
      } else {
        //load matching product
        resultContainer.innerHTML = "";
        for (var i = 0; i < productCount; i++) {
          if (data[i].classImg.toLowerCase().indexOf(str.toLowerCase()) != -1) {
            var arr = [];

            for (var key in data[i]) {
              arr.push(data[i][key]);
            }
            resultContainer.appendChild(createElement(arr));
          }
        }
      }
    }
    //нажатие на кнопку - активация сортировки
    //all works
    document.getElementById("all").addEventListener("click", function(e) {
      renderProduct();
    });
    //print
    document
      .getElementsByClassName("navItem")[1]
      .addEventListener("click", function(e) {
        var sortValue = document.getElementById("print").textContent;
        if (sortValue) {
          renderProduct(sortValue);
        }
      });
    //branding
    document
      .getElementsByClassName("navItem")[2]
      .addEventListener("click", function(e) {
        var sortValue2 = document.getElementById("branding").textContent;
        if (sortValue2) {
          renderProduct(sortValue2);
        }
      });
    //web
    document
      .getElementsByClassName("navItem")[3]
      .addEventListener("click", function(e) {
        var sortValue3 = document.getElementById("web").textContent;
        if (sortValue3) {
          renderProduct(sortValue3);
        }
      });
    //HTML
    document
      .getElementsByClassName("navItem")[4]
      .addEventListener("click", function(e) {
        var sortValue4 = document.getElementById("HTML").textContent;
        if (sortValue4) {
          renderProduct(sortValue4);
        }
      });
    function createElement([imgLink, classImg]) {
      var galleryItem = document.createElement("img");
      galleryItem.setAttribute("src", imgLink);
      galleryItem.setAttribute("class", classImg);
      return galleryItem;
    }
  }
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
