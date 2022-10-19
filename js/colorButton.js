// Button that generates random countries to visit
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

// colors that are earthy tones to fit with my color palette but is more vibrant
var colors = ["#DC9E82", "#C16E70", "#5B5941", "#94A89A", "#151E3F", "#ECC30B", "#4DA1A9", "#53917E"];

var countryLength = countries.length;
var colorLength = colors.length;

// random country generator button
var randomElem = document.getElementById("random");

// updating the random button by randomly generating countries and colors
function randomCountry(){
    var country = countries[Math.floor(Math.random()*countryLength)];
    var color = colors[Math.floor(Math.random()*colorLength)];
    randomElem.innerHTML = country;
    randomElem.style.backgroundColor = color;
    randomElem.style.color = "white";
}

// implement mouseclick button so randomizer either starts generating or stops
var isRandomizing = false;
var intervalRandom;
function setRandomize(){
    // go back to default state 
    if(isRandomizing){
        randomElem.style.backgroundColor = "#371622";
        randomElem.innerHTML = "Where should I go next?";
        randomElem.style.color = "white";
        isRandomizing = false;
        clearInterval(intervalRandom);
    }
    // call random generator
    else{ 
        randomCountry();
        intervalRandom = setInterval(randomCountry, 3000);
        isRandomizing = true;
    }
}
randomElem.onclick = setRandomize;