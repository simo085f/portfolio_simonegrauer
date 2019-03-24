"use strict";

function openNav() {
  document.querySelector("#sideMenu").style.width = "100%";
}

function closeMenu() {
  document.querySelector("#sideMenu").style.width = "0";
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.querySelector(".fas").style.display = "block";
  } else {
    document.querySelector(".fas").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
