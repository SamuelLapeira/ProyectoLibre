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
