var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

let slideIndex = 0;
let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(() => { plusSlides(1); }, 10000); // Change image every 10 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

function plusSlides(n) {
    stopSlideShow(); // Stop the current interval
    slideIndex += n;
    showSlides();
    startSlideShow(); // Restart the interval
}

function currentSlide(n) {
    stopSlideShow(); // Stop the current interval
    slideIndex = n - 1;
    showSlides();
    startSlideShow(); // Restart the interval
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

showSlides(); // Initial display
startSlideShow(); // Start the slideshow