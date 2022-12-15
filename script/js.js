// array declaration
var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];
var feedbarImages = ["feedbar01.png", "feedbar02.png", "feedbar03.png", "feedbarfull.png"];
// interaction element declaration
var playKnop = document.querySelector('.playbutton');
var feedKnop = document.querySelector('.feedbutton');
var sleepKnop = document.querySelector('.sleepbutton');
var wakeKnop = document.querySelector('.wakebutton');
var evolveKnop = document.querySelector('.evolvebutton');
var playbarElement = document.querySelector('.playbar');
var feedbarElement = document.querySelector('.feedbar');
var Mudkip = document.querySelector(".mudkip01");
var input = document.querySelector("input");
var H1 = document.querySelector("h1.description");
var confirmButton = document.querySelector("button");
var H2 = document.querySelector("h2");
var evolveSound = document.querySelector(".evolvesound");

// count declaration
var playCount = 0;
var feedCount = 0;

// function declarations
// event listeners

//NAME FORM FUNCTIE//

confirmButton.addEventListener('click', function () {
    H1.textContent = input.value;
});

confirmButton.addEventListener('click', function () {
    H2.classList.add("h2hidden");
});
 

//PLAY BUTTON FUNCTIES//

playKnop.addEventListener('click', function increasePlaybar () {                             //----//
    if (playCount < 3) {                                                                     //----//
        playCount++;                                                                         //----//
        playbarElement.src = './images/' + playbarImages[playCount];                         //----//
    } else {
        return;                                                                              //return want we willen dat er niks verder gebeurt//
    }    
});

//FEED BUTTON FUNCTIES//

feedKnop.addEventListener('click', function increaseFeedbar () {                             //----//
    if (feedCount < 3) {                                                                     //----//
        feedCount++;                                                                         //----//
        feedbarElement.src = './images/' + feedbarImages[feedCount];                         //----//
    } else {
        return;                                                                              //return want we willen dat er niks verder gebeurt//
    }    
});

feedKnop.addEventListener('click', function () {
    if (playCount === 3 && feedCount === 3) {                   
        evolveKnop.classList.add('evolvebuttonunlocked')
        playKnop.classList.add("playbuttonlocked")
        feedKnop.classList.add("feedbuttonlocked")
    } else {
        return;                                                                              //return want we willen dat er niks verder gebeurt//
    }    
});

//SLEEP BUTTON FUNCTIES//

sleepKnop.addEventListener('click', function marshtompGoesToSleep () {                        
    if (playCount === 3 && feedCount === 3) {                                                 
        Mudkip.src = "./images/marshtompsleeping.png"                                    
    } else {
        return;                                                                              //return want we willen dat er niks verder gebeurt//
    }    
});

//EVOLVE BUTTON FUNCTIES//

evolveKnop.addEventListener('click', function changesButtonStatesAfterEvolve () {
    if (playCount === 3 && feedCount === 3) {                                                                        
        feedKnop.classList.add("feedbuttonlocked")                                            
        playKnop.classList.add("playbuttonlocked")
        sleepKnop.classList.add("sleepbuttunlocked")                                            
    } else {
        return;                                                                              //return want we willen dat er niks verder gebeurt//
    }                                                          
});

evolveKnop.addEventListener('click', function evolveMudkipIntoMarshtomp () {                
    // evolve button logic
    if (playCount === 3 && feedCount === 3) {                                                
        // logic for evolve pokemon
        Mudkip.src = "./images/marshtomp_evolve.png"
        evolveSound.play();                                                                 
    } else {
        return;                                                                              //return want we willen dat er niks verder gebeurt//
    }
});




