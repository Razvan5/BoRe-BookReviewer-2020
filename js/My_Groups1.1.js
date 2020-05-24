window.onload=function(){
var searchButton=document.getElementById("searchButton");
var results=document.getElementById("results");
var createNewGroupButton=document.getElementById("createNewGroupButton");
var newGroup=document.getElementById("newGroup");
var cancel = document.getElementById("cancel");

searchButton.addEventListener("click",function(){
    results.style.display="flex";
});

createNewGroupButton.addEventListener("click",function(){
    newGroup.style.display="flex";
});

cancel.addEventListener("click",function(){
    newGroup.style.display="none";
});

};
