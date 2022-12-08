// array declaration
var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];
var feedbarImages = ["feedbar01.png", "feedbar02.png", "feedbar03.png", "feedbarfull.png"];
// interaction element declaration
var playKnop = document.querySelector('.playbutton');
var feedKnop = document.querySelector('.feedbutton');
var sleepKnop = document.querySelector('.sleepbutton');
var evolveKnop = document.querySelector('.evolvebutton');
var playbarElement = document.querySelector('.playbar');
var feedbarElement = document.querySelector('.feedbar');
var Mudkip = document.querySelector(".mudkip01");
// count declaration
var playCount = 0;
var feedCount = 0;
var evoleState = false;

// function declarations
// event listeners
playKnop.addEventListener('click', function() {
    // play button logic
    if(playCount < 3) {
        playCount ++;
        playbarElement.src = './images/' + playbarImages[playCount];
    }
});

feedKnop.addEventListener('click', function() {
    // feed button logic
    if(feedCount < 3) {
        feedCount ++;
        feedbarElement.src = './images/' + feedbarImages[feedCount];
    }
});

sleepKnop.addEventListener('click', function() {
    Mudkip.src = "./images/mudkipsleep.png"
});


evolveKnop.addEventListener('click', function() {
    // evolve button logic
    if (playCount === 3 && feedCount === 3) {
        // logic for evolve pokemon
        Mudkip.src = "./images/marshtomp_evolve.png"
    } else {
        // return because we dont want to do anything
        return;
    }
});