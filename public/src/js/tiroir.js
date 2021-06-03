/**
 * Agrandit et reduit les tiroir de la page
 */
const clickTiroir1 = document.querySelector(".clickTiroir1");
const tiroir1 = document.querySelector(".tiroir1");
const tiroir1_P = document.querySelector(".tiroir1 > p");
const iconeTiroir1 = document.querySelector(".clickTiroir1 > .iconeTiroir2");

const clickTiroir2 = document.querySelector(".clickTiroir2");
const tiroir2 = document.querySelector(".tiroir2");
const tiroir2_P = document.querySelector(".tiroir2 > p");
const iconeTiroir2 = document.querySelector(".clickTiroir2 > .iconeTiroir2");

const clickTiroir3 = document.querySelector(".clickTiroir3");
const tiroir3 = document.querySelector(".tiroir3");
const tiroir3_P = document.querySelector(".tiroir3 > p");
const iconeTiroir3 = document.querySelector(".clickTiroir3 > .iconeTiroir2");

tiroir1.classList.toggle("tiroirReduce");
tiroir1_P.classList.toggle("hideText");
tiroir2.classList.toggle("tiroirReduce");
tiroir2_P.classList.toggle("hideText");
tiroir3.classList.toggle("tiroirReduce");
tiroir3_P.classList.toggle("hideText");

clickTiroir1.addEventListener("click", () => {
  tiroir1.classList.toggle("tiroirReduce");
  tiroir1_P.classList.toggle("hideText");
  iconeTiroir1.classList.toggle("hideText");
});
clickTiroir2.addEventListener("click", () => {
  tiroir2.classList.toggle("tiroirReduce");
  tiroir2_P.classList.toggle("hideText");
  iconeTiroir2.classList.toggle("hideText");
});
clickTiroir3.addEventListener("click", () => {
  tiroir3.classList.toggle("tiroirReduce");
  tiroir3_P.classList.toggle("hideText");
  iconeTiroir3.classList.toggle("hideText");
});
