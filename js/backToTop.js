// scroll back to top after crossing half of the web page

// getting height of web page
var body = document.getElementsByTagName("body")[0]
var heightOfBody = body.scrollHeight;

// create back to top button
var topButton = document.getElementById("back-to-top");
topButton.onclick = function(){window.scroll(0, 0); topButton.style.display="none";}

// updates whether back to top button is displayed
function updateScroll(){
    if (window.pageYOffset > heightOfBody/2){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";
    }
}

// checks to update scroll every second
setInterval(updateScroll, 1000);