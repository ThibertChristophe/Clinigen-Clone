/**
 * Passage en mode hamburger gestion du menu header
 */

const menuHamburger = document.querySelector(".menuHamburger");
const sousMenuHamburgerCache = document.querySelector(
  ".sousMenuHamburgerCache"
);

const headerHamburger = document.querySelector(".headerHamburger");
const fermer = document.querySelector(".fermer");

const toggleNav1 = document.querySelector(".toggleNav1");
const sousMenuHamburger_cache1 = document.querySelector(
  ".sousMenuHamburger_cache1"
);
const menuBack = document.querySelector(".menuBack");

menuHamburger.addEventListener("click", () => {
  sousMenuHamburgerCache.classList.toggle("showMenuHamb");
  headerHamburger.classList.toggle("darkerMain");

  main.classList.toggle("darkerMain");
});

fermer.addEventListener("click", () => {
  sousMenuHamburgerCache.classList.toggle("showMenuHamb");
  headerHamburger.classList.toggle("darkerMain");
  sousMenuHamburger_cache1.classList.remove("showMenuHamb");
  main.classList.toggle("darkerMain");
});

toggleNav1.addEventListener("click", () => {
  sousMenuHamburger_cache1.classList.toggle("showMenuHamb");
});

menuBack.addEventListener("click", () => {
  sousMenuHamburger_cache1.classList.toggle("showMenuHamb");
});
