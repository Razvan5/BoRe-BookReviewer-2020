var searchButton=document.getElementById("searchButton");
var results=document.getElementById("results");

searchButton.onclick=function(){                                        //cand dam click la Search
    var userName=document.getElementById("typeUserName");                  //preluam ce a scris userul
    console.log(userName.value);


    var findUserRequest = new XMLHttpRequest();                        //facem un request
    findUserRequest.open('POST', '/findUserRequest');
    findUserRequest.setRequestHeader("Content-Type", "application/javascript");
    findUserRequest.onload = function () {
        console.log(findUserRequest.responseText);
        results.innerHTML='';
        results.innerHTML=findUserRequest.responseText;
        results.style.display="flex";
    };

    findUserRequest.send(userName.value);    //trimitem doar ce a scris userul, nu e nevoie de obiect, JSON, etc

    
}

window.onclick=function(event){
    if(event.target.matches(".viewUserButton")){
        window.location.href="My_Account1.1.html";
    }
}


//typeUserName