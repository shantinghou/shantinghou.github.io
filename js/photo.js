// QUESTION 3
// shows photo when mouse over
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
homeHolder.onmouseover = showPhoto;
homeHolder.onmouseleave = removePhoto;