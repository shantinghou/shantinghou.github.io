// QUESTION 1
// get question card elements
var fromCard = document.getElementById("from");
var placeCard = document.getElementById("place");
var bringCard = document.getElementById("bring");

// similar functions that deal with the same thing
function qaFrom(){
    fromCard.innerHTML = "<h5>Hong Kong</h5>";
}
function aqFrom(){
    fromCard.innerHTML = "<h5>Guess where I'm from?</h5>";
}

function qaPlace(){
    placeCard.innerHTML = "<h5>Iceland</h5>";
}
function aqPlace(){
    placeCard.innerHTML = "<h5>Top on my bucket list?</h5>";
}

function qaBring(){
    bringCard.innerHTML = "<h5>Your Camera</h5>";
}
function aqBring(){
    bringCard.innerHTML = "<h5>What to bring on vacation?</h5>";
}

// add mouseout, mouseover events to cards
fromCard.onmouseout = aqFrom;
fromCard.onmouseover = qaFrom;
placeCard.onmouseout = aqPlace;
placeCard.onmouseover = qaPlace;
bringCard.onmouseout = aqBring;
bringCard.onmouseover = qaBring;