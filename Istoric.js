function init() {
    let count = parseInt(localStorage.getItem('visits')) || 0;
    let newCount = count+1;
    localStorage.setItem('visits', newCount);

    const vis = document.getElementById('visits');
    vis.textContent = `${newCount}`;
    vis.style.backgroundColor=`rgba(190, ${Math.floor(Math.random() * 255)}, 255, 0.8)`;
    const style = getComputedStyle(vis);
    console.log(style.backgroundColor);

    const hist = document.querySelector('.descriere h2');
    hist.style.backgroundColor = style.backgroundColor;
    hist.style.backgroundImage = `linear-gradient(to left, rgb(255, 255, 255), ${style.backgroundColor}, rgb(255,255,255))`;

}
  
window.onload = init;