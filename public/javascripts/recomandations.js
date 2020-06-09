  var bookCoverSourceArray;

  for(i=1;i<100;++i){
    bookCoverSourceArray="../images/solaris-cover.png";//ne imaginam ca avem lista cu imagini
  }


  
  var bookshelfwrapper=document.getElementById("bookshelf-wrapper");
  console.log(bookshelfwrapper);
  
  var bookshelf=document.createElement("div");
  bookshelf.id="bookshelf";
  bookshelfwrapper.appendChild(bookshelf);

  
  /* <input type="radio" name="star-1" id="star1-1"><label for="star1-1"></label> */
  var selectedNr=1;
  var optionsContainerNr=1;
  var optionNr=1;

  for(row=1;row<=5;++row){
    var bookrowshelf=document.createElement("div");
    bookrowshelf.className="bookrow-shelf";
    bookshelf.appendChild(bookrowshelf);

    var bookrow=document.createElement("div");
    bookrow.className="bookrow";


    for(book=1;book<=5;++book){
     
      var bookDiv = document.createElement("div");
      bookDiv.className="book";

      var reviewStars = document.createElement("div");
      reviewStars.className="review-stars";

      var readstate=document.createElement("div");
      readstate.className="read-state";

      var selectContainer = document.createElement("div");
      selectContainer.className="select-container";

      var arrowDown = document.createElement("img");
      arrowDown.src="../images/arrow-down.png";
      arrowDown.alt="V";
      arrowDown.className="arrow";

      var selectedDiv=document.createElement("div");
      selectedDiv.className="selected "+selectedNr;
      selectedNr++;
      var text = document.createTextNode("To Read");
      selectedDiv.appendChild(text);
      selectedDiv.appendChild(arrowDown);

      var optionsContainerDiv = document.createElement("div");
      optionsContainerDiv.className="options-container "+optionsContainerNr;

      for(state=1;state<=3;++state){
        var option = document.createElement("div");
        option.className="option "+optionNr+" "+optionsContainerNr;
        optionNr++;

        var inputOption = document.createElement("input");
        inputOption.type="radio";
        inputOption.className="radio";
        inputOption.id="read-state-"+row+"-"+book+"-"+state;
        inputOption.name="read-state-"+row+"-"+book;

        var labelOption = document.createElement("label");
        switch(state){
          case 1: var textOption = document.createTextNode("Read");
          break;
          case 2: var textOption = document.createTextNode("Reading");
          break;
          case 3: var textOption = document.createTextNode("Want to read");
          break;
        }
        labelOption.appendChild(textOption);

        option.appendChild(inputOption);
        option.appendChild(labelOption);
        optionsContainerDiv.appendChild(option);
      }
      optionsContainerNr++;

      selectContainer.appendChild(optionsContainerDiv);
      readstate.appendChild(selectContainer);
      readstate.appendChild(selectedDiv);

      for(star=1;star<=5;++star){
        var inputStar = document.createElement("input");
        inputStar.type="radio";
        inputStar.name="star-"+row+"-"+book;

        idStar="star-"+row+"-"+book+"-"+star;
        inputStar.id=idStar;
        var labelStar = document.createElement("label");
        labelStar.htmlFor=idStar;
        reviewStars.appendChild(inputStar);
        reviewStars.appendChild(labelStar);
      }
      var bookcover=document.createElement("img");
      bookcover.src="../images/solaris-cover.png";//aici trebuie pus vectorul cu un counter
      bookcover.alt="book";
      bookcover.className="book-cover";

      bookDiv.appendChild(bookcover);
      bookDiv.appendChild(reviewStars);
      bookDiv.appendChild(readstate);
      bookrow.appendChild(bookDiv);

    }
    var shelf=document.createElement("img");
    shelf.src="../images/shelf.png";
    shelf.alt="shelf";
    shelf.className="shelf";

    bookrowshelf.appendChild(bookrow);
    bookrowshelf.appendChild(shelf);
  }

  
const selected = document.querySelectorAll(".selected");
selected.forEach(s =>{

const optionsContainer = document.querySelectorAll(".options-container");
const optionsList = document.querySelectorAll(".option");

optionsContainer.forEach(oC =>{

  oC.style.display="none";

  if(oC.classList[1]===s.classList[1]){

    s.addEventListener("click", () => {
      oC.classList.toggle("active");
      oC.style.display="initial";
      optionsList.forEach(o => {
        console.log(o.classList[1])
        if(o.classList[2]===oC.classList[1])
          o.addEventListener("click", () => {
            s.innerHTML = o.querySelector("label").innerHTML + "<img src=\"../images/arrow-down.png\" alt=\"arrow\" class=\"arrow\">";
            optionsContainer.classList.remove("active");
            optionsContainer.style.display="none";
          });
      });
    });

  }
  

});


});
 

  
