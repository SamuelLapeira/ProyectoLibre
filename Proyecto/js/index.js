// autor : Samuel Lapeira Pérez JS

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//Botón de la intro
function toggleText(btn, dots, more) {
  var dotsElement = document.getElementById(dots);
  var moreTextElement = document.getElementById(more);
  var btnTextElement = document.getElementById(btn);

  if (dotsElement.style.display === "none") {
      dotsElement.style.display = "inline";
      btnTextElement.innerHTML = "Read more";
      moreTextElement.style.display = "none";
  } else {
      dotsElement.style.display = "none";
      btnTextElement.innerHTML = "Read less";
      moreTextElement.style.display = "inline";
  }
}

/***************** código del modal del footer  */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 