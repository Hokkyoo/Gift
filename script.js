const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const moreBtn = document.querySelector(".more-btn");

moreBtn.style.display = "none";

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I love you too ❤️";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  moreBtn.style.display = "";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

moreBtn.addEventListener("click", () => {
  window.location.href = "https://hokkyoo.github.io/flower/";
})