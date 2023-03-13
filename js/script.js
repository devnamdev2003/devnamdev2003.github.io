"use strict";
// let topbtn = document.querySelector(".topbtn");
// topbtn.addEventListener("click", () => {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
// })
window.onscroll = function () {
  scrollFunction();
};
document.body.scrollTop = 0;

const w_height = window.innerHeight;

const about = document.querySelector(".about").getBoundingClientRect().top;

let span = document
  .querySelector(".skills .span1")
  .getBoundingClientRect().bottom;
// console.log(span);
span = span - w_height;

let iframe1 = document
  .querySelector(".new_pro_img div")
  .getBoundingClientRect().bottom;
iframe1 = iframe1 - w_height;
let iframe2 = document
  .querySelector(".new_pro2_img div")
  .getBoundingClientRect().bottom;
iframe2 = iframe2 - w_height;

function scrollFunction() {
  // if (document.documentElement.scrollTop > about) {
  //       topbtn.style.display = "block";
  // } else {
  //       topbtn.style.display = "none";
  // }

  if (document.documentElement.scrollTop > span + 100) {
    const even = document.querySelectorAll(".skill .skill_span ");
    for (let i = 0; i < even.length; i++) {
      even[i].style.left = "0%";
      even[i].style.position = "relative";
      even[i].style.opacity = "1";
    }
  } else {
    const even = document.querySelectorAll(".skill .skill_span ");
    for (let i = 0; i < even.length; i++) {
      if (i % 2 == 0) {
        even[i].style.left = "-40%";
      } else {
        even[i].style.left = "-10%";
      }
      even[i].style.position = "relative";
      even[i].style.opacity = "0";
    }
  }

  if (document.documentElement.scrollTop > iframe1 + 20) {
    const img = document.querySelector(".new_pro_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro_img div");
    img.style.left = "-100%";
    img.style.opacity = "0";
  }
  if (document.documentElement.scrollTop > iframe2 + 20) {
    const img = document.querySelector(".new_pro2_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro2_img div");
    img.style.left = "100%";
    img.style.opacity = "0";
  }
}
const slider_img = document.querySelector(".outer_iframe .img .inner_img");
const l_arrow = document.querySelector(".l_arrow");
let j = 0;
l_arrow.style.opacity = "0";

l_arrow.addEventListener("click", (e) => {
  if (j == 1) {
    l_arrow.style.opacity = "0";
  }
  if (j > 0) {
    r_arrow.style.opacity = "1";
    j = j - 1;
    let left = 100 * j;
    slider_img.style.left = `-${left}%`;
  }
  // console.log(j)
});
const r_arrow = document.querySelector(".r_arrow");
r_arrow.addEventListener("click", (e) => {
  if (j == 6) {
    r_arrow.style.opacity = "0";
  }
  if (j < 7) {
    l_arrow.style.opacity = "1";
    j = j + 1;
    let left = 100 * j;
    slider_img.style.left = `-${left}%`;
  }
  // console.log(j)
});
const pro = document
  .querySelector(".new_project")
  .getBoundingClientRect().bottom;
const body = document.querySelector("body");
const main_code = document.querySelector(".main_code");
const hidden = document.querySelectorAll(".certficate .hidden");
hidden[0].style.display = "none";
function view() {
  // console.log(hidden[0].style.display);
  const hide_btn = document.querySelector(".certification .view_more");
  if (hidden[0].style.display == "block") {
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "none";
    }
    hide_btn.textContent = "view more";
  } else if (hidden[0].style.display == "none") {
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "block";
    }
    hide_btn.textContent = "view less";
  }
}

const dark = document.querySelector(".dark");
const dark_btn = document.querySelector("#light_btn");
const not_dark = document.querySelectorAll("#light");
let get = true;
if (localStorage.getItem("mode") == "true") {
  dark_btn.style.filter = "invert(100%)";
  dark.style.filter = "invert(100%)";
  get = false;
  for (let i = 0; i < not_dark.length; i++) {
    not_dark[i].style.filter = "invert()";
    not_dark[i].style.boxShadow = "none";
  }
  dark_btn.setAttribute(
    "src",
    "https://img.icons8.com/nolan/64/00C6FF/0072FF/sun.png"
  );
} else if (localStorage.getItem("mode") == "false") {
  dark_btn.setAttribute(
    "src",
    "https://img.icons8.com/nolan/64/00C6FF/0072FF/bright-moon.png"
  );
  dark_btn.style.filter = "invert(0%)";
  dark.style.filter = "invert(0%)";
  get = true;
  for (let i = 0; i < not_dark.length; i++) {
    not_dark[i].style.filter = "invert(0)";
    not_dark[i].style.boxShadow =
      "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white";
  }
}
dark_btn.addEventListener("click", () => {
  if (get) {
    dark_btn.style.filter = "invert(100%)";
    dark.style.filter = "invert(100%)";
    get = false;
    localStorage.setItem("mode", "true");
    for (let i = 0; i < not_dark.length; i++) {
      not_dark[i].style.filter = "invert()";
      not_dark[i].style.boxShadow = "none";
    }
    dark_btn.setAttribute(
      "src",
      "https://img.icons8.com/nolan/64/00C6FF/0072FF/sun.png"
    );
  } else {
    dark_btn.setAttribute(
      "src",
      "https://img.icons8.com/nolan/64/00C6FF/0072FF/bright-moon.png"
    );
    dark_btn.style.filter = "invert(0%)";
    dark.style.filter = "invert(0%)";
    get = true;
    localStorage.setItem("mode", "false");
    for (let i = 0; i < not_dark.length; i++) {
      not_dark[i].style.filter = "invert(0)";
      not_dark[i].style.boxShadow =
        "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white";
    }
  }
});
