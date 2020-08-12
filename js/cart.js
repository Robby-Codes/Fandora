/* Remove Button Functionality */

const car1 = document.getElementsByClassName("remove-ac-shelby-cobra")[0];
const car2 = document.getElementsByClassName("remove-audi-r8")[0];
const car3 = document.getElementsByClassName("remove-bugatti-chiron")[0];
const car4 = document.getElementsByClassName("remove-chevrolet-camaro-ss")[0];
const car5 = document.getElementsByClassName("remove-delorean")[0];
const car6 = document.getElementsByClassName("remove-ford-thunderbird")[0];
const car7 = document.getElementsByClassName("remove-mclaren-f1")[0];
const car8 = document.getElementsByClassName("remove-peugeot-onyx")[0];
const car9 = document.getElementsByClassName("remove-audi-r8-spyder")[0];

car1.onclick = function () {
    document.getElementsByClassName("ac-shelby-cobra")[0].style.display = "none";
    let price = document.getElementsByClassName("ac-shelby-cobra-price")[0];
    updatePrice(price);
    subFromCart();
}
car2.onclick = function () {
    document.getElementsByClassName("audi-r8")[0].style.display = "none";
    let price = document.getElementsByClassName("audi-r8-price")[0];
    updatePrice(price);
    subFromCart();
}
car3.onclick = function () {
    document.getElementsByClassName("bugatti-chiron")[0].style.display = "none";
    let price = document.getElementsByClassName("bugatti-chiron-price")[0];
    updatePrice(price);
    subFromCart();
}
car4.onclick = function () {
    document.getElementsByClassName("chevrolet-camaro-ss")[0].style.display = "none";
    let price = document.getElementsByClassName("chevrolet-camaro-ss-price")[0];
    updatePrice(price);
    subFromCart();
}
car5.onclick = function () {
    document.getElementsByClassName("delorean")[0].style.display = "none";
    let price = document.getElementsByClassName("delorean-price")[0];
    updatePrice(price);
    subFromCart();
}
car6.onclick = function () {
    document.getElementsByClassName("ford-thunderbird")[0].style.display = "none";
    let price = document.getElementsByClassName("ford-thunderbird-price")[0];
    updatePrice(price);
    subFromCart();
}
car7.onclick = function () {
    document.getElementsByClassName("mclaren-f1")[0].style.display = "none";
    let price = document.getElementsByClassName("mclaren-f1-price")[0];
    updatePrice(price);
    subFromCart();
}
car8.onclick = function () {
    document.getElementsByClassName("peugeot-onyx")[0].style.display = "none";
    let price = document.getElementsByClassName("peugeot-onyx-price")[0];
    updatePrice(price);
    subFromCart();
}
car9.onclick = function () {
    document.getElementsByClassName("audi-r8-spyder")[0].style.display = "none";
    let price = document.getElementsByClassName("audi-r8-spyder-price")[0];
    updatePrice(price);
    subFromCart();
}


// Update The Total Price
var totalPrice = document.getElementsByClassName("t_price")[0];

function updatePrice (price) {
    var new_total = Number(totalPrice.innerHTML.replace(/[^0-9.-]+/g,""));
    var sub = Number(price.innerHTML.replace(/[^0-9.-]+/g,""));
    new_total -= sub;
    new_total = (new_total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    totalPrice.innerHTML = new_total;
}


// Update The Cart Number Found Inside The Navigation Bar
const cartAmount = document.getElementsByTagName("sub")[0];

function subFromCart() {
    let current = parseInt(cartAmount.innerHTML);    
    current -= 1;
    cartAmount.innerHTML = current.toString();
    if (cartAmount.innerHTML === "0") {
        cartAmount.style.color = "red";
    }
}