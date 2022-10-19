var fromCard = document.getElementById("from");
var placeCard = document.getElementById("place");
var bringCard = document.getElementById("bring");

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

fromCard.onmouseout = aqFrom;
fromCard.onmouseover = qaFrom;
placeCard.onmouseout = aqPlace;
placeCard.onmouseover = qaPlace;
bringCard.onmouseout = aqBring;
bringCard.onmouseover = qaBring;

// Random Country
// got list from https://css-tricks.com/snippets/javascript/array-of-country-names/, removed some countries 
var countries = 
    ['Afghanistan',  'Argentina', 'Australia', 'Austria', 'Bangladesh', 
    'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 
    'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 
    'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 
    'Costa Rica', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 
    'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 
    'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 
    'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 
    'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 
    'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 
    'Japan', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 
    'Maldives', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 
    'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Paraguay', 'Peru', 
    'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 
    'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 
    'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 
    'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 
    'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 
    'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 
    'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 
    'Zimbabwe'];
var colors = ["#DC9E82", "#C16E70", "#5B5941", "#94A89A", "#151E3F", "#ECC30B", "#4DA1A9", "#53917E"];

var countryLength = countries.length;
var colorLength = colors.length;

var randomElem = document.getElementById("random");

function randomCountry(){
    var country = countries[Math.floor(Math.random()*countryLength)];
    var color = colors[Math.floor(Math.random()*colorLength)];
    randomElem.innerHTML = country;
    randomElem.style.backgroundColor = color;
    randomElem.style.color = "white";
}

var isRandomizing = false;
var intervalRandom;
function setRandomize(){
    if(isRandomizing){
        randomElem.style.backgroundColor = "#371622";
        randomElem.innerHTML = "Where should I go next?";
        randomElem.style.color = "white";
        isRandomizing = false;
        clearInterval(intervalRandom);
    }
    else{
        randomCountry();
        intervalRandom = setInterval(randomCountry, 3000);
        isRandomizing = true;
    }
}
randomElem.onclick = setRandomize;

// home photo
var homeHolder = document.getElementById("homephoto");
var home = document.querySelector("#homephoto>img");
var homeDescrip = document.querySelector("#homephoto>h5");
function showPhoto(){
    home.style.display="block";
    homeDescrip.style.display="none";
}
function removePhoto(){
    home.style.display="none";
    homeDescrip.style.display="block";
}
homeHolder.onmouseenter = showPhoto;
homeHolder.onmouseleave = removePhoto;

// scroll
var body = document.getElementsByTagName("body")[0]
var heightOfBody = body.scrollHeight;

var topButton = document.getElementById("back-to-top");
topButton.onclick = function(){window.scroll(0, 0); topButton.style.display="none";}

function updateScroll(){
    if (window.pageYOffset > heightOfBody/2){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";
    }
}

setInterval(updateScroll, 1000);