function reveal() {
  var reveals = document.getElementsByClassName("reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

let seconds = 0;
let intervalId = null;

function toggleInterval() {
  intervalId = setInterval(() => {
    seconds++;
    document.getElementById('seconds').textContent = `Stai pe această pagină de ${seconds} secunde.`;
  }, 1000);
}

function startTime() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
  setTimeout(function() {startTime()}, 1000);
}

function popUp() {
  const overlay = document.createElement('div');
  overlay.setAttribute("id", "overlay");
  document.body.prepend(overlay);

  const pop = document.getElementById('pop');
  pop.style.display="block";
  pop.addEventListener('click', () => {window.open("rezervari"); deletePop();});

  const x = document.querySelector('button');
  x.addEventListener('click', deletePop);
}

function deletePop(event) {
  const pop = document.getElementById('pop');
  pop.remove();
  const overlay = document.getElementById("overlay");
  overlay.remove();
  event.stopPropagation();
}

window.onload = () => {
  toggleInterval();
  startTime();
  setTimeout(popUp, 10000);
}