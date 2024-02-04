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

// Salvo il risultato
const result = document.getElementById("risultato");

// Dichiaro le variabili del prezzo base e quello finale



let prezzoFinale;

// creo una funzione che parta al "click" del button

calcButton.addEventListener("click",

    function(){

        const prezzoFisso = userKilometer.value * 0.21;
        
        // Se l'utente ha meno di 18 anni verrà applicato
        // uno sconto del 20%
        if( userAge.value < 18){

            prezzoFinale = prezzoFisso - (prezzoFisso * 0.2);

            result.innerHTML = "Hai meno di 18 anni, hai diritto ad uno sconto del 20%!"

        } else if (userAge.value > 65){
            // Se l'utente ha più di 65 anni verrà applicato
            // uno sconto del 40%
            prezzoFinale = prezzoFisso - (prezzoFisso * 0.4);

            result.innerHTML = "Hai più di 65 anni, hai diritto ad uno sconto del 40%!"

        } else {
            // Se nessuna delle due condizioni precedenti
            // non verrà soddisfatta non si applicherà nessuno sconto
            prezzoFinale = prezzoFisso;

        }

        // Scrivo il risultato con due cifre decimali
        prezzoFinale = prezzoFinale.toFixed(2)

        result.innerHTML += `<br>Il pagamento viene di ${prezzoFinale}€`

    }

)