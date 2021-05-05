document.addEventListener('contextmenu', event => event.preventDefault());
function mousecursor() {
  var x = event.pageX
  var y = event.pageY
  document.getElementById("cursor").style.left = x + 'px';
  document.getElementById("cursor").style.top = y + 'px';
}

function how() {
  var howtox = document.getElementById("how").offsetLeft;
  var howtoy1 = document.getElementById("how").offsetTop;
  var howtoy = howtoy1 + 150;
  var howtoy2 = howtoy1 - 30;
  document.getElementById("howto").style.display = "block";
  document.getElementById("howto").style.left = howtox + 'px';
  document.getElementById("howto").style.top = howtoy + 'px';
  document.getElementById("stophow").style.display = "block";
  document.getElementById("stophow").style.left = howtox + 'px';
  document.getElementById("stophow").style.top = howtoy2 + 'px';
}

function stophow() {
  document.getElementById("howto").style.display = "none";
  document.getElementById("stophow").style.display = "none";
}

function resizebackground() {
  document.getElementById("backgroundimage").style.width = window.innerWidth + 'px';
  document.getElementById("backgroundimage").style.height = window.innerHeight + 'px';
}
