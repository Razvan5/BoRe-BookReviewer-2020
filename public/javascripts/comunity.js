window.onload = function () {
  var receiveduserID = document.cookie.toString();
  receiveduserID2 = receiveduserID.split('=')[1];
  console.log(receiveduserID2);
  var checkLogin = new XMLHttpRequest();
  checkLogin.open('POST', '/checkLogin');
  checkLogin.setRequestHeader("Content-Type", "application/javascript");
  checkLogin.onload = function () {
    console.log(checkLogin.responseText);
    var ok = checkLogin.responseText;
    console.log(ok);
    if (ok == 1);
    else {
      window.location.href = "/pages/login.html";
    }
  };

  checkLogin.send(receiveduserID2);
}


//requestul de logout
var logoutButton = document.getElementById("logoutButton");

logoutButton.onclick = function () {
  var receiveduserID = document.cookie.toString();
  var receiveduserID2 = receiveduserID.split('=')[1];
  console.log(receiveduserID2);
  var logoutRequest = new XMLHttpRequest();
  logoutRequest.open('POST', '/logoutRequest');
  logoutRequest.setRequestHeader("Content-Type", "application/javascript");
  logoutRequest.onload = function () {
    console.log(logoutRequest.responseText);
    var ok = logoutRequest.responseText;
    console.log(ok);
    if (ok == -1) {
      document.cookie.toString();
      receiveduserID2 = receiveduserID.split('=')[1];
      console.log(receiveduserID2);
      alert("Logout Successful");
      window.location.href = "/pages/index.html";
    }
    else {
      alert(ok);
      window.location.href = "/pages/index.html";
    }


  }
  logoutRequest.send(receiveduserID2.toString());
}




//cautatul grupurilor:
window.onclick=function(event){
  if (event.target.matches(".fa-search")) {
    var buton = document.getElementById("searchValue");
    var searchWhat = buton.value;
    console.log("searchWhat" + searchWhat);

    var searchGroupRequest= new XMLHttpRequest();
    searchGroupRequest.open('POST', '/searchGroupRequest');
    searchGroupRequest.setRequestHeader("Content-Type", "application/javascript");
    searchGroupRequest.onload = function () {
      console.log(searchGroupRequest.responseText);
      var groups = JSON.parse(searchGroupRequest.responseText);
      console.log(groups);
      var groupsList = document.getElementsByClassName("groups-list")[0];
      console.log(groupsList);
      groupsList.innerHTML = '';
      var htmlString = '';
      for (i = 0; i < groups.length; i++) {
        htmlString += '<div class="group"> <div class="group-image"><img src="../'+groups[i].groupPhoto+'" alt="group-image" class="group-image"> </div> ';
        htmlString+='<div class="group-text"><div class="group-name"><a href="group.html" class="group-title">'+groups[i].groupName+'</a><br><br><br><br><br></div>';
        htmlString+='<div class="group-detail">'+groups[i].groupDescription+'</div></div></div><br><br><br>';
      }
      groupsList.innerHTML=htmlString;
    }

    searchGroupRequest.send(searchWhat.toString());
  }
}