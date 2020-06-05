var searchResults=document.getElementById("searchResults");

var searchButton=document.getElementById("searchButton");

searchButton.onclick=function(){                                        //cand dam click la Search
    var searchName=document.getElementById("search");                  //preluam ce a scris userul
    var searchCriterium=document.getElementById("What");               //preluam ce categorie a ales sa caute (Books, By Author, By Genre)
    console.log(searchName.value);
    console.log(searchCriterium.value);

    var data={
        searchName : searchName.value,
        searchCriterium : searchCriterium.value
    }
    var stringify=JSON.stringify(data);
    var data=stringify;                                               //construim obiectul si il facem string

    var searchRequest = new XMLHttpRequest();                        //facem un request
    searchRequest.open('POST', '/searchRequest');
    searchRequest.setRequestHeader("Content-Type", "application/javascript");
    searchRequest.onload = function () {
        console.log(searchRequest.responseText);
        searchResults.innerHTML='';
        searchResults.innerHTML=searchRequest.responseText;
        searchResults.style.display="flex";
    };

    searchRequest.send(data);

    
}




var clearButton=document.getElementById("clearButton");
clearButton.onclick=function(){                                   //cand dam click la Clear
    searchResults.style.display="none";
}


window.onclick=function(event){
    if(event.target.matches(".viewUserButton")){
        window.location.href="My_Account1.1.html";
    }
}
