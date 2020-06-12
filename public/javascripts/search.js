function populateBooks() {

  var bookshelfwrapper = document.getElementById("bookshelf-wrapper");
  bookshelfwrapper.innerHTML = '';
  console.log(bookshelfwrapper);

  var bookshelf = document.createElement("div");
  bookshelf.id = "bookshelf";
  bookshelfwrapper.appendChild(bookshelf);


  /* <input type="radio" name="star-1" id="star1-1"><label for="star1-1"></label> */
  var selectedNr = 1;
  var optionsContainerNr = 1;
  var optionNr = 1;

  for (row = 1; row <= 4; ++row) {
    var bookrowshelf = document.createElement("div");
    bookrowshelf.className = "bookrow-shelf";
    bookshelf.appendChild(bookrowshelf);

    var bookrow = document.createElement("div");
    bookrow.className = "bookrow";


    for (book = 1; book <= 5; ++book) {

      var bookDiv = document.createElement("div");
      bookDiv.className = "book";

      var reviewStars = document.createElement("div");
      reviewStars.className = "review-stars";

      var readstate = document.createElement("div");
      readstate.className = "read-state";

      var selectContainer = document.createElement("div");
      selectContainer.className = "select-container";

      var arrowDown = document.createElement("img");
      arrowDown.src = "../images/arrow-down.png";
      arrowDown.alt = "V";
      arrowDown.className = "arrow";

      var selectedDiv = document.createElement("div");
      selectedDiv.className = "selected " + selectedNr;
      selectedNr++;
      var text = document.createTextNode("To Read");
      selectedDiv.appendChild(text);
      selectedDiv.appendChild(arrowDown);

      var optionsContainerDiv = document.createElement("div");
      optionsContainerDiv.className = "options-container " + optionsContainerNr;

      for (state = 1; state <= 3; ++state) {
        var option = document.createElement("div");
        option.className = "option " + optionNr + " " + optionsContainerNr;
        optionNr++;

        var inputOption = document.createElement("input");
        inputOption.type = "radio";
        inputOption.className = "radio";
        inputOption.id = "read-state-" + row + "-" + book + "-" + state;
        inputOption.name = "read-state-" + row + "-" + book;

        var labelOption = document.createElement("label");
        switch (state) {
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

      for (star = 1; star <= 5; ++star) {
        var inputStar = document.createElement("input");
        inputStar.type = "radio";
        inputStar.name = "star-" + row + "-" + book;

        idStar = "star-" + row + "-" + book + "-" + star;
        inputStar.id = idStar;
        var labelStar = document.createElement("label");
        labelStar.htmlFor = idStar;
        reviewStars.appendChild(inputStar);
        reviewStars.appendChild(labelStar);
      }
      var bookcover = document.createElement("img");
      var coverIndex = row - 1;
      coverIndex = coverIndex * 5;
      coverIndex = coverIndex + book;
      // console.log(coverIndex);
      // console.log(bookCoverSourceArray[coverIndex].cover);
      bookcover.src = bookCoverSourceArray[coverIndex].cover;//aici trebuie pus vectorul cu un counter
      bookcover.alt = "book";
      bookcover.className = "book-cover";
      var bookTitleDiv = document.createElement("div");
      bookTitleDiv.className = "book-title";
      console.log(bookCoverSourceArray[coverIndex].title);
      var textNodeTitle = document.createTextNode('Title: ' + bookCoverSourceArray[coverIndex].title + '...');
      bookTitleDiv.appendChild(textNodeTitle);
      var authorNodeTitle = document.createTextNode('Author: ' + bookCoverSourceArray[coverIndex].author + '...');
      bookTitleDiv.appendChild(authorNodeTitle);
      var ratingNodeTitle = document.createTextNode('Rating: ' + bookCoverSourceArray[coverIndex].rating + '...');
      bookTitleDiv.appendChild(ratingNodeTitle);

      bookDiv.appendChild(bookcover);
      bookDiv.appendChild(reviewStars);
      bookDiv.appendChild(bookTitleDiv);
      bookDiv.appendChild(readstate);
      bookrow.appendChild(bookDiv);

    }
    var shelf = document.createElement("img");
    shelf.src = "../images/shelf.png";
    shelf.alt = "shelf";
    shelf.className = "shelf";

    bookrowshelf.appendChild(bookrow);
    bookrowshelf.appendChild(shelf);
  }


  const selected = document.querySelectorAll(".selected");
  selected.forEach(s => {

    const optionsContainer = document.querySelectorAll(".options-container");
    const optionsList = document.querySelectorAll(".option");

    optionsContainer.forEach(oC => {

      oC.style.display = "none";

      if (oC.classList[1] === s.classList[1]) {

        s.addEventListener("click", () => {
          oC.classList.toggle("active");
          oC.style.display = "initial";
          optionsList.forEach(o => {
            console.log(o.classList[1])
            if (o.classList[2] === oC.classList[1])
              o.addEventListener("click", () => {
                s.innerHTML = o.querySelector("label").innerHTML + "<img src=\"../images/arrow-down.png\" alt=\"arrow\" class=\"arrow\">";
                oC.classList.remove("active");
                oC.style.display = "none";
              });
          });
        });

      }


    });


  });

};









var bookCoverSourceArray = [];      //va fi populat la linia 242 din cod
/*  Si va arata asa:  
          bookCoverSourceArray[i]={
            ID : singleBookID,
            title : bookTitle,
            author : bookAuthor,
            authorID : bookAuthorID,
            rating : singleBookRating,
            cover : singleBookCover
          };*/

for (i = 0; i < 100; ++i) {
  bookCoverSourceArray[i] = {           //aici construim vectorul de carti
    ID: 1,
    title: "Solaris",
    author: 'Stanisław Lem',
    authorID: 1,
    rating: 4.5,
    cover: "../images/solaris-cover.png"
  };
}

window.onload = function () {
  //requestul care verifica daca esti logged in
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
      populateBooks();
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

//functia de search pt carti

var searchBy = "all";
var orderBy = "Title";
var searchWhat = '';

window.onclick = function (event) {
  if (event.target.matches(".searchBy")) {
    var buton = event.target;
    if (buton.innerText == "Title")
      searchBy = 'title';
    else if (buton.innerText == "Author")
      searchBy = 'author';
    else if (buton.innerText == 'All')
      searchBy = 'all';
    console.log("SearchBy" + searchBy);
    console.log("orderBy" + orderBy);
    console.log("searchWhat" + searchWhat);
    populateBooks();
  }
  else if (event.target.matches(".orderBy")) {
    var buton = event.target;
    orderBy = buton.innerText;
    console.log("SearchBy" + searchBy);
    console.log("orderBy" + orderBy);
    console.log("searchWhat" + searchWhat);
    bookSort(orderBy);
    populateBooks();
  }
  else if (event.target.matches(".fa-search")) {
    var buton = document.getElementById("searchValue");
    searchWhat = buton.value;
    console.log("SearchBy" + searchBy);
    console.log("orderBy" + orderBy);
    console.log("searchWhat" + searchWhat);
    searchForBooks(searchWhat, searchBy);
  }
}




function searchForBooks(what, how) {

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var ourRequest = new XMLHttpRequest();
  var mode = ourRequest.mode = 'no-cors';
  ourRequest.open('GET', proxyUrl + 'https://www.goodreads.com/search.xml?key=WpM1JNzR4jTVMnsH26tqcg&q=' + what + '&field=' + how + '&page=1');
  ourRequest.onload = function () {
    var singleBook = ourRequest.responseText.split('<work>');    //impartim xml-ul in carti
    var ourData = ourRequest.responseText;
    console.log(singleBook.length);
    for (i = 1; i < singleBook.length; i++) {
      console.log("Another Book:");
      console.log(singleBook[i]);

      var singleBookIDTemp;
      var singleBookID;
      var bookGeneralInfo = singleBook[i].split('<best_book type="Book">')[1];           //umflam informatii generale despre carte, separand stringul


      singleBookID = bookGeneralInfo;
      singleBookIDTemp = singleBookID.split('<id type="integer">')[1];             //umflam id-ul, part 1
      singleBookID = singleBookIDTemp.split('</id>')[0];                     //umflam id-ul, part 2
      console.log("Book ID:");
      console.log(singleBookID);

      var bookTitle;
      console.log(bookGeneralInfo);
      var bookTitleTemp = bookGeneralInfo.split('<title>')[1];   //umflam titlul, part 1
      bookTitle = bookTitleTemp.split('</title>')[0]; //umflam titlul, part 2
      console.log("Book Title:");
      console.log(bookTitle);

      var bookAuthor;
      var bookAuthorTemp = bookGeneralInfo.split('<name>')[1];   //umflam autorul, part 1
      bookAuthor = bookAuthorTemp.split('</name>')[0]; //umflam titlul, part 2
      console.log("Book Author:");
      console.log(bookAuthor);

      var bookAuthorID;
      var bookAuthorIDTemp = bookGeneralInfo.split('<id type="integer">')[2];    //umflam ID-ul autorului, part 1
      bookAuthorID = bookAuthorIDTemp.split('</id>')[0];                         //umflam ID-ul autorului, part 2
      console.log("Book Author ID:");
      console.log(bookAuthorID);

      var singleBookRating;
      var singleBookRatingTemp = singleBook[i].split('<average_rating>')[1];                            //umflam ratingul separand stringul
      if(singleBookRatingTemp!=null){
      singleBookRating = singleBookRatingTemp.split('</average_rating>')[0];                            //aici e ratingul cartii
      }
      else singleBookRating=0;
      console.log("Book Rating:");
      console.log(singleBookRating);


      var singleBookCoverTemp = singleBook[i].split('<image_url>')[1];                 //umflam imaginea copertii separand stringul
      var singleBookCover = singleBookCoverTemp.split('</image_url>')[0];              //aici ai imaginea cartii
      console.log("Book Cover:");
      console.log(singleBookCover);

      bookCoverSourceArray[i] = {           //aici construim vectorul de carti
        ID: singleBookID,
        title: bookTitle,
        author: bookAuthor,
        authorID: bookAuthorID,
        rating: singleBookRating,
        cover: singleBookCover
      };
    }
    populateBooks();
  };

  ourRequest.send();

  //fetch(proxyUrl+'https://www.goodreads.com/book/show.xml?key=WpM1JNzR4jTVMnsH26tqcg&id=102030').then(data => console.log(data.body.toString()));
  //.then(response => response.json()) , { mode: 'no-cors'}

}


function bookSort(byWhat) {
  var i, j, aux;
  if (byWhat == 'Title') {
    for (i = 1; i < 21; i++)
      for (j = i; j < 21; j++)
        if (bookCoverSourceArray[i].title.toLowerCase() > bookCoverSourceArray[j].title.toLowerCase()) {
          aux = bookCoverSourceArray[i];
          bookCoverSourceArray[i] = bookCoverSourceArray[j];
          bookCoverSourceArray[j] = aux;
        }
  }

  else if (byWhat == 'Author') {
    for (i = 1; i < 21; i++)
      for (j = i; j < 21; j++)
        if (bookCoverSourceArray[i].author.toLowerCase() > bookCoverSourceArray[j].author.toLowerCase()) {
          aux = bookCoverSourceArray[i];
          bookCoverSourceArray[i] = bookCoverSourceArray[j];
          bookCoverSourceArray[j] = aux;
        }
  }

  else if (byWhat == 'Rating') {
    for (i = 1; i < 21; i++)
      for (j = i; j < 21; j++)
        if (bookCoverSourceArray[i].rating < bookCoverSourceArray[j].rating) {
          aux = bookCoverSourceArray[i];
          bookCoverSourceArray[i] = bookCoverSourceArray[j];
          bookCoverSourceArray[j] = aux;
        }
  }

}

/*  Si va arata asa:
          bookCoverSourceArray[i]={
            ID : singleBookID,
            title : bookTitle,
            author : bookAuthor,
            authorID : bookAuthorID,
            rating : singleBookRating,
            cover : singleBookCover
          };*/
