const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// Modal
const modal = document.getElementById("email-modal");
const openBtn = document.querySelector(".main-btn");
const openBtn1 = document.querySelector(".main-btn1");
const contactBtn = document.querySelector(".main__btn");
const closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

openBtn1.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//form validation

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function showError(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation error";
}

function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation valid";
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input);
    } else {
      showValid(input);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([name, email, phone]);
});
