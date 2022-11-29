console.log("dit werkt gewoon, klaar")

var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];

var playKnop = document.querySelector('.playbutton');

var playbarElement = document.querySelector('.playbar')

var random = Math.random()* playbarImages.length;

function logo() {
console.log("hoi")
// playbarElement.src = '/images/'
console.log(playbarElement.src)

// http://127.0.0.1:5501/images/
// playbarElement.src = 

playbarElement.src = "http://127.0.0.1:5501/images/" + playbarImages[random];
}

playKnop.addEventListener("click", logo, false);







