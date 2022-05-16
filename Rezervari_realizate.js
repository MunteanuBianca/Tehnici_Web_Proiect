function showAlert(event) {

        const alert = document.getElementById('alert');

        const check = document.createElement('img');
        check.src="public/Rezervari/check_mark.jpg";
        check.style.width="30%";
        alert.prepend(check);

        const ok = document.createElement('button');
        ok.innerHTML="vezi datele rezervarii";
        ok.addEventListener('click', deleteAlert);
        ok.addEventListener('click', showReservation);
        ok.classList.add('ok_button');
        alert.appendChild(ok);

        const overlay = document.createElement('div');
        overlay.setAttribute("id", "overlay");
        document.body.prepend(overlay);

    // event.preventDefault();   
}

function showReservation() {

    const div=document.getElementById('reservation');
    div.style.display="block";

    const overlay = document.createElement('div');
    overlay.setAttribute("id", "overlay");
    document.body.prepend(overlay);

    ok=document.getElementById("ok_reservation");
    ok.innerHTML="inapoi la site";
    ok.addEventListener('click', deleteReservation);
    ok.classList.add('ok_button');
    div.appendChild(ok);

    sterge=document.getElementById("sterge_reservation");
    sterge.innerHTML="sterge rezervarea";
    sterge.addEventListener('click', () => localStorage.removeItem('userDetails'));
    sterge.addEventListener('click', deleteReservation);
    sterge.classList.add('sterge_button');
    div.appendChild(sterge);

    document.addEventListener('keydown', EscapeReservation);
}

function EscapeReservation(event) {
    if (event.key != 'Escape')
        return;
    deleteReservation();
}

function deleteAlert() {
    const div = document.getElementById("alert");
    const overlay = document.getElementById("overlay");
    div.remove();
    overlay.remove();
}

function deleteReservation() {
    const div = document.getElementById("reservation");
    const overlay = document.getElementById("overlay");
    div.style.display="none";
    overlay.remove();
    window.location = "rezervari";
}

function init () {
    showAlert();
}

window.onload=init;