var searchButton=document.getElementById("searchButton");
var results=document.getElementById("results");

searchButton.addEventListener("click",function(){
    results.style.display="flex";
});

window.onclick=function(event){
    if(event.target.matches(".viewUserButton")){
        window.location.href="My_Account1.1.html";
    }
}