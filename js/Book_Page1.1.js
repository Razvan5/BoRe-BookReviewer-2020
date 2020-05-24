reviewButton=document.getElementById('reviewButton');
reviewDiv =document.getElementById('reviewDiv');
cancelButton = document.getElementById("cancel");

reviewButton.onclick=function(){
    if(reviewDiv.style.display=="flex")
     reviewDiv.style.display='none';
     else reviewDiv.style.display='flex';

}

cancelButton.onclick=function(){
    var reviewTextArea=document.getElementById("reviewTextArea");
    reviewTextArea.value='';
    reviewDiv.style.display='none';
}