/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/


// Dichiaro le variabili degli input
const userKilometer = document.getElementById("chilometri-utente");

const userAge = document.getElementById("eta-utente");

// Salvo il button
const calcButton = document.getElementById("calc");

// Dichiaro le variabili del prezzo base e quello finale

const prezzoFisso = userKilometer * 0.21;

let prezzoFinale;

// creo una funzione che parta al "click" del button

calcButton.addEventListener("click",

    function(){

        // Se l'utente ha meno di 18 anni verrà applicato
        // uno sconto del 20%
        if( userAge < 18){

            prezzoFinale = prezzoFisso - (prezzoFisso * 0.2);

        } else if (userAge > 65){
            // Se l'utente ha più di 65 anni verrà applicato
            // uno sconto del 40%
            prezzoFinale = prezzoFisso - (prezzoFisso * 0.4);

        } else {
            // Se nessuna delle due condizioni precedenti
            // non verrà soddisfatta non si applicherà nessuno sconto
            prezzoFinale = prezzoFisso;

        }

        // Scrivo il risultato con due cifre decimali
        prezzoFinale = prezzoFinale.toFixed(2)

    }

)