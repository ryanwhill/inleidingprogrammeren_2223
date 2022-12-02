console.log("dit werkt gewoon, klaar")

var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];

var playKnop = document.querySelector('.playbutton');

var petKnop = document.querySelector('.petbutton');

var sleepKnop = document.querySelector('.sleepbutton')

var playbarElement = document.querySelector('.playbar');

var Mudkip = document.querySelector(".mudkip01");


function playbarIncrease() {
    playbarElement.src = "./images/playbar01.png"
};
playKnop.addEventListener("click", playbarIncrease)

function mudkipGoesToSleep() {
    Mudkip.src = "./images/mudkipsleep.png"
};
sleepKnop.addEventListener("click", mudkipGoesToSleep)


