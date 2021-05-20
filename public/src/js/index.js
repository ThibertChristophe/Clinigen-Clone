const sousSlideL = document.getElementById("sousSlider_L");
const scgL = document.querySelectorAll(".svg1");
const sousSlideM = document.getElementById("sousSlider_M");
const scgM = document.querySelectorAll(".svg2");
const sousSlideR = document.getElementById("sousSlider_R");
const scgR = document.querySelectorAll(".svg3");

sousSlideL.addEventListener("mouseover", () => {
  scgL.forEach((element) => {
    element.style.fill = "#005052";
  });
});

sousSlideL.addEventListener("mouseout", () => {
  scgL.forEach((element) => {
    element.style.fill = "#8cdb1f";
  });
});

sousSlideM.addEventListener("mouseover", () => {
  scgM.forEach((element) => {
    element.style.fill = "#005052";
  });
});

sousSlideM.addEventListener("mouseout", () => {
  scgM.forEach((element) => {
    element.style.fill = "#8cdb1f";
  });
});

sousSlideR.addEventListener("mouseover", () => {
  scgR.forEach((element) => {
    element.style.fill = "#005052";
  });
});

sousSlideR.addEventListener("mouseout", () => {
  scgR.forEach((element) => {
    element.style.fill = "#8cdb1f";
  });
});
