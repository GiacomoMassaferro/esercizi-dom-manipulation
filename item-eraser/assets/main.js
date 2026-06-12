console.log("main.jsloaded");

const bottoni = document.querySelectorAll(".rimuovi");

//dico a tutti i bottoni di ascoltare i click
bottoni.forEach(function (bottone) {
    bottone.addEventListener("click", function () {

        //prendo il genitore del bottone (li) che lo contiene
        const articolo = bottone.parentElement;
        // cancello l'intero articolo dalla pagina
        articolo.remove();
    });
})