let toggleBauturi=false;
let toggleMancare=false;
let toggleDesert=false;
window.onload=()=>{
    let buttonBauturi = document.getElementById("clickBauturi");
    buttonBauturi.addEventListener("click", function(){myFunction("bauturi", toggleBauturi);});

    let buttonMancare = document.getElementById("clickMancare");
    buttonMancare.addEventListener("click", function(){myFunction("mancare", toggleMancare);});
    
    let buttonDesert = document.getElementById("clickDeserturi");
    buttonDesert.addEventListener("click", function(){myFunction("desert", toggleDesert);});

}
function myFunction(arg, toggle) {
    toggle=!toggle;
    let elements=document.getElementsByClassName(arg);
    if(!toggle) {
        Array.from(elements).forEach(element => element.classList.remove("show"));
        return;
    }
    Array.from(elements).forEach(element => element.classList.toggle("show"));
}