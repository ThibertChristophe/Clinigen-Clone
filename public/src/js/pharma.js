const combo1 = document.querySelector(".combo1");
const combo2 = document.querySelector(".combo2");
const combo3 = document.querySelector(".combo3");
const sousMenu1 = document.querySelector(".sousMenu1");
const sousMenu2 = document.querySelector(".sousMenu2");
const sousMenu3 = document.querySelector(".sousMenu3");

combo1.addEventListener("click", () => {
  sousMenu1.classList.toggle("show");
  sousMenu2.classList.remove("show");
  sousMenu3.classList.remove("show");
});

combo2.addEventListener("click", () => {
  sousMenu2.classList.toggle("show");
  sousMenu1.classList.remove("show");
  sousMenu3.classList.remove("show");
});

combo3.addEventListener("click", () => {
  sousMenu3.classList.toggle("show");
  sousMenu1.classList.remove("show");
  sousMenu2.classList.remove("show");
});

const sousMenu1_item = document.querySelectorAll(".option1");

sousMenu1_item.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    combo1.innerHTML = e.innerHTML;
    sousMenu1.classList.toggle("show");
  });
});

const sousMenu2_item = document.querySelectorAll(".option2");

sousMenu2_item.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    combo2.innerHTML = e.innerHTML;
    sousMenu2.classList.toggle("show");
  });
});

const sousMenu3_item = document.querySelectorAll(".option3");

sousMenu3_item.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.innerHTML);
    combo3.innerHTML = e.innerHTML;
    sousMenu3.classList.toggle("show");
  });
});
