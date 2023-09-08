"use strict";

const imgs = document.querySelectorAll(".pic-size");
let i = imgs.length;

// const img2 = document.querySelector(".pic-2")

//img1.remove()
function slider() {
  imgs[i - 1].classList.remove("show");

  const total = imgs.length;
  if (i < total) {
    i++;
  } else {
    i = 1;
  }
  imgs[i - 1].classList.add("show");
}

setInterval("slider()", 3000);
