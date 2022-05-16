function showAlert() {
    const alert = document.getElementById('alert');

    const check = document.createElement('img');
    check.src="public/Rezervari/not_check_mark.jpg";
    check.style.width="30%";
    alert.prepend(check);

    ok=document.getElementById("ok_reservation");
    ok.innerHTML="inapoi la site";
    ok.addEventListener('click', deleteAlert);

    const overlay = document.createElement('div');
    overlay.setAttribute("id", "overlay");
    document.body.prepend(overlay);  
}

function deleteAlert() {
    const div = document.getElementById("alert");
    const overlay = document.getElementById("overlay");
    div.remove();
    overlay.remove();
    window.location = "rezervari";
}

function init () {
    showAlert();
}

window.onload=init;