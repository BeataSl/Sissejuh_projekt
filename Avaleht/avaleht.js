// viide javascriptile https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 0;   // määrab ära milline slaid kuvatakse esimesena
showSlides();   // kutsub välja showSlides funktsiooni

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slaid");  // loob uue muutuja ja määrab tema väärtuseks elemendid, mille nimeks on "slaid"
  for (i = 0; i < slides.length; i++) {   
    slides[i].style.display = "none";   // peidab ära eelmise slaidi
  }
  slideIndex++;   // järgmine slaid
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"; // kuvab järgmise slaidi
  setTimeout(showSlides, 5000); // muudab slaidi iga 5 sekundi tagant
} 