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

const navbarSwitch = document.querySelector(".mobile-navbar-switch");

navbarSwitch.addEventListener("click", () =>{
  const header = document.querySelector("header");
  console.log(header);
  if(header.className!=="active"){
    header.classList.add("active");
  }
  else{
    header.classList.remove("active");
  }
})

const browse = document.querySelector("#browse");
const dropdown = document.querySelector("#browse-dropdown");

browse.addEventListener("click", () =>{
  if(dropdown.style.display==="flex"){
    dropdown.style.display="none";
  }
  else{
    dropdown.style.display="flex";
  }
});

window.addEventListener('click', function(e){   
  if (!document.getElementById('browse').contains(e.target)){
    dropdown.style.display="none";
  }
});