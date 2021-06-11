const clickTiroir4 = document.querySelector(".clickTiroir4");
const tiroir4 = document.querySelector(".tiroir4");
const tiroir4_P = document.querySelector(".tiroir4 > ul");
const iconeTiroir4 = document.querySelector(".clickTiroir4 > .iconeTiroir2");

const clickTiroir5 = document.querySelector(".clickTiroir5");
const tiroir5 = document.querySelector(".tiroir5");
const tiroir5_P = document.querySelector(".tiroir5 > ul > li");
const iconeTiroir5 = document.querySelector(".clickTiroir5 > .iconeTiroir2");

tiroir4.classList.toggle("tiroirReduce");
tiroir4_P.classList.toggle("hideText");

tiroir5.classList.toggle("tiroirReduce");
tiroir5_P.classList.toggle("hideText");

clickTiroir4.addEventListener("click", () => {
  tiroir4.classList.toggle("tiroirReduce");
  tiroir4_P.classList.toggle("hideText");
  iconeTiroir4.classList.toggle("hideText");
});
clickTiroir5.addEventListener("click", () => {
  tiroir5.classList.toggle("tiroirReduce");
  tiroir5_P.classList.toggle("hideText");
  iconeTiroir5.classList.toggle("hideText");
});
