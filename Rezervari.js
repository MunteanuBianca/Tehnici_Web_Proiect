function handleSubmit(event) {
    const fname = document.querySelector('[name="firstname"]').value;
    const lname = document.querySelector('[name="lastname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const nr = document.querySelector('[name="nr"]').value;
    const sosire = document.querySelector('[name="data_sosire"]').value;
    const plecare = document.querySelector('[name="data_plecare"]').value;
    const camera = document.querySelector('[name="camera"]').value;
    const guests = document.querySelector('[name="guests"]').value;
    const requests = document.querySelector('[name="requests"]').value;

    const Details = {fname, lname, email, nr, sosire, plecare, camera, guests, requests};
    localStorage.setItem('userDetails', JSON.stringify(Details));

    const div = document.createElement('div');
    div.setAttribute("id", "alert");
    const message = document.createElement('h2');
    message.innerHTML = "Felicitari, " + fname + " " + lname + ", ai facut o rezervare la Hotel White Lily";
    div.appendChild(message);
    const main = document.getElementById('main');
    main.prepend(div);
    
    const check = document.createElement('img');
    check.src="Rezervari/check_mark.jpg";
    check.style.width="30%";
    check.style.transition=" width 2s";
    div.prepend(check);

    const ok = document.createElement('button');
    ok.innerHTML="vezi datele rezervarii";
    ok.addEventListener('click', deleteAlert);
    ok.addEventListener('click', showReservation);
    ok.classList.add('ok_button');
    div.appendChild(ok);

    

    const overlay = document.createElement('div');
    overlay.setAttribute("id", "overlay");
    document.body.prepend(overlay);

    event.preventDefault();   
}

function showReservation() {
    userDetails = JSON.parse(localStorage.getItem('userDetails'));

    const lista = document.createElement('section');
    lista.style.display="flex";
    lista.style.gap="10%";

    const col1 = document.createElement('div');
    col1.setAttribute('id', 'col-left');
    const col2 = document.createElement('div');
    col2.setAttribute('id', 'col-right');

    const l11 = document.createElement('div');
    const l12 = document.createElement('div');
    const l13 = document.createElement('div');
    const l14 = document.createElement('div');
    const l15 = document.createElement('div');
    const l16 = document.createElement('div');
    const l17 = document.createElement('div');
    const l18 = document.createElement('div');
    const l19 = document.createElement('div');

    const l21 = document.createElement('div');
    const l22 = document.createElement('div');
    const l23 = document.createElement('div');
    const l24 = document.createElement('div');
    const l25 = document.createElement('div');
    const l26 = document.createElement('div');
    const l27 = document.createElement('div');
    const l28 = document.createElement('div');
    const l29 = document.createElement('div');

    l11.innerHTML="Nume: ";
    l12.innerHTML="Prenume: ";
    l13.innerHTML="Email: ";
    l14.innerHTML="Nr de telefon: ";
    l15.innerHTML="Sosire: ";
    l16.innerHTML="Plecare: ";
    l17.innerHTML="Camera: ";
    l18.innerHTML="Nr de vizitatori: ";
    l19.innerHTML="Cerinte speciale: ";

    l21.innerHTML=`${userDetails.lname}`;
    l22.innerHTML=`${userDetails.fname}`;
    l23.innerHTML=`${userDetails.email}`;
    l24.innerHTML=`${userDetails.nr}`;
    l25.innerHTML=`${userDetails.sosire}`;
    l26.innerHTML=`${userDetails.plecare}`;
    l27.innerHTML=`${userDetails.camera}`;
    l28.innerHTML=`${userDetails.guests}`;
    l29.innerHTML=`${userDetails.requests}`;

    col1.appendChild(l11);
    col1.appendChild(l12);
    col1.appendChild(l13);
    col1.appendChild(l14);
    col1.appendChild(l15);
    col1.appendChild(l16);
    col1.appendChild(l17);
    col1.appendChild(l18);
    col1.appendChild(l19);

    col2.appendChild(l21);
    col2.appendChild(l22);
    col2.appendChild(l23);
    col2.appendChild(l24);
    col2.appendChild(l25);
    col2.appendChild(l26);
    col2.appendChild(l27);
    col2.appendChild(l28);
    col2.appendChild(l29);

    lista.appendChild(col1);
    lista.appendChild(col2);

    const div = document.createElement('div');
    div.setAttribute("id", "reservation");
    const intro = document.createElement('h2');
    intro.innerHTML = "Ai facut o rezervare cu urmatoarele date: ";
    div.appendChild(intro);
    div.appendChild(lista);
    const main = document.getElementById('main');
    main.prepend(div);

    const overlay = document.createElement('div');
    overlay.setAttribute("id", "overlay");
    document.body.prepend(overlay);

    const ok = document.createElement('button');
    ok.innerHTML="inapoi la site";
    ok.addEventListener('click', deleteReservation);
    ok.classList.add('ok_button');
    div.appendChild(ok);

    const sterge = document.createElement('button');
    sterge.innerHTML="sterge rezervarea";
    sterge.addEventListener('click', () => localStorage.removeItem('userDetails'));
    sterge.addEventListener('click', deleteReservation);
    sterge.classList.add('sterge_button');
    div.appendChild(sterge);
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
    div.remove();
    overlay.remove();
}

function init () {
    const form = document.querySelector('form');
    document.addEventListener('submit', handleSubmit);
}

window.onload=init;