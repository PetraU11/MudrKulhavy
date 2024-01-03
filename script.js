const hamburger = document.querySelector(".header__hbg-wrapper")
const hamburgerMenu = document.querySelector(".header__nav")
const hamburgerBtn = document.querySelectorAll(".header__nav-button")


hamburger.addEventListener("click", () => {
   
    if (hamburgerMenu.classList.contains("shown")) {
        hamburgerMenu.style.display = "none";
        hamburgerMenu.classList.remove("shown");
        hamburgerBtn.forEach((button) => {
            button.classList.remove("shown-btn");
        });
    } else {
        hamburgerMenu.style.display = "block";
        hamburgerMenu.classList.add("shown");
        hamburgerBtn.forEach((button) => {
            button.classList.add("shown-btn");
        });
        
    }
});