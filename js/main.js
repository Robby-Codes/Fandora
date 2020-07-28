/*
alert('hello000');
const leftCars = document.getElementsByClassName('left-down')[0];
const rightCars = document.getElementsByClassName('right-up')[0];
const prodSection = document.getElementById('product-section');


function scrollAnimation () {
    var windowHeight = window.innerHeight;
    window.addEventListener('scroll', () => {
        var positionBottom = prodSection.getBoundingClientRect().bottom;
        var positionTop = prodSection.getBoundingClientRect().top;
        if (positionBottom - windowHeight <= 0) {
            alert('hello');
        }
    })
}
*/