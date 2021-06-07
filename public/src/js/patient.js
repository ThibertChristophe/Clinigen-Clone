/**
 * Fait s'accrocher le bandeau de lien et fais defiler la couleur des liens en fonctions du scoll
 * */
const mainHeaderHealtcare_contain = document.querySelector(
  ".mainHeaderPatient_contain"
);
const menuFixedHealt = document.querySelector(".menuFixedPatient");

const lienHealt = document.querySelectorAll(".menuFixedPatient > ul > li > a");

// Pour faire defiler le highlight des liens
const contain_L_1 = document.querySelector(".contain_1");

let menuFixed_coord;
let mainHeader_containt_coord;
// Pour faire defiler le highlight des liens
let contain_L_1_coord;

let fixed = false;
// Pour accrocher le menu lorsqu'on scroll dessus
document.addEventListener("scroll", () => {
  menuFixed_coord = menuFixedHealt.getBoundingClientRect();
  mainHeader_containt_coord =
    mainHeaderHealtcare_contain.getBoundingClientRect();
  /** Methode pour detacher le menu et le rendre fixe et le faire suivre le scroll puis le remettre en place en revenant en haut de page */
  console.log(menuFixed_coord.top);
  if (menuFixed_coord.top <= 150) {
    if (fixed === false) {
      menuFixedHealt.style.background = "rgba(0,27,43,0.9)";
      menuFixedHealt.style.position = "fixed";
      menuFixedHealt.style.top = "140px";
      lienHealt.item(0).style.color = "#8cdb1f";
      fixed = true;
    }
  }
  if (fixed) {
    if (mainHeader_containt_coord.top >= -75) {
      menuFixedHealt.style.background = "#005052";
      menuFixedHealt.style.position = "relative";
      menuFixedHealt.style.top = "0";
      lienHealt.item(0).style.color = "rgb(185, 185, 185)";
      fixed = false;
    }
  }

  /** Methode pour allumer les liens en fonctions du scroll */
  contain_L_1_coord = mainHeaderHealtcare_contain.getBoundingClientRect();

  if (contain_L_1_coord.top <= -537.5) {
    lienHealt.item(0).style.color = "rgb(185, 185, 185)";
  } else {
    if (fixed === true) {
      lienHealt.item(0).style.color = "#8cdb1f";
    }
  }
});

/**
 * Scroll lors des click sur les sous menu du bandeau au milieu de la page
 */

lienHealt.item(0).addEventListener("click", () => {
  window.scrollTo({ top: contain_L_1.offsetTop - 250, behavior: "smooth" });
});
