// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// variabili globali
let anniPasseggero, distanzaKm, sconto, prezzo;
const euroKm=0.21



distanzaKm = parseInt(prompt('Quanti km vuoi percorrere? '));

anniPasseggero = parseInt(prompt('Quanti anni hai? '));

    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
prezzo = distanzaKm * euroKm ;

    // va applicato uno sconto del 20% per i minorenni

if( anniPasseggero < 18){

    sconto = (prezzo * 20) /100;
    prezzo = prezzo - sconto; 

    // va applicato uno sconto del 40% per gli over 65.

}else if( anniPasseggero >=  65)
{
    sconto = (prezzo * 40) /100;
    prezzo = prezzo - sconto ; 
   

}

// else{
//     sconto = 0;
    
// }
console.log(sconto)
console.log(prezzo)

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

document.getElementById('totale').innerHTML = prezzo.toFixed(2)+"€"; 