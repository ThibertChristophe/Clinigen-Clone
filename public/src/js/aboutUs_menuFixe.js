/**
 * Fait s'accrocher le bandeau de lien et fais defiler la couleur des liens en fonctions du scoll
 * */
const mainHeaderProducts = document.querySelector(".mainHeaderProducts");
const menuFixed_about = document.querySelector(".menuFixed_about");

const lienHealt = document.querySelectorAll(".menuFixed_about > ul > li > a");

// Pour faire defiler le highlight des liens
const contain_L_1 = document.querySelector(".contain_L_1");
const contain_L_3 = document.querySelector(".contain_L_3");

let menuFixed_coord;
let mainHeader_containt_coord;
// Pour faire defiler le highlight des liens
let contain_L_1_coord;
let contain_L_3_coord;

let fixed = false;
// Pour accrocher le menu lorsqu'on scroll dessus
document.addEventListener("scroll", () => {
  menuFixed_coord = menuFixed_about.getBoundingClientRect();
  mainHeader_containt_coord = mainHeaderProducts.getBoundingClientRect();
  /** Methode pour detacher le menu et le rendre fixe et le faire suivre le scroll puis le remettre en place en revenant en haut de page */

  if (menuFixed_coord.top <= 145) {
    if (fixed === false) {
      menuFixed_about.style.background = "rgba(0,27,43,0.9)";
      menuFixed_about.style.position = "fixed";
      menuFixed_about.style.top = "140px";
      lienHealt.item(0).style.color = "#8cdb1f";
      fixed = true;
    }
  }
  if (fixed) {
    if (mainHeader_containt_coord.top >= -400) {
      menuFixed_about.style.background = "transparent";
      menuFixed_about.style.position = "absolute";
      menuFixed_about.style.top = " 524px";
      lienHealt.item(0).style.color = "rgb(185, 185, 185)";

      fixed = false;
    }
  }

  /** Methode pour allumer les liens en fonctions du scroll */
  contain_L_1_coord = mainHeaderProducts.getBoundingClientRect();
  contain_L_3_coord = mainHeaderProducts.getBoundingClientRect();
  console.log(contain_L_1_coord.top);
  if (contain_L_1_coord.top <= -1216) {
    lienHealt.item(1).style.color = "#8cdb1f";
    lienHealt.item(0).style.color = "rgb(185, 185, 185)";
  } else {
    if (fixed === true) {
      lienHealt.item(0).style.color = "#8cdb1f";
    }
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
  }
  if (contain_L_3_coord.top <= -1240) {
    lienHealt.item(1).style.color = "#8cdb1f";
    lienHealt.item(0).style.color = "rgb(185, 185, 185)";
  } else {
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
  }
});

/**
 * Scroll lors des click sur les sous menu du bandeau au milieu de la page
 */

lienHealt.item(0).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_1.offsetTop - 250, behavior: "smooth" });
});

lienHealt.item(1).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_3.offsetTop - 280, behavior: "smooth" });
});
