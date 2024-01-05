const hamburger = document.querySelector(".header__hbg-wrapper")
const headerBottom = document.querySelector(".header__wrapper-bottom")
const hamburgerMenu = document.querySelector(".header__nav")
const hamburgerBtn = document.querySelectorAll(".header__nav-button")
const hmbgBarTop = document.querySelector(".header__hbg.top")
const hmbgBarMiddle = document.querySelector(".header__hbg.middle")
const hmbgBarBottom = document.querySelector(".header__hbg.bottom")

hamburger.addEventListener("click", () => {
   
    if (hamburgerMenu.classList.contains("shown")) {
        hamburgerMenu.style.display = "none";
        hamburgerMenu.classList.remove("shown");
        hamburgerBtn.forEach((button) => {
            button.classList.remove("shown-btn");
        })
        hmbgBarTop.classList.remove("first")
        hmbgBarMiddle.classList.remove("second")
        hmbgBarBottom.classList.remove("third");
        headerBottom.style.marginTop = "0px"
    } else {
        hamburgerMenu.style.display = "block";
        hamburgerMenu.classList.add("shown");
        hamburgerBtn.forEach((button) => {
            button.classList.add("shown-btn");
        });
        hmbgBarTop.classList.add("first")
        hmbgBarMiddle.classList.add("second")
        hmbgBarBottom.classList.add("third")
        headerBottom.style.marginTop = "15px"

    } 
});


window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});