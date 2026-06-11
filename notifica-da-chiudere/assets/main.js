const chiudi = document.querySelector("#chiudi");
const notifica = document.querySelector("#notifica");

chiudi.addEventListener('click', function () {
    // notifica.style.display = "none";//nasconde l'elemento dal dom    

    notifica.remove();//elimina l'elemento dal dom
})