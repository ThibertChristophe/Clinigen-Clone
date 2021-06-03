/**
 * Pas encore utilisé
 * */
const mainHeaderHealtcare_contain = document.querySelector(
  ".mainHeaderHealtcare_contain"
);
const menuFixedHealt = document.querySelector(".menuFixedHealt");

const lienHealt = document.querySelectorAll(".menuFixedHealt > ul > li > a");

let menuFixed_coord;
let mainHeader_containt_coord;

let fixed = false;
document.addEventListener("scroll", () => {
  menuFixed_coord = menuFixedHealt.getBoundingClientRect();
  mainHeader_containt_coord =
    mainHeaderHealtcare_contain.getBoundingClientRect();
  /** Methode pour detacher le menu et le rendre fixe et le faire suivre le scroll puis le remettre en place en revenant en haut de page */
  if (menuFixed_coord.top <= 143) {
    if (fixed === false) {
      menuFixedHealt.style.background = "rgba(0,27,43,0.9)";
      menuFixedHealt.style.position = "fixed";
      menuFixedHealt.style.top = "140px";
      lienHealt.item(0).style.color = "#8cdb1f";
      fixed = true;
    }
  }
  if (fixed) {
    if (mainHeader_containt_coord.top >= -157) {
      menuFixedHealt.style.background = "#005052";
      menuFixedHealt.style.position = "relative";
      menuFixedHealt.style.top = "0";
      lienHealt.item(0).style.color = "rgb(185, 185, 185)";
      fixed = false;
    }
  }
});
