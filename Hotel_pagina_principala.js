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

window.onload = () => {
  toggleInterval();
  startTime();
}