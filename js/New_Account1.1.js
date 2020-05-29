var submitButton = document.getElementById("submitButton");

submitButton.onclick=function(){
    var userName=document.getElementById("userName");
    var userEmail=document.getElementById("userEmail");
    var userPassword=document.getElementById("userPassword");
    var userRetypePassword=document.getElementById("userRetypePassword");
    var genderCheckboxes=document.getElementsByName("gender");
    var userGender='';
    var userBirthday='';
    var userAddress= document.getElementById("userAddress");
    var userCountry=document.getElementById("userCountry");
    var userGenre1=document.getElementById("userGenre1");
    var userGenre2=document.getElementById("userGenre2");
    var userGenre3=document.getElementById("userGenre3");
    var picture=document.getElementById("Picture");
    var picture2=picture.value.split("\\");
    var picture=picture2[picture2.length-1];

    if(genderCheckboxes[0].checked==true)
    userGender="M";
    else if(genderCheckboxes[1].checked==true)
    userGender="F";
    else if(genderCheckboxes[2].checked==true)
    userGender="AH";


    var D=document.getElementById("D");
    var M=document.getElementById("M");
    var Y=document.getElementById('Y');

    if(Y.value=='');
    else if(Y.value!=''){
        userBirthday=D.value+'.'+M.value+'.'+Y.value;
    }




    console.log(userName.value);
    console.log(userEmail.value);
    console.log(userPassword.value);
    console.log(userRetypePassword.value);
    console.log(userGender);
    console.log(userBirthday);
    console.log(userAddress.value);
    console.log(userCountry.value);
    console.log(userGenre1.value);
    console.log(userGenre2.value);
    console.log(userGenre3.value);
    console.log(picture);
    
/*
    var data =userName.value+'~'+userEmail.value+'~'+userPassword.value;

    var loginRequest = new XMLHttpRequest();
    loginRequest.open('POST', '/loginRequest');
    loginRequest.setRequestHeader("Content-Type", "application/javascript");
    loginRequest.onload=function(){
        console.log(loginRequest.responseText);
        var ok=loginRequest.responseText;
        if(ok>0){
            window.location.href="BoRe_home_LoggedIn1.1.html";
        }
        else{
            alert("User does not exist");
        }
       };
       
    loginRequest.send(data);
    */
}