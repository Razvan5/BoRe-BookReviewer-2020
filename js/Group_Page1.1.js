var searchResults=document.getElementById("searchResults");

var searchButton=document.getElementById("searchButton");

searchButton.onclick=function(){
    searchResults.style.display="flex";
}

var clearButton=document.getElementById("clearButton");
clearButton.onclick=function(){
    searchResults.style.display="none";
}
