"use strict";
console.log("dsadsa");

let slideIndex = 1;
let slides = document.getElementsByClassName("slide"); //getting carousel slides storing in array

function showSlide(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlide(slideIndex);

function pushSlide(n) {
  showSlide((slideIndex += n));
}
