console.log("main.js loaded");

const input = document.querySelectorAll("input");
const form = document.querySelector("#profilo");

//ascolto quando l'utente invia il form
form.addEventListener("submit", function (event) {

    //controllo se il primo input o il secondo sono vuoti
    if (input[0].value === "" || input[1].value === "") {
        //prevengo l'invio del form
        event.preventDefault();

        alert("si prega di riempire i campi");
    }
})

