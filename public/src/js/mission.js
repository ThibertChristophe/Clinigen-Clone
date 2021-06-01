const mainHeader_containt = document.querySelector(".mainHeader_containt");
const menuFixed = document.querySelector(".menuFixed");

const lien = document.querySelectorAll(".menuFixed > ul > li > a");

const rightMedicine = document.querySelector(".rightMedicine");
const rightPatient = document.querySelector(".rightPatient");
const rightTime = document.querySelector(".rightTime");

let menuFixed_coord;
let mainHeader_containt_coord;
let rightMedicine_coord;
let rightPatient_coord;
let rightTime_coord;

let fixed = false;
document.addEventListener("scroll", () => {
  menuFixed_coord = menuFixed.getBoundingClientRect();
  mainHeader_containt_coord = mainHeader_containt.getBoundingClientRect();

  /** Methode pour detacher le menu et le rendre fixe et le faire suivre le scroll puis le remettre en place en revenant en haut de page */
  if (menuFixed_coord.top <= 140) {
    if (fixed === false) {
      menuFixed.style.background = "rgba(0,27,43,0.9)";
      menuFixed.style.position = "fixed";
      menuFixed.style.top = "140px";
      lien.item(0).style.color = "#8cdb1f";
      fixed = true;
    }
  }
  if (fixed) {
    if (mainHeader_containt_coord.top >= -261) {
      menuFixed.style.background = "transparent";
      menuFixed.style.position = "relative";
      menuFixed.style.top = "0";
      lien.item(0).style.color = "rgb(185, 185, 185)";
      fixed = false;
    }
  }

  rightMedicine_coord = mainHeader_containt.getBoundingClientRect();
  rightPatient_coord = mainHeader_containt.getBoundingClientRect();
  rightTime_coord = mainHeader_containt.getBoundingClientRect();
  /** Methode pour allumer les liens en fonctions du scroll */
  if (rightMedicine_coord.top <= -1031) {
    lien.item(1).style.color = "#8cdb1f";
    lien.item(0).style.color = "rgb(185, 185, 185)";
  } else {
    if (fixed === true) {
      lien.item(0).style.color = "#8cdb1f";
    }
    lien.item(1).style.color = "rgb(185, 185, 185)";
  }
  if (rightPatient_coord.top <= -1804) {
    lien.item(2).style.color = "#8cdb1f";
    lien.item(1).style.color = "rgb(185, 185, 185)";
  } else {
    lien.item(2).style.color = "rgb(185, 185, 185)";
  }

  if (rightTime_coord.top <= -2648) {
    lien.item(3).style.color = "#8cdb1f";
    lien.item(1).style.color = "rgb(185, 185, 185)";
    lien.item(2).style.color = "rgb(185, 185, 185)";
  } else {
    lien.item(3).style.color = "rgb(185, 185, 185)";
  }
});
