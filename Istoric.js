function init() {
    let count = parseInt(localStorage.getItem('visits')) || 0;
    let newCount = count+1;
    console.log(newCount);
    localStorage.setItem('visits', newCount);
    let div = document.getElementById('visits');
    div.textContent = div.textContent + `${newCount}`;
}
  
window.onload = init;