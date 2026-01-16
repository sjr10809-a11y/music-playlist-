console.log("js console");
let button = document.querySelector("#show-songs");
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function (){
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    let songs = JSON.parse(xhttp.responseText);
    console.log(songs[0]);

songs.forEach(function(songs){
let card = document.createElement("div");
card.classList.add("card");

let textGame=
"<div class = 'game-title'>" + songs.title + "</div>"+
"<span>" +
"Publisher: " + songs.publisher + "<br>"+
"<span>" +
"Release Date: " + songs.releaseDate + "<br>" +
"Needs Research:"  +
"</span>";

card.innerHTML = textGame;
if(song.imgSrc){
  card.style.backgroundImage = "url(" + song.imgSrc +")"
}

grid.appendChild(card);
});
  }
};

xhttp.open("GET", "JSON.json", true);
xhttp.send();
      