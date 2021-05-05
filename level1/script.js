document.addEventListener('contextmenu', event => event.preventDefault());
x = 0
y = 0
function gopherhit() {
  if (document.getElementById("gopher").getAttribute("src") == "https://rb.gy/6r7fco") {
  x = x + 1;
  var gopherleft1 = document.getElementById("gopher").offsetLeft;
  var gophertop1 = document.getElementById("gopher").offsetTop;
  var gopherleft = gopherleft1 + 128;
  var gophertop = gophertop1 + 100;
  document.getElementById("gopher").src = "https://rb.gy/7xdaxp";
  document.getElementById("hit").style.left = gopherleft + 'px';
  document.getElementById("hit").style.top = gophertop + 'px';
  document.getElementById("hit").style.display = "block";
  document.getElementById("pointscore").innerHTML = x;
  }
}

function hammerdown() {
  document.body.style.cursor = "url(https://rb.gy/5uhrc2), auto";
}

function hammerup() {
  document.body.style.cursor = "url(https://rb.gy/kqqvsy), auto";
}

function resize() {
  circlex1 = window.innerWidth / 4.8;
  circley1 = window.innerHeight / 2.4225;
  circlex = circlex1 + 'px';
  circley = circley1 + 'px';
  hitx1 = window.innerWidth / 19.2;
  hity1 = window.innerHeight / 9.69; 
  hitx = hitx1 + 'px';
  hity = hity1 + 'px';
  document.getElementById("circle1").style.width = circlex;
  document.getElementById("circle1").style.height = circley;
  document.getElementById("circle2").style.width = circlex;
  document.getElementById("circle2").style.height = circley;
  document.getElementById("circle3").style.width = circlex;
  document.getElementById("circle3").style.height = circley;
  document.getElementById("circle4").style.width = circlex;
  document.getElementById("circle4").style.height = circley;
  document.getElementById("circle5").style.width = circlex;
  document.getElementById("circle5").style.height = circley;
  document.getElementById("circle6").style.width = circlex;
  document.getElementById("circle6").style.height = circley;
  document.getElementById("circle7").style.width = circlex;
  document.getElementById("circle7").style.height = circley;
  document.getElementById("circle8").style.width = circlex;
  document.getElementById("circle8").style.height = circley;
  document.getElementById("gopher").style.width = circlex;
  document.getElementById("gopher").style.height = circley;
  document.getElementById("hit").style.width = hitx;
  document.getElementById("hit").style.height = hity;
  pointscorex1 = window.innerWidth / 1.05;
  pointscorex = pointscorex1 + 'px';
  document.getElementById("pointscore").style.left = pointscorex;
}

function movegopher() {
  if (y == 150) {
    var okbutton = confirm("you hit " + x + " moles out of 150. Return back to the main page?");
    y = 0
    if (okbutton == true){
      window.location.href = "https://whackamole.tk";
    } else {
      window.location.href = "https://whackamole.tk/level1";
    }
  } else {
  y = y + 1
  var items = Array(1, 2, 3, 4, 5, 6, 7, 8);
  var item = items[Math.floor(Math.random() * items.length)];
  if (item == "1") {
    var circle1left = document.getElementById("circle1").offsetLeft;
    var circle1top = document.getElementById("circle1").offsetTop;
    document.getElementById("gopher").style.left = circle1left + 'px';
    document.getElementById("gopher").style.top = circle1top + 'px';
  } else if (item == "2") {
    var circle2left = document.getElementById("circle2").offsetLeft;
    var circle2top = document.getElementById("circle2").offsetTop;
    document.getElementById("gopher").style.left = circle2left + 'px';
    document.getElementById("gopher").style.top = circle2top + 'px';
  } else if (item == "3") {
    var circle3left = document.getElementById("circle3").offsetLeft;
    var circle3top = document.getElementById("circle3").offsetTop;
    document.getElementById("gopher").style.left = circle3left + 'px';
    document.getElementById("gopher").style.top = circle3top + 'px';
  } else if (item == "4") {
    var circle4left = document.getElementById("circle4").offsetLeft;
    var circle4top = document.getElementById("circle4").offsetTop;
    document.getElementById("gopher").style.left = circle4left + 'px';
    document.getElementById("gopher").style.top = circle4top + 'px';
  } else if (item == "5") {
    var circle5left = document.getElementById("circle5").offsetLeft;
    var circle5top = document.getElementById("circle5").offsetTop;
    document.getElementById("gopher").style.left = circle5left + 'px';
    document.getElementById("gopher").style.top = circle5top + 'px';
  } else if (item == "6") {
    var circle6left = document.getElementById("circle6").offsetLeft;
    var circle6top = document.getElementById("circle6").offsetTop;
    document.getElementById("gopher").style.left = circle6left + 'px';
    document.getElementById("gopher").style.top = circle6top + 'px';
  } else if (item == "7") {
    var circle7left = document.getElementById("circle7").offsetLeft;
    var circle7top = document.getElementById("circle7").offsetTop;
    document.getElementById("gopher").style.left = circle7left + 'px';
    document.getElementById("gopher").style.top = circle7top + 'px';
  } else {
    var circle8left = document.getElementById("circle8").offsetLeft;
    var circle8top = document.getElementById("circle8").offsetTop;
    document.getElementById("gopher").style.left = circle8left + 'px';
    document.getElementById("gopher").style.top = circle8top + 'px';
  }
  }
  document.getElementById("gopher").src = "https://rb.gy/6r7fco";
  document.getElementById("hit").style.display = "none";
}
window.setInterval(movegopher, 1700);
