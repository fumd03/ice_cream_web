const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open"); // Fixes toggle issue
  const isOpen = navLinks.classList.contains("open");

  // Change icon to close when open
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-2-fill"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".header_image img", {
    duration: 1000,
  });

  ScrollReveal().reveal(".header_content h1", {
    ...ScrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header_content .section_description", {
    ...ScrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header_btn", {
    ...ScrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".header_content .socials", {
    ...ScrollRevealOption,
    delay: 2000,
  });
});

ScrollReveal().reveal(".popular_card", {
  ...ScrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover_card img", {
  ...ScrollRevealOption,
  origion: "left",
});
ScrollReveal().reveal(".discover_card:nth-child(2) img", {
  ...ScrollRevealOption,
  origion: "right",
});

ScrollReveal().reveal(".discover_card_content h4", {
  ...ScrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".discover_card_content .section_description", {
  ...ScrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".discover_card_content h3", {
  ...ScrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".discover_card_btn", {
  ...ScrollRevealOption,
  delay: 2000,
});

document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".banner_content .section_header", {
    ...ScrollRevealOption,
  });

  ScrollReveal().reveal(".banner_content .section_description", {
    ...ScrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".banner_card", {
    ...ScrollRevealOption,
    delay: 1000,
    interval: 500,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".subscribe_content .section_header", {
    ...ScrollRevealOption,
  });

  ScrollReveal().reveal(".subscribe_content .section_description", {
    ...ScrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".subscribe_content form", {
    ...ScrollRevealOption,
    delay: 1000,
  });
});
