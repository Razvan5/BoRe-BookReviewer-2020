var groupID=-1;  //o sa-l folosim pt chat

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
    if (ok == 1) {
      //request de luat grupuri
      var getGroupsRequest = new XMLHttpRequest();
      getGroupsRequest.open('POST', '/getGroupsRequest');
      getGroupsRequest.setRequestHeader("Content-Type", "application/javascript");
      getGroupsRequest.onload = function () {
        console.log(getGroupsRequest.responseText);
        var groups = JSON.parse(getGroupsRequest.responseText);
        var groupTable = document.getElementById("groupTable");
        groupTable.innerHTML = '';
        var htmlString = '<tr id="column-names"><th>IMAGE</th><th>NAME</th><th>ABOUT</th></tr>';
        for (i = 0; i < groups.length; i++) {
          htmlString += '<tr><td><img src="../' + groups[i].groupPhoto + '" alt="profile" class="account-image"></td><td>' + groups[i].groupName + '</td><td>' + groups[i].groupDescription + '</td></tr>';
        }
        groupTable.innerHTML = htmlString;
      }
      getGroupsRequest.send(receiveduserID2.toString());

    }
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


window.onclick = function (event) {
  if (event.target.matches(".account-image")) {
    var theImage = event.target;
    var linia = theImage.parentNode.parentNode;
    var groupName = linia.children[1];
    console.log(groupName.innerText);
    groupID = groupName.innerText.split(':')[1].split(";")[0];
    console.log(groupID);
    var messagesRequest = new XMLHttpRequest();
    messagesRequest.open('POST', '/messagesRequest');
    messagesRequest.setRequestHeader("Content-Type", "application/javascript");
    messagesRequest.onload = function () {
      console.log(messagesRequest.responseText);
      var chat = JSON.parse(messagesRequest.responseText);
      var messages = document.getElementById("page");
      messages.innerHTML = '';
      var htmlString = '';
      for (i = 0; i < chat.length; i++)
        for (j = i; j < chat.length; j++)
          if (chat[i].order> chat[j].order) {
            var aux = chat[i];
            chat[i]= chat[j];
            chat[j] = aux;
          }
      for (i = 0; i < chat.length; i++) {
        htmlString += '<div class="comment others">'+chat[i].userName+':<br>'+chat[i].message+'</div>';
      }
      messages.innerHTML=htmlString;
    }

    messagesRequest.send(groupID.toString());
  }

}


var submitButton=document.getElementById("submit-btn");
submitButton.onclick=function(){
    var textArea=document.getElementById("comment-text-area");
    console.log(textArea.value);
    var receiveduserID = document.cookie.toString();
    receiveduserID2 = receiveduserID.split('=')[1];
    console.log(receiveduserID2);
    var data={
      groupID : groupID,
      userID : receiveduserID2,
      message : textArea.value
    }
    var temp=JSON.stringify(data);
    data=temp;
    console.log(data);
    var postMessage = new XMLHttpRequest();
    postMessage.open('POST', '/postMessage');
    postMessage.setRequestHeader("Content-Type", "application/javascript");
    postMessage.onload = function () {
      console.log(postMessage.responseText);
      var chat = JSON.parse(postMessage.responseText);
      var messages = document.getElementById("page");
      messages.innerHTML = '';
      var htmlString = '';
      for (i = 0; i < chat.length; i++)
        for (j = i; j < chat.length; j++)
          if (chat[i].order> chat[j].order) {
            var aux = chat[i];
            chat[i]= chat[j];
            chat[j] = aux;
          }
      for (i = 0; i < chat.length; i++) {
        htmlString += '<div class="comment others">'+chat[i].userName+':<br>'+chat[i].message+'</div>';
      }
      messages.innerHTML=htmlString;
      textArea.value='';
    }

    postMessage.send(data);
}
