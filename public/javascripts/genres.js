var vectorGenres=["Art","Comics","Cookbooks","Crime","Fiction","Graphic","Novels","Horror","Comedy","Manga","Mystery","Psychology","Science","Fiction","Suspense","Thriller","Biography","Business","Childrens","Classics","Contemporary","Ebooks","Fantasy","Historical","Fiction","History","Memoir","Nonfiction","Paranormal","Philosophy","Poetry","Religion","Romance","Science","Spirituality","Sports","Travel"];


var genres = document.getElementById("genres");
console.log(genres);
vectorGenres.forEach(genre =>{

    var label = document.createElement("label");
    label.htmlFor=genre;
    label.textContent=genre;
    label.className="genres-label"
    var input = document.createElement("input");
    input.type="checkbox";
    input.id=genre;
    input.className="genre-check";

    var genreItem = document.createElement("div");
    genreItem.className="genre-item";

    genreItem.appendChild(input);
    genreItem.appendChild(label);
    genres.appendChild(genreItem);

});