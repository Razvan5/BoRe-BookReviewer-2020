var deschis=document.getElementById('deschis');
deschis.style.transition="1s";
    deschis.style.transform="rotateY(-145deg)";

var card=document.getElementById('card');
card.style.transition="1s";
card.style.boxShadow="inset 20px 0 50px rgba(0,0,0,.5)";

var searchResults=document.getElementById("searchResults");

var searchButton=document.getElementById("searchButton");

searchButton.onclick=function(){
    searchResults.style.display="flex";
}

var clearButton=document.getElementById("clearButton");
clearButton.onclick=function(){
    searchResults.style.display="none";
}



