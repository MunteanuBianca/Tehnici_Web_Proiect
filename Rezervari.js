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

    const regex = /^[A-Za-z-]+$/;
    console.log(regex.test(fname), regex.test(lname));
    if (regex.test(fname) && regex.test(lname)) {
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
    }  
    
    else alert("Numele sau prenumele au fost introduse gresit");

    event.preventDefault();   
}

function showReservation() {
    userDetails = JSON.parse(localStorage.getItem('userDetails'));

    const l21 = document.getElementById('l21');
    const l22 = document.getElementById('l22');
    const l23 = document.getElementById('l23');
    const l24 = document.getElementById('l24');
    const l25 = document.getElementById('l25');
    const l26 = document.getElementById('l26');
    const l27 = document.getElementById('l27');
    const l28 = document.getElementById('l28');
    const l29 = document.getElementById('l29');

    l21.innerHTML=`${userDetails.lname}`;
    l22.innerHTML=`${userDetails.fname}`;
    l23.innerHTML=`${userDetails.email}`;
    l24.innerHTML=`${userDetails.nr}`;
    l25.innerHTML=`${userDetails.sosire}`;
    l26.innerHTML=`${userDetails.plecare}`;
    l27.innerHTML=`${userDetails.camera}`;
    l28.innerHTML=`${userDetails.guests}`;
    l29.innerHTML=`${userDetails.requests}`;

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
    // div.remove();
    div.style.display="none";
    overlay.remove();
}

function setCameraValue() {
    const form = document.querySelector('form');
    const camera = document.querySelector('[name="camera"]'); 
    const dubla = document.getElementById("dubla");
    const tripla= document.getElementById("tripla");
    const apartament = document.getElementById("apartament");
    const delux = document.getElementById("delux");

    dubla.addEventListener('click', () => {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        camera.value="dubla";
        console.log(camera.value);
    });

    tripla.addEventListener('click', () => {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        camera.value="tripla";
        console.log(camera.value);
    });

    apartament.addEventListener('click', () => {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        camera.value="apartament";
        console.log(camera.value);
    });

    delux.addEventListener('click', () => {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        camera.value="delux";
        console.log(camera.value);
    });
    
}

function init () {
    const form = document.querySelector('form');
    document.addEventListener('submit', handleSubmit);
    setCameraValue();
}

window.onload=init;