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

window.onload=function(){
  var receiveduserID=document.cookie.toString();
  receiveduserID2=receiveduserID.split('=')[1];
  console.log(receiveduserID2);
  var checkLogin = new XMLHttpRequest();
  checkLogin.open('POST', '/checkLogin');
  checkLogin.setRequestHeader("Content-Type", "application/javascript");
  checkLogin.onload=function(){
        console.log(checkLogin.responseText);
        var ok=checkLogin.responseText;
        console.log(ok);
        if(ok==1);
        else{
          window.location.href="/pages/login.html";
        }
       };
       
       checkLogin.send(receiveduserID2);
}
