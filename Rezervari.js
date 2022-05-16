function handleSubmit(event) {
    const fname = document.querySelector('[name="firstname"]').value;
    const lname = document.querySelector('[name="lastname"]').value;
    // const email = document.querySelector('[name="email"]').value;
    // const nr = document.querySelector('[name="nr"]').value;
    // const sosire = document.querySelector('[name="data_sosire"]').value;
    // const plecare = document.querySelector('[name="data_plecare"]').value;
    // const camera = document.querySelector('[name="camera"]').value;
    // const guests = document.querySelector('[name="guests"]').value;
    // const requests = document.querySelector('[name="requests"]').value;

    const regex = /^[A-Za-z-]+$/;
    console.log(regex.test(fname), regex.test(lname));
    
    if (!regex.test(fname) || !regex.test(lname)) {
        alert("Numele sau prenumele au fost introduse gresit");
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

function init () {
    document.addEventListener('submit', handleSubmit);
    setCameraValue();
}

window.onload=init;