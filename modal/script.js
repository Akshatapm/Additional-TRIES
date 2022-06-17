"use strict";
const modal = document.querySelector(".show__modal");
const overlay = document.querySelector(".overlay");
const closebutton = document.querySelector(".modal__close");
const openbutton = document.querySelectorAll(".btn__modal");

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openbutton.forEach((n) => n.addEventListener("click", openmodal));

closebutton.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
