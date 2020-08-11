
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
                nav.style.backgroundColor = "#f5f5f5";
                nav.style.border = "5px solid #282828";
            } else if (position - windowHeight > 0) {
                nav.style.transition = "all 0.5s";
                nav.style.backgroundColor = "transparent";
                nav.style.borderColor = "transparent";
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


/* Updating Cart Number Shown In Navigation Bar */

const cartAmount = document.getElementsByTagName("sub")[0];

cartBrain(document.getElementsByClassName("ac-shelby-cobra-cart")[0]);
cartBrain(document.getElementsByClassName("audi-r8-cart")[0]);
cartBrain(document.getElementsByClassName("audi-r8-spyder-cart")[0]);
cartBrain(document.getElementsByClassName("bugatti-chiron-cart")[0]);
cartBrain(document.getElementsByClassName("chevrolet-camaro-ss-cart")[0]);
cartBrain(document.getElementsByClassName("delorean-cart")[0]);
cartBrain(document.getElementsByClassName("ford-thunderbird-cart")[0]);
cartBrain(document.getElementsByClassName("mclaren-f1-cart")[0]);
cartBrain(document.getElementsByClassName("peogeot-onyx-cart")[0]);

function cartBrain (element) {
    if (element.innerHTML === "Add to Cart") {
        element.onclick = function () {
            addToCart(element);
        };
    } else if (element.innerHTML === "Remove") {
        element.onclick = function () {
            subFromCart(element);
        };
    }
}

function addToCart(element) {
    element.innerHTML = "Remove";
    current = parseInt(cartAmount.innerHTML);    
    current += 1;
    cartAmount.innerHTML = current.toString();
    cartAmount.style.color = "green";
    cartBrain(element);
}

function subFromCart(element) {
    element.innerHTML = "Add to Cart";
    current = parseInt(cartAmount.innerHTML);    
    current -= 1;
    cartAmount.innerHTML = current.toString();
    if (cartAmount.innerHTML === "0") {
        cartAmount.style.color = "red";
    }
    cartBrain(element);
}


/* Memorizing What The User Adds To Cart To Update Other Pages */

const carInfo = {

}

function memorize () {
    
}