function init() {
    let count = parseInt(localStorage.getItem('visits')) || 0;
    let newCount = count+1;
    localStorage.setItem('visits', newCount);

    const vis = document.getElementById('visits');
    vis.textContent = `${newCount}`;
    vis.style.backgroundColor=`rgba(255, ${Math.floor(Math.random() * 255)}, 255, 0.5)`;
    const style = getComputedStyle(vis);
    console.log(style.backgroundColor);

    const hist = document.querySelector('div');
    hist.style.backgroundColor = style.backgroundColor;
}
  
window.onload = init;