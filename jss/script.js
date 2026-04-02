/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form ",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Quality Assurance.",
    "Data Analyst.",
    "Web Developer.",
    "UI/UX Designer.",
    "Problem Solver.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*==================== email js ====================*/
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    emailjs
      .send("service_5bflj9h", "template_6vwyaqa", {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        mobileNumber: document.getElementById("mobileNumber").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      })
      .then(
        function (response) {
          alert("Email berhasil dikirim!");
          document.getElementById("contact-form").reset(); // Reset form setelah sukses
        },
        function (error) {
          alert("Gagal mengirim email, coba lagi.");
        }
      );
  });
let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  let slides = document.querySelectorAll(".certificate-slider .slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

document.getElementById("next").onclick = () => showSlide(++slideIndex);
document.getElementById("prev").onclick = () => showSlide(--slideIndex);
