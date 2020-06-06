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

var i=true;
function read(){
  if(i==true){
    document.getElementById("more").style.display="inline";
    document.getElementById("dots").style.display="none";
    document.getElementById("read-more-btn").innerHTML="Read Less";
    i=false;
  }
  else{
    document.getElementById("read-more-btn").innerHTML="Read More";
    document.getElementById("more").style.display="none";
    document.getElementById("dots").style.display="inline";
    i=true;
  }
};