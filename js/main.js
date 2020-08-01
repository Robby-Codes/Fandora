
/* NAVIGATION BAR ANIMATION ON SCROLL */

const nav = document.getElementById("navigation");
const mark = document.getElementsByClassName("intro-review");

navScroll(mark);

function navScroll (element) {
    var windowHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
        for (var x = 0; x < element.length; i++) {
            var elem = element[x];
            var position = element[x].getBoundingClientRect().top;
            if (position - windowHeight <= 0) {
                nav.style.transition = "all 0.5s";
                nav.style.backgroundColor = "white";
            } else if (position - windowHeight > 0) {
                nav.style.transition = "all 0.5s";
                nav.style.backgroundColor = "transparent";
            }
        }
    })
}


/* ON PAGE SECTION LINK ANIMATION */

document.getElementsByClassName("product-link")[0].addEventListener("click", productScroll);
document.getElementsByClassName("intro-button")[0].addEventListener("click", productScroll);

function productScroll () {
    document.getElementById("product-section").scrollIntoView({behavior: 'smooth'});
}


/* CAR IMAGE ANIMATION ON SCROLL */

const carPic1 = document.getElementsByClassName("p1");
const carPic2 = document.getElementsByClassName("p2");
const carPic3 = document.getElementsByClassName("p3");
const carPic4 = document.getElementsByClassName("p4");
const carPic5 = document.getElementsByClassName("p5");
const carPic6 = document.getElementsByClassName("p6");
const carPic7 = document.getElementsByClassName("p7");
const carPic8 = document.getElementsByClassName("p8");
const carPic9 = document.getElementsByClassName("p9");
const carPic10 = document.getElementsByClassName("p10");


carScroll (carPic1);
carScroll (carPic2);
carScroll (carPic3);
carScroll (carPic4);
carScroll (carPic5);
carScroll (carPic6);
carScroll (carPic7);
carScroll (carPic8);
carScroll (carPic9);
carScroll (carPic10);

function carScroll (element) {
    var windowHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
        for (var x = 0; x < element.length; i++) {
            var elem = element[x];
            var position = element[x].getBoundingClientRect().top;
            if (position - windowHeight <= 0) {
                elem.style.transition = "all 2s";
                elem.style.transform = "translate(0px)";
                elem.style.opacity = "1";
            } else if (position - windowHeight > 0) {
                elem.style.transition = "all 0.5s";
                elem.style.transform = "translate(50px)";
                elem.style.opacity = "0";
            }
        }
    })
}