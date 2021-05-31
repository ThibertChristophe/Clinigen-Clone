const menuHamburger = document.querySelector(".menuHamburger");
const sousMenuHamburgerCache = document.querySelector(
  ".sousMenuHamburgerCache"
);

const headerHamburger = document.querySelector(".headerHamburger");
const fermer = document.querySelector(".fermer");

menuHamburger.addEventListener("click", () => {
  sousMenuHamburgerCache.classList.toggle("showMenuHamb");
  headerHamburger.classList.toggle("darkerMain");

  main.classList.toggle("darkerMain");
});

fermer.addEventListener("click", () => {
  sousMenuHamburgerCache.classList.toggle("showMenuHamb");
  headerHamburger.classList.toggle("darkerMain");

  main.classList.toggle("darkerMain");
});
