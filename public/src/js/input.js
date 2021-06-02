/**
 * Changement de couleur de fond de l'input de recherche lorsqu'on tappe du texte dedans (input en mode hamburger)
 */
const searchCache = document.querySelector(".searchCache");
const sousMenuHamburgerCache_search = document.querySelector(
  ".sousMenuHamburgerCache_search"
);

searchCache.addEventListener("input", () => {
  console.log(searchCache.value);
  if (searchCache.value != "") {
    sousMenuHamburgerCache_search.style.background = "rgb(234, 240, 255)";
  } else {
    sousMenuHamburgerCache_search.style.background = "#f3f3f3";
  }
});
