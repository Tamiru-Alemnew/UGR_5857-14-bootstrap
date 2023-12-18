const navList = document.querySelector(".navbar-footer__navigation");
const navToggle = document.querySelector(".fa-bars");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("visible");
})

function typeWriter(text, speed, containerId, callback) {
  let i = 0;
  const textContainer = document.getElementById(containerId);

  function type() {
    if (i < text.length) {
      textContainer.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  type();
}

const textToType = "I'm a full stack web developer";
const typingSpeed = 100;


typeWriter("Hi, I'm Tamiru Alemnew", typingSpeed, "name", function () {
  typeWriter(textToType, typingSpeed, "typewriter-text");
});


let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);


document.addEventListener("DOMContentLoaded", function () {
  const heroImage = document.getElementById("heroImage");
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");

  heroImage.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


