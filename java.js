// slideshow animation

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


// read more button
// button1
function readMoreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("expand");
    var btnText = document.getElementById("readMoreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Continue Reading";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Collapse Article";
      moreText.style.display = "inline";
    }
  }
// button2
function readMoreFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("expand2");
    var btnText2 = document.getElementById("readMoreBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Continue Reading";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Collapse Article";
      moreText2.style.display = "inline";
    }
  }