//i added a slide shows on pets avaiable and wanted to see if this js function works

let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.display = (index === n) ? "flex" : "none";
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}
