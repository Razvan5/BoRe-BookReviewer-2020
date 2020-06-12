var submitButton=document.getElementById("submit-button");

submitButton.onclick=function(){
    var userName=document.getElementById("username");
    var userEmail=document.getElementById("email");
    var userPassword=document.getElementById("password");
    console.log(userName.value);
    console.log(userEmail.value);
    console.log(userPassword.value);

    var data ={
        name :  userName.value,
        email : userEmail.value,
        password : userPassword.value
    };
    var stringify=JSON.stringify(data);
    data=stringify;


    //requestul de register:
    var registerRequest = new XMLHttpRequest();
    registerRequest.open('POST', '/registerRequest');
    registerRequest.setRequestHeader("Content-Type", "application/javascript");
    registerRequest.onload=function(){
        console.log(registerRequest.responseText);
        var ok=registerRequest.responseText;
        if(ok>0){
            alert("User created");
            logIn();
        }
        else{
            console.log(ok);
            if(ok==-1)
            alert("A User with that e-mail already exists");
            else
            alert("Error. Please try Again");
        }
       };
       
       registerRequest.send(data);







   function logIn(){
    var loginRequest = new XMLHttpRequest();
    loginRequest.open('POST', '/loginRequest');
    loginRequest.setRequestHeader("Content-Type", "application/javascript");
    loginRequest.onload=function(){
        console.log(loginRequest.responseText);
        var ok=loginRequest.responseText;
        if(ok>0){
            console.log(document.cookie.toString());
            var receiveduserID=document.cookie.toString();
            receiveduserID2=receiveduserID.split('=')[1];
            console.log(receiveduserID2);
            window.location.href="/pages/recomandations.html";
        }
        else{
            alert("User does not exist");
        }
       };
       
    loginRequest.send(data);
}
}