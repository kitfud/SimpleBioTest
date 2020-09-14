
var image = document.getElementById("mainImage")

function mouseDown() {
   document.getElementById("mainImage").src = "images/Remi.jpg";
}

function mouseUp() {
  document.getElementById("mainImage").src = "images/KitProfilePic.jpg";
}

function myAlert(){
  alert("this is a test alert")
}

$(document).ready(function() {
$('h2').hover(
    function() {
     $(this).css('background-color', 'green');
    },
    function() {
     $(this).css('background-color', 'lightsalmon');
    })
})


    