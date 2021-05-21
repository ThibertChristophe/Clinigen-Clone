const mainText = document.querySelector(".mainText1");

lien.item(0).addEventListener("click", () => {
  window.scrollTo({ top: mainText.offsetTop - 250, behavior: "smooth" });
});

lien.item(1).addEventListener("click", () => {
  window.scrollTo({ top: rightMedicine.offsetTop - 200, behavior: "smooth" });
});

lien.item(2).addEventListener("click", () => {
  window.scrollTo({ top: rightPatient.offsetTop - 200, behavior: "smooth" });
});

lien.item(3).addEventListener("click", () => {
  window.scrollTo({ top: rightTime.offsetTop - 200, behavior: "smooth" });
});
