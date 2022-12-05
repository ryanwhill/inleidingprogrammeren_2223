console.log("dit werkt gewoon, klaar")

var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];

var feedbarImages = ["feedbar01.png", "feedbar02.png", "feedbar03", "feedbarfull.png"]

var playKnop = document.querySelector('.playbutton');

var feedKnop = document.querySelector('.feedbutton');

var sleepKnop = document.querySelector('.sleepbutton')

var playbarElement = document.querySelector('.playbar');

var feedbarElement = document.querySelector('.feedbar');

var Mudkip = document.querySelector(".mudkip01");


function playbarIncrease() {
    playbarElement.src = "./images/playbar01.png"
};
playKnop.addEventListener("click", playbarIncrease)

function mudkipGoesToSleep() {
    Mudkip.src = "./images/mudkipsleep.png"
};
sleepKnop.addEventListener("click", mudkipGoesToSleep)

function feedbarIncrease() {
    feedbarElement.src = "./images/feedbar01.png"
};
feedKnop.addEventListener("click", feedbarIncrease);