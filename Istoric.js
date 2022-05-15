function init() {
    let count = parseInt(localStorage.getItem('visits')) || 0;
    let newCount = count+1;
    localStorage.setItem('visits', newCount);
    const vis = document.getElementById('visits')
    vis.textContent = `${newCount}`;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);  
    let b = Math.floor(Math.random() * 255);
    vis.style.backgroundColor=`rgba(${r}, ${g}, ${b}, 0.3)`;
}
  
window.onload = init;