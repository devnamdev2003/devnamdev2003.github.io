"use strict";
// let topbtn = document.querySelector(".topbtn");
// topbtn.addEventListener("click", () => {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
// })

// scroll effect code


// This code adds a scroll listener to the window
window.onscroll = function () {
  scrollFunction();
};

// Set the scrollTop of the document body to 0
document.body.scrollTop = 0;

// Get the height of the window
const w_height = window.innerHeight;

// Get the bounding rectangle for the .about element
const about = document.querySelector(".about").getBoundingClientRect().top;

// Get the bottom of the bounding rectangle for the .span1 element and subtract the window height
let span = document
  .querySelector(".skills .span1")
  .getBoundingClientRect().bottom;
// console.log(span);
span = span - w_height;

// Get the bottom of the bounding rectangle for the .new_pro_img div element and subtract the window height
let iframe1 = document
  .querySelector(".new_pro_img div")
  .getBoundingClientRect().bottom;
iframe1 = iframe1 - w_height;

// Get the bottom of the bounding rectangle for the .new_pro2_img2 div element and subtract the window height
let iframe2 = document
  .querySelector(".new_pro2_img2 div")
  .getBoundingClientRect().bottom;
iframe2 = iframe2 - w_height;

// Get the bottom of the bounding rectangle for the .new_pro3_img div element and subtract the window height
let iframe3 = document
  .querySelector(".new_pro3_img div")
  .getBoundingClientRect().bottom;
iframe3 = iframe3 - w_height;

// Get the bottom of the bounding rectangle for the .new_pro3_img div element and subtract the window height
let iframe4 = document
  .querySelector(".new_pro4_img div")
  .getBoundingClientRect().bottom;
iframe4 = iframe4 - w_height;

// This function is called on scroll
function scrollFunction() {
  // if (document.documentElement.scrollTop > about) {
  //       topbtn.style.display = "block";
  // } else {
  //       topbtn.style.display = "none";
  // }

  // If the scrollTop of the document is greater than the .span1 element's bottom position plus 100 pixels, animate the .skill_span elements to slide in from the left
  if (document.documentElement.scrollTop > span + 100) {
    const even = document.querySelectorAll(".skill .skill_span ");
    for (let i = 0; i < even.length; i++) {
      even[i].style.left = "0%";
      even[i].style.position = "relative";
      even[i].style.opacity = "1";
    }
  } else {// Otherwise, animate the .skill_span elements to slide out to the left
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

  // If the scrollTop of the document is greater than the .new_pro_img div element's bottom position plus 20 pixels, animate the .new_pro_img div element to slide in from the left
  if (document.documentElement.scrollTop > iframe1 + 20) {
    const img = document.querySelector(".new_pro_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  }
  else {// Otherwise, animate the .new_pro_img div element to slide out to the left
    const img = document.querySelector(".new_pro_img div");
    img.style.left = "-100%";
    img.style.opacity = "0";
  }
  if (document.documentElement.scrollTop > iframe2 + 20) {
    const img = document.querySelector(".new_pro2_img2 div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro2_img2 div");
    img.style.left = "100%";
    img.style.opacity = "0";
  } if (document.documentElement.scrollTop > iframe3 + 20) {
    const img = document.querySelector(".new_pro3_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro3_img div");
    img.style.left = "-100%";
    img.style.opacity = "0";
  }
  if (document.documentElement.scrollTop > iframe4 + 20) {
    const img = document.querySelector(".new_pro4_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro4_img div");
    img.style.left = "100%";
    img.style.opacity = "0";
  }
}

// pc assistant image viwer

// Select the image slider and left arrow elements
const slider_img = document.querySelector(".outer_iframe .img .inner_img");
const l_arrow = document.querySelector(".l_arrow");

// Initialize a counter for the image position and hide the left arrow
let j = 0;
l_arrow.style.opacity = "0";

// Add a click event listener to the left arrow
l_arrow.addEventListener("click", (e) => {

  // Hide the left arrow if the image is at the beginning
  if (j == 1) {
    l_arrow.style.opacity = "0";
  }

  // Move the image to the left if not at the beginning and show the right arrow
  if (j > 0) {
    r_arrow.style.opacity = "1";
    j = j - 1;
    let left = 100 * j;
    slider_img.style.left = `-${left}%`;
  }
  // console.log(j)
});


// Select the right arrow element
const r_arrow = document.querySelector(".r_arrow");

// Add a click event listener to the right arrow
r_arrow.addEventListener("click", (e) => {

  // Hide the right arrow if the image is at the end
  if (j == 6) {
    r_arrow.style.opacity = "0";
  }

  // Move the image to the right if not at the end and show the left arrow
  if (j < 7) {
    l_arrow.style.opacity = "1";
    j = j + 1;
    let left = 100 * j;
    slider_img.style.left = `-${left}%`;
  }
  // console.log(j)
});

// view more function
// Get the bottom position of element with class "new_project"
const pro = document
  .querySelector(".new_project")
  .getBoundingClientRect().bottom;

// Get the body element
const body = document.querySelector("body");

// Get the element with class "main_code"
const main_code = document.querySelector(".main_code");

// Get all the elements with class "hidden" that are inside an element with class "certficate"
const hidden = document.querySelectorAll(".certficate .hidden");

// Set the display property of the first element in "hidden" to "none"
hidden[0].style.display = "none";

function view() {
  // console.log(hidden[0].style.display);
  // Get the element with class "view_more"
  const hide_btn = document.querySelector(".certification .view_more");

  // If the display property of the first element in "hidden" is "block"
  if (hidden[0].style.display == "block") {

    // Loop through each element in "hidden" and set their display property to "none"
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "none";
    }

    // Change the text of the "view more" button to "view more"
    hide_btn.textContent = "view more";
  }

  // If the display property of the first element in "hidden" is "none"
  else if (hidden[0].style.display == "none") {

    // Loop through each element in "hidden" and set their display property to "block"
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "block";
    }

    // Change the text of the "view more" button to "view less"
    hide_btn.textContent = "view less";
  }
}

// dark mode code
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
