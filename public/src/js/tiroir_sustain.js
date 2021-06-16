const clickTiroir4 = document.querySelector(".clickTiroir4");
const tiroir4 = document.querySelector(".tiroir4");
const tiroir4_P = document.querySelector(".tiroir4 > p");
const iconeTiroir4 = document.querySelector(".clickTiroir4 > .iconeTiroir2");

tiroir4.classList.toggle("tiroirReduce");
tiroir4_P.classList.toggle("hideText");

clickTiroir4.addEventListener("click", () => {
  tiroir4.classList.toggle("tiroirReduce");
  tiroir4_P.classList.toggle("hideText");
  iconeTiroir4.classList.toggle("hideText");
});
