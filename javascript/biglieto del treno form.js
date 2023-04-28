// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// variabili globali
const bottone = document.getElementById("calcola");
const annulla = document.getElementById("reset");
let name, distanzaKm, prezzo, anniPasseggero, biglietto

bottone.addEventListener("click", 
function(){

    const euroKm = 0.21;
    username = document.getElementById("name").value;
    distanzaKm = parseInt(document.getElementById("km").value);
    prezzo = 0;


    console.log(`Passegero: ${username}`)
    console.log(`Km: ${distanzaKm}`)

    prezzo = distanzaKm * euroKm;
    console.log(`Prezzo di base: ${prezzo}`);

    anniPasseggero = document.getElementById("anniPasseggero").value;

    biglietto = "Biglietto Standard";

    if( anniPasseggero=="1" ) {
        biglietto = "Biglietto Ridotto";
        sconto = (prezzo * 20) /100;
        prezzo = prezzo - sconto; 

    } else if ( anniPasseggero=="3") {
        biglietto = "Biglietto Over 65";
        sconto = (prezzo * 40) /100;
        prezzo = prezzo - sconto ; 
    }

    console.log("Offerta: " , biglietto);
    console.log(`Prezzo scontato: ${prezzo}`);


    document.getElementById("ticketName").innerText = username;
    document.getElementById("biglietto").innerText = biglietto;
    document.getElementById("prezzo").innerText = prezzo.toFixed(2)+"€";

} );

annulla.addEventListener("click", function() {

    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("anniPasseggero").value = "";

});
