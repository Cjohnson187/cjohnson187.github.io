/* slideshow for main intro area */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var size = 3;

    var slides = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("slideshow");

    /* attemtpting to change background */
    var back = document.getElementById("intro");

    for (i = 0; i < size; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > size) {slideIndex = 1}
    for (i = 0; i < size; i++) {
/*         dots[i].className = dots[i].className.replace(" activeSlide", "");
 */        
        document.getElementById("intro").style.backgroundImage = "url('../cjohnson187.github.io/images/owen-lystrup-chaqHXlOzYs-unsplash.jpg')";
/*         document.getElementsByClassName("intro").style.background-image("url(../images/backllighten.jpg)");
 */
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // change every 2 seconds
}