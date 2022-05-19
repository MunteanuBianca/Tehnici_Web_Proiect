function handleSubmit(event) {
    const fname = document.querySelector('[name="firstname"]').value;
    const lname = document.querySelector('[name="lastname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const nr = document.querySelector('[name="nr"]').value;
    const sosire = document.querySelector('[name="data_sosire"]').value;
    const plecare = document.querySelector('[name="data_plecare"]').value;
    // const camera = document.querySelector('[name="camera"]').value;
    // const guests = document.querySelector('[name="guests"]').value;
    // const requests = document.querySelector('[name="requests"]').value;

    const regexNume = /^[A-Za-z- ]+$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexNr =  /^\+?[0-9]{11}$/;
    console.log(regexNume.test(fname), regexNume.test(lname), regexEmail.test(email), regexNr.test(nr));
    console.log(fname,lname,email,nr);
    
    if (!regexNume.test(fname) || !regexNume.test(lname) || !regexEmail.test(email) || !regexNr.test(nr) || sosire>=plecare) {
        alert("Datele au fost introduse gresit");
        event.preventDefault(); 
    }
   
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

async function nrCamere() {
    const res=await fetch('/fetch');
    const data = await res.json();
    let nr=0;
    data.forEach(element => {
        if(element.data_plecare < '2022-06-01')
            nr++;
    });
    let pNrCamere = document.createElement('h2');
    pNrCamere.textContent=`Numarul de camere rezervate in luna Mai: ${nr}`;
    pNrCamere.style.textAlign="center";
    document.querySelector('main').appendChild(pNrCamere);
    console.log(data.length);

}

function init () {
    document.addEventListener('submit', handleSubmit);
    setCameraValue();
    nrCamere();
}

window.onload=init;