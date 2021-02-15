/* NAVIGATION BAR ANIMATION ON SCROLL */

const nav = document.getElementById("navigation");
const mark = document.getElementsByClassName("intro-review");
const mark2 = document.getElementsByClassName("mark2");

navScroll(mark);

function navScroll (element) {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    if (windowWidth > 840) {
        window.addEventListener("scroll", () => {
            for (var x = 0; x < element.length; x++) {
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
}


/* LINK Section ANIMATION */

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
        for (var x = 0; x < element.length; x++) {
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
            updateCarsInCart(element, "add");
        };
    } else if (element.innerHTML === "Remove") {
        element.onclick = function () {
            subFromCart(element);
            updateCarsInCart(element, "remove");
        };
    }
}

function addToCart(element) {
    element.innerHTML = "Remove";
    let current = parseInt(cartAmount.innerHTML);    
    current += 1;
    cartAmount.innerHTML = current.toString();
    cartAmount.style.color = "green";
    cartBrain(element);
}

function subFromCart(element) {
    element.innerHTML = "Add to Cart";
    let current = parseInt(cartAmount.innerHTML);    
    current -= 1;
    cartAmount.innerHTML = current.toString();
    if (cartAmount.innerHTML === "0") {
        cartAmount.style.color = "red";
    }
    cartBrain(element);
}


/* Cover Page Car/Loading Animations */

const air1 = document.getElementsByClassName("v1")[0];
const air2 = document.getElementsByClassName("v2")[0];
const air3 = document.getElementsByClassName("v3")[0];
const air4 = document.getElementsByClassName("v4")[0];

const carAir1 = document.getElementsByClassName("car-air-1")[0];
const carAir2 = document.getElementsByClassName("car-air-2")[0];
const carAir3 = document.getElementsByClassName("car-air-3")[0];

const car1 = document.getElementsByClassName("car-image-1")[0];
const car2 = document.getElementsByClassName("car-image-2")[0];

const loadingBar = document.getElementsByClassName("bar")[0];
const coverPage = document.getElementById("cover");

const bodyOverflow = document.getElementsByTagName("body")[0];

onload = loadingFunction;

function loadingFunction() {
    loadingBar.style.transition = "all 4s";
    loadingBar.style.width = "100%";
    coverPage.style.transition = "all 1s 5s";
    coverPage.style.opacity = "0";
    setTimeout(function () {
        coverPage.style.display = "none";
        bodyOverflow.style.overflowY = "auto";
    }, 5500);
}