let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector(".right-nav .close-button").onclick = () => {
  document.querySelector(".right-nav").classList.remove("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parallax").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".home-parallax").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const onRegisterSubmit = ({ email, password, confirmPassword }) => {
  console.log({ email, password, confirmPassword });
  if (password === "" || password !== confirmPassword || !email.includes("@"))
    return false;

  return true;
};

const onLoginSubmit = ({ email, password }) => {
  if (password === "" || !email.includes("@")) return false;

  return true;
};

let showSigninForm = () => {
  console.log("I am clicked");
  const confirmPassword = document.getElementById("confirm-password");
  const submitButton = document.getElementById("submit-button");
  const formBottomText = document.getElementById("form-bottom-text");
  const formTitle = document.getElementById("form-title");
  formTitle.innerHTML = "User login";

  submitButton.value = "login";
  formBottomText.innerHTML =
    "don't have an account   <a onclick='showRegisterFrom()' id='create-account' href='#'>create one</a>";
  confirmPassword.style.display = "none";
};
const showRegisterFrom = () => {
  console.log("I am clicked");
  const confirmPassword = document.getElementById("confirm-password");
  const submitButton = document.getElementById("submit-button");
  const formBottomText = document.getElementById("form-bottom-text");
  const formTitle = document.getElementById("form-title");
  formTitle.innerHTML = "User register";
  submitButton.value = "register";
  formBottomText.innerHTML =
    "<a onclick='showSigninForm()' style='cursor:pointer;'>log in</a>";
  confirmPassword.style.display = "block";
};

const signinOrRegister = () => {
  const submitButton = document.getElementById("submit-button");
  const value = submitButton.value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const loginContainer = document.querySelector(".login-form-container");
  let submitResult = false;
  if (value === "register") {
    submitResult = onRegisterSubmit({ email, password, confirmPassword });
  } else {
    submitResult = onLoginSubmit({ email, password, confirmPassword });
  }

  if (submitResult)
    document.querySelector(".login-form-container").classList.remove("active");
};

// let createAccount = document.getElementById("create-account");
// createAccount.addEventListener("click", showRegisterFrom);
