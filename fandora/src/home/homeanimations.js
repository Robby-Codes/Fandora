/* NAVIGATION BAR ANIMATION ON SCROLL */

const mark = document.getElementsByClassName("intro-review");

navScroll(mark);

function navScroll(element) {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  if (windowWidth > 764) {
    window.addEventListener("scroll", () => {
      for (var x = 0; x < element.length; x++) {
        var elem = element[x];
        var position = element[x].getBoundingClientRect().top;
        if (position - windowHeight <= 0) {
          const nav = document.getElementById("navigation-1");
          nav.style.transition = "all 0.5s";
          nav.style.backgroundColor = "#f5f5f5";
          nav.style.border = "5px solid #282828";
        } else if (position - windowHeight > 0) {
          const nav = document.getElementById("navigation-1");
          nav.style.transition = "all 0.5s";
          nav.style.backgroundColor = "transparent";
          nav.style.borderColor = "transparent";
        }
      }
    });
  }
}

/* CAR IMAGE ANIMATION ON SCROLL */

const carPic1 = document.getElementsByClassName("car-pic");

carScroll(carPic1);

function carScroll(element) {
  var windowHeight = window.innerHeight;
  window.addEventListener("scroll", () => {
    for (var x = 0; x < element.length; x++) {
      var elem = element[x];
      var position = element[x].getBoundingClientRect().top;
      if (position - windowHeight <= 0) {
        elem.style.transition = "all 1s";
        elem.style.transform = "translate(0px)";
        elem.style.opacity = "1";
      } else if (position - windowHeight > 0) {
        elem.style.transition = "all 0.5s";
        elem.style.transform = "translate(50px)";
        elem.style.opacity = "0";
      }
    }
  });
}
