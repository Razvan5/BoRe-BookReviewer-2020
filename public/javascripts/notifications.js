window.onload=function(){
  console.log(document.cookie.toString());
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