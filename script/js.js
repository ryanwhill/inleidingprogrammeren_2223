console.log("dit werkt gewoon, klaar")

var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];

var feedbarImages = ["feedbar01.png", "feedbar02.png", "feedbar03", "feedbarfull.png"]

var playKnop = document.querySelector('.playbutton');

var feedKnop = document.querySelector('.feedbutton');

var sleepKnop = document.querySelector('.sleepbutton');

var evolveKnop = document.querySelector('.evolvebutton');

var playbarElement = document.querySelector('.playbar');

var feedbarElement = document.querySelector('.feedbar');

var Mudkip = document.querySelector(".mudkip01");

var playCount = 0;

var feedCount = 0;


function playbarIncrease() {
    playKnop.addEventListener('click', function Evolve() {
        if (playCount < 3) {
            playCount++;
            if (playCount == 3) {
                Mudkip.src = "./images/marshtomp_evolve.png";
            }
        }
    })
    playbarElement.src = "./images/playbar01.png"
};


function mudkipGoesToSleep() {
    Mudkip.src = "./images/mudkipsleep.png"
};
sleepKnop.addEventListener("click", mudkipGoesToSleep);


function feedbarIncrease() {
    feedbarElement.src = "./images/feedbar01.png"
};
feedKnop.addEventListener("click", feedbarIncrease);


function Evolve() {
    Mudkip.src = "./images/marshtomp_evolve.png"
}
evolveKnop.addEventListener("click", Evolve) 

console.log(playCount)