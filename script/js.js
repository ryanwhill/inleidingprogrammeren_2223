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

// count declaration
var playCount = 0;
var feedCount = 0;
var sleepCount = 0;
var evoleState = false;


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

playKnop.addEventListener('click', function () {                        //----//
    if (playCount < 3) {                                                //----//
        playCount++;                                                    //----//
        playbarElement.src = './images/' + playbarImages[playCount];    //----//
    }
});

//FEED BUTTON FUNCTIES//

feedKnop.addEventListener('click', function () {                        //----//
    if (feedCount < 3) {                                                //----//
        feedCount++;                                                    //----//
        feedbarElement.src = './images/' + feedbarImages[feedCount];    //----//
    }
});

feedKnop.addEventListener('click', function () {
    if (playCount === 3 && feedCount === 3) {                   
        evolveKnop.classList.add('evolvebuttonunlocked')
        playKnop.classList.add("playbuttonlocked")
        feedKnop.classList.add("feedbuttonlocked")
    }
});

//SLEEP BUTTON FUNCTIES//

sleepKnop.addEventListener('click', function () {                       //Functie die er voor zorgt dat de eerste evolutie (Mudkip) gaat slapen door op de knop te klikken//
    Mudkip.src = "./images/mudkipsleep.png"                             //Verandert het plaatje naar een slapende mudkip met behulp van een click//
});

sleepKnop.addEventListener('click', function () {                       //Functie die ervoor zorgt dat de tweede evolutie (Marshtomp) gaat slapen//
    if (playCount === 3 && feedCount === 3) {                           //Als de playbar en feedbar biede vol zijn (gelijk aan de 3 afbeeldingen in de var feedbarImages)//
        Mudkip.src = "./images/marshtompsleeping.png"                                                             //--------//
    }
})

//EVOLVE BUTTON FUNCTIES//

evolveKnop.addEventListener('click', function () {
    if (playCount === 3 && feedCount === 3) {                           //Functie die ervoor zorgt dat wanneer je op de slaapknop klikt, de andere knoppen locked worden//                         
        feedKnop.classList.add("feedbuttonlocked")                      //Er wordt een class toegevoegd aan de feedKnop//
        playKnop.classList.add("playbuttonlocked")                      //Er wordt een class toegevoegd aan de playKnop//
    }                                                           
});

evolveKnop.addEventListener('click', function () {                      //Functie die ervoor zorgt dat wanneer je op de evolve button klikt Mudkip evolueert naar Marshtomp//
    // evolve button logic
    if (playCount === 3 && feedCount === 3) {                           //Als de playbar en feedbar biede vol zijn (gelijk aan de 3 afbeeldingen in de var feedbarImages)//
        // logic for evolve pokemon
        Mudkip.src = "./images/marshtomp_evolve.png"                    //verander dan het plaatje van mudkip naar Marshtomp//
    } else {
        return;                                                         //return want we willen dat er niks verder gebeurt//
    }
});

evolveKnop.addEventListener('click', function () { 
    if (playCount === 3 && feedCount === 3) {                           //Als de playbar en feedbar biede vol zijn (gelijk aan de 3 afbeeldingen in de var feedbarImages)//
                                                          //verander dan het plaatje van mudkip naar Marshtomp//
    }
});