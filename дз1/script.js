
const firstText = document.querySelector(".initial-text");
const secondText = document.querySelector(".magic-text");
const magicButton = document.getElementById("toggleButton");

magicButton.addEventListener("click", () => {
  if (firstText.classList.contains("hidden")) {
    firstText.classList.remove("hidden");
    secondText.classList.add("hidden");
  } else {
    firstText.classList.add("hidden");
    secondText.classList.remove("hidden");
  }
});
