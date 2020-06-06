const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
optionsContainer.style.display="none";

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  optionsContainer.style.display="initial";
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML + "<img src=\"../images/arrow-down.png\" alt=\"arrow\" class=\"arrow\">";
    optionsContainer.classList.remove("active");
    optionsContainer.style.display="none";
  });
});

