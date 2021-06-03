/**
 * Fait s'accrocher le bandeau de lien et fais defiler la couleur des liens en fonctions du scoll
 * */
const mainHeaderHealtcare_contain = document.querySelector(
  ".mainHeaderHealtcare_contain"
);
const menuFixedHealt = document.querySelector(".menuFixedHealt");

const lienHealt = document.querySelectorAll(".menuFixedHealt > ul > li > a");

// Pour faire defiler le highlight des liens
const contain_L_1 = document.querySelector(".contain_L_1");
const contain_L_2 = document.querySelector(".contain_L_2");
const contain_L_3 = document.querySelector(".contain_L_3");
const contain_L_4 = document.querySelector(".contain_L_4");
let menuFixed_coord;
let mainHeader_containt_coord;
// Pour faire defiler le highlight des liens
let contain_L_1_coord;
let contain_L_2_coord;
let contain_L_3_coord;
let contain_L_4_coord;

let fixed = false;
// Pour accrocher le menu lorsqu'on scroll dessus
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

  /** Methode pour allumer les liens en fonctions du scroll */
  contain_L_1_coord = mainHeaderHealtcare_contain.getBoundingClientRect();
  contain_L_2_coord = mainHeaderHealtcare_contain.getBoundingClientRect();
  contain_L_3_coord = mainHeaderHealtcare_contain.getBoundingClientRect();
  contain_L_4_coord = mainHeaderHealtcare_contain.getBoundingClientRect();
  if (contain_L_1_coord.top <= -927.5) {
    lienHealt.item(1).style.color = "#8cdb1f";
    lienHealt.item(0).style.color = "rgb(185, 185, 185)";
  } else {
    if (fixed === true) {
      lienHealt.item(0).style.color = "#8cdb1f";
    }
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
  }
  if (contain_L_2_coord.top <= -1804) {
    lienHealt.item(2).style.color = "#8cdb1f";
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
  } else {
    lienHealt.item(2).style.color = "rgb(185, 185, 185)";
  }
  if (contain_L_2_coord.top <= -1152.5) {
    lienHealt.item(2).style.color = "#8cdb1f";
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
  } else {
    lienHealt.item(2).style.color = "rgb(185, 185, 185)";
  }
  if (contain_L_3_coord.top <= -1527.5) {
    lienHealt.item(3).style.color = "#8cdb1f";
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
    lienHealt.item(2).style.color = "rgb(185, 185, 185)";
    // lienHealt.item(3).style.color = "rgb(185, 185, 185)";
  } else {
    lienHealt.item(3).style.color = "rgb(185, 185, 185)";
  }
  if (contain_L_4_coord.top <= -2085.5) {
    lienHealt.item(4).style.color = "#8cdb1f";
    lienHealt.item(1).style.color = "rgb(185, 185, 185)";
    lienHealt.item(2).style.color = "rgb(185, 185, 185)";
    lienHealt.item(3).style.color = "rgb(185, 185, 185)";
  } else {
    lienHealt.item(4).style.color = "rgb(185, 185, 185)";
  }
});

/**
 * Scroll lors des click sur les sous menu du bandeau au milieu de la page
 */

lienHealt.item(0).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_1.offsetTop - 250, behavior: "smooth" });
});

lienHealt.item(1).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_2.offsetTop - 250, behavior: "smooth" });
});

lienHealt.item(2).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_2.offsetTop, behavior: "smooth" });
});

lienHealt.item(3).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_3.offsetTop - 250, behavior: "smooth" });
});

lienHealt.item(4).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_4.offsetTop - 240, behavior: "smooth" });
});
