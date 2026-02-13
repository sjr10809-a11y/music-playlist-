console.log("js started");

var data;
var grid = document.querySelector(".grid-container");

// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "JSON.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (song) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + song.title + "</div>" +
      "<div>Publisher: " + song.publisher + "</div>" +
      "<div>Artist: " + song.artist + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}


//if all in the same file, copy all of the code below underneath the script code from snippet A
var form = document.querySelector("form");
var titleInput = document.querySelector("#sname");
var publishInput = document.querySelector("#publisher");
var artistInput = document.querySelector("#aname");
//var dateInput = document.querySelector("#release-date-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    artist: artistInput.value,
    publisher: publishInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});


