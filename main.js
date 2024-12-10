// ==========================  style Nav ==================================

let change = document.querySelector(".nav");
let logo = document.querySelector(".logo-web");
let title = document.querySelector(".title-logo");
let sup_title = document.querySelector(".sup-title");
let sup_links = document.querySelectorAll(".links a");
let social = document.querySelectorAll(".social a");
let bars = document.querySelector(".bars");

navStyleChangeHandler = () => {

  if (window.scrollY >= 50) {
    change.style.background = "rgba(255, 255, 255, 0.742)";
    change.style.backdropFilter = "blur(5px)";

    change.style.height = "80px";
    change.style.color = "red";
    logo.style.border = "3px solid red";
    title.style.color = "red";
    sup_title.style.color = "red";
    sup_links.forEach((ele) => {
      ele.style.color = "black";
    });
    social.forEach((ele) => {
      ele.style.color = "black";
    });
    bars.style.color = "red";
  } else {
    change.style.background = "rgba(255, 255, 255, 0.0)";
    change.style.height = "100px";
    change.style.backdropFilter = "blur(0px)";
    change.style.color = "white";
    logo.style.border = "3px solid white";
    title.style.color = "white";
    sup_title.style.color = "rgb(163, 163, 163)";
    sup_links.forEach((ele) => {
      ele.style.color = "white";
    });
    social.forEach((ele) => {
      ele.style.color = "white";
    });
    bars.style.color = "white";
  }
};

// ==========================  Button up ==================================

const btn = document.querySelector(".btnUp");
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const upButtonHandler = () => {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

window.onscroll = function () {
  upButtonHandler();
  navStyleChangeHandler();
};
