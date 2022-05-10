// const { default: swal } = require("sweetalert");

function handleSubmit(event) {
    const fname = document.querySelector('[name="firstname"]').value;
    const lname = document.querySelector('[name="lastname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const nr = document.querySelector('[name="nr"]').value;


    const div = document.createElement('div');
    div.setAttribute("id", "alert");
    div.innerHTML = fname + " " + lname;
    div.style.position = "fixed";
    div.style.left="50%";
    div.style.top="50%";
    div.style.transform="translate(-50%, -50%)";
    div.style.textAlign="center";
    div.style.zIndex="3";
    div.style.backgroundColor="white";
    div.style.padding="2%";
    div.style.borderColor="purple";
    div.style.borderWidth="5px";
    div.style.borderStyle="solid";
    div.style.borderRadius="25px";

    const overlay = document.createElement('div');
    overlay.setAttribute("id", "overlay");
    overlay.style.position="fixed";
    overlay.style.left="0";
    overlay.style.top="0";
    overlay.style.width="100%";
    overlay.style.height="100%";
    overlay.style.zIndex="2";
    overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    document.body.prepend(overlay);

    const main = document.getElementById('main');
    main.prepend(div);

    console.log(div.innerHTML);
    event.preventDefault();   
}

function deleteAlert() {
    const div = document.getElementById("alert");
    const overlay = document.getElementById("overlay");
    div.remove();
    overlay.remove();
}

function init () {
    const form = document.querySelector('form');
    document.addEventListener('submit', handleSubmit);
    document.addEventListener('click', deleteAlert)
}

window.onload=init;