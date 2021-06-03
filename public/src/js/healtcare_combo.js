/**
 * Gere les sous menu des combo du formulaire
 */
const formulaire_combo1 = document.querySelector(".formulaire_combo1");
const formulaire_combo2 = document.querySelector(".formulaire_combo2");
const formulaire_combo3 = document.querySelector(".formulaire_combo3");
const formulaire_sousMenu1 = document.querySelector(".formulaire_sousMenu1");
const formulaire_sousMenu2 = document.querySelector(".formulaire_sousMenu2");
const formulaire_sousMenu3 = document.querySelector(".formulaire_sousMenu3");

formulaire_combo1.addEventListener("click", () => {
  formulaire_sousMenu1.classList.toggle("show");
  formulaire_sousMenu2.classList.remove("show");
  formulaire_sousMenu3.classList.remove("show");
});

formulaire_combo2.addEventListener("click", () => {
  formulaire_sousMenu2.classList.toggle("show");
  formulaire_sousMenu1.classList.remove("show");
  formulaire_sousMenu3.classList.remove("show");
});

formulaire_combo3.addEventListener("click", () => {
  formulaire_sousMenu3.classList.toggle("show");
  formulaire_sousMenu1.classList.remove("show");
  formulaire_sousMenu2.classList.remove("show");
});

const formulaire_option1 = document.querySelectorAll(".formulaire_option1");

formulaire_option1.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    formulaire_combo1.innerHTML = e.innerHTML;
    formulaire_sousMenu1.classList.toggle("show");
  });
});

const formulaire_option2 = document.querySelectorAll(".formulaire_option2");

formulaire_option2.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    formulaire_combo2.innerHTML = e.innerHTML;
    formulaire_sousMenu2.classList.toggle("show");
  });
});

const formulaire_option3 = document.querySelectorAll(".formulaire_option3");

formulaire_option3.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    formulaire_combo3.innerHTML = e.innerHTML;
    formulaire_sousMenu3.classList.toggle("show");
  });
});
