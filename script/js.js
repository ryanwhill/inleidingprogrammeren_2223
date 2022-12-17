// Array//
var playbarImages = ["playbar01.png", "playbar02.png", "playbar03.png", "playbarfull.png"];
var feedbarImages = ["feedbar01.png", "feedbar02.png", "feedbar03.png", "feedbarfull.png"];
// Interactie Elementen//
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

//count declaratie//
var playCount = 0;                                                                     //Variable om bij te houden hoevaak er geklikt is op playKnop//
var feedCount = 0;                                                                     //Variable om bij te houden hoevaak er geklikt is op feedKnop//

//function declaratie//
//event listeners//

//NAAM FOR FUNCTIE//

confirmButton.addEventListener('click', function () {                                   //Functie voor wanneer je op de knop klikt die de naam bevestigt//
    H1.textContent = input.value;                                                       //Verandert de H1 bovenaan de pagina in de input die getypt is//
});



confirmButton.addEventListener('click', function () {                                   //Functie die ervoorzorgt dat de H2 boven het input veld verdwijnt na het klikken op de button//
    H2.classList.add("h2hidden");                                                       //Voegt de class "h2hidden" toe met behulp van classList.add aan de h2 boven het input veld// 
});
 


//PLAY BUTTON FUNCTIES//


playKnop.addEventListener('click', function increasePlaybar () {                        //Functie die ervoor zorgt dat de playbarElement opvult//
    if (playCount < 3) {                                                                //Als de playCount kleiner is dan 3//
        playCount++;                                                                    //Tel elke klik bij de playCount//
        playbarElement.src = './images/' + playbarImages[playCount];                    //Verander de lege playbar met de plaatjes uit de var Playbarimages array//
    } else {
        return;                                                                         //Return want we willen dat er niks verder gebeurt//
    }    
});


playKnop.addEventListener('click', function MudkipEvolveUnlockThroughPlay () {          //Functie die ervoor zorgt dat de evolveKnop unlocked wordt en de playKnop en feedKnop locked worden//
    if (playCount === 3 && feedCount === 3) {                                           //Als de playbarElement en feedbarElement gelijk zijn aan 3 (dus vol zijn)//
        evolveKnop.classList.add('evolvebuttonunlocked')                                //Voeg dan een 'evolvebuttonunlocked' class toe aan de evolveKnop//
        playKnop.classList.add("playbuttonlocked")                                      //Voeg dan een 'playbuttonlocked' class toe aan de playKnop//
        feedKnop.classList.add("feedbuttonlocked")                                      //Voeg dan een 'feedbuttonlocked' class toe aan de feedKnop//
    } else {
        return;                                                                         //Return want we willen dat er niks verder gebeurt//
    }    
});


//FEED BUTTON FUNCTIES//


feedKnop.addEventListener('click', function increaseFeedbar () {                        //Functie die ervoor zorgt dat de feedbarElement opvult//
    if (feedCount < 3) {                                                                //Als de playbar kleiner is dan 3 //
        feedCount++;                                                                    //Tel bij elke klik er 1 bij op//
        feedbarElement.src = './images/' + feedbarImages[feedCount];                    //Verander de lege feedbar met een de plaatjes uit de var feedbarImages array//
    } else {
        return;                                                                         //Return want we willen dat er niks verder gebeurt//
    }    
});


feedKnop.addEventListener('click', function MudkipEvolveUnlockThroughFeed  () {         //Functie voor het unlocken van evolveKnop en locken van de feedKnop en playKnop door te klikken op feedKnop//
    if (playCount === 3 && feedCount === 3) {                                           //Als playCount en feedCount gelijk is aan 3 (dus de playbarElement en feedbarElement zijn "vol")       
        evolveKnop.classList.add('evolvebuttonunlocked')                                //Voeg dan een 'evolvebuttonunlocked' class toe aan de evolveKnop//
        playKnop.classList.add("playbuttonlocked")                                      //Voeg dan een 'playbuttonlocked' class toe aan de playKnop//
        feedKnop.classList.add("feedbuttonlocked")                                      //Voeg dan een 'feedbuttonlocked' class toe aan de feedKnop//
    } else {
        return;                                                                         //Return want we willen dat er niks verder gebeurt//
    }    
});


//SLEEP BUTTON FUNCTIES//


sleepKnop.addEventListener('click', function marshtompGoesToSleep () {                 //Functie om Marshtomp te laten slapen//          
    if (playCount === 3 && feedCount === 3) {                                          //Als playCount en feedCount gelijk is aan 3 (dus de playbarElement en feedbarElement zijn "vol")//   
        Mudkip.src = "./images/marshtompsleeping.png"                                  //Verander het plaatje naar een slapende Marshtomp
    } else {
        return;                                                                        //Return want we willen dat er niks verder gebeurt//
    }    
});


//EVOLVE BUTTON FUNCTIES//


evolveKnop.addEventListener('click', function changesButtonStatesAfterEvolve () {      //Functie voor het unlocken van evolveKnop en locken van de feedKnop en playKnop door te klikken op playKnop//
    if (playCount === 3 && feedCount === 3) {                                          //Als playCount en feedCount gelijk is aan 3 (dus de playbarElement en feedbarElement zijn "vol")//                                  
        feedKnop.classList.add("feedbuttonlocked")                                     //Voeg dan een 'feedbuttonlocked' class toe aan de feedKnop//   
        playKnop.classList.add("playbuttonlocked")                                     //Voeg dan een 'playbuttonlocked' class toe aan de playKnop// 
        sleepKnop.classList.add("sleepbuttunlocked")                                   //Voeg dan een 'sleepbuttunlocked' class toe aan de sleepKnop//                                           
    } else {
        return;                                                                        //Return want we willen dat er niks verder gebeurt//
    }                                                          
});


evolveKnop.addEventListener('click', function evolvesMudkipIntoMarshtompWithSound () { //Functie om Mudkip te evolven naar een Marshtomp
    // evolve button logic
    if (playCount === 3 && feedCount === 3) {                                          //Als playCount en feedCount gelijk is aan 3 (dus de playbarElement en feedbarElement zijn "vol")//                                      
        // logic for evolve pokemon
        Mudkip.src = "./images/marshtomp_evolve.png"                                   //Verander de SRC van Mudkip.src naar marshtomp_evolve.png//
        evolveSound.play();                                                            //Speelt de evolve sound af wanneer er op de knop geklikt wordt (S/O Mehmet)
    } else {
        return;                                                                        //return want we willen dat er niks verder gebeurt//
    }
});



//BRONNEN//

//Bron voor Mudkip: https://www.deviantart.com/derlaine8/art/Mudkip-161351146//
//Bron voor achtergrond: https://www.deviantart.com/falke2009/art/Sinnoh-Valley-Windworks-Dusk-640673225//
//Bron voor playbarElement/feedbarElement: https://www.deviantart.com/dbizal/art/Pokemon-Basic-HP-Bar-High-Res-359595316 (zelf aangepast in photoshop)//
//Bron voor Pokemon Logo: https://1000logos.net/pokemon-logo///
//Bron voor Marshtomp: https://nintendo.fandom.com/wiki/Marshtomp//
//Bron voor Marshtomp die slaapt: https://www.deviantart.com/galbin32/art/Pokemon-Sleep-on-Tree-919996134 (zelf angepast in photoshop)//

//Bron: https://developer.mozilla.org/en-US///
//Bron: Mehmet voor audio//
//Kennisclips DLO//



