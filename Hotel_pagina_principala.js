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

let seconds = 0;
let intervalId = null;

function toggleInterval() {
  const stop = intervalId != null;
    intervalId = setInterval(() => {
      seconds++;
      document.querySelector('p').textContent = `Stai pe această pagină de ${seconds} secunde.`;
    }, 1000);
}

window.onload = () => {
  toggleInterval();
}

window.addEventListener("scroll", reveal);
