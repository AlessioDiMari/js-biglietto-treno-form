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
const userName = document.getElementById("nome-utente");

const userKilometer = document.getElementById("chilometri-utente");

const userAge = document.getElementById("eta-utente");

// Salvo il button
const calcButton = document.getElementById("calc");




// Salvo nome passeggero, costo e offerta
let passengerName = document.getElementById("nome-passeggero");
let option = document.getElementById("offerta");
let price = document.getElementById("costo")


// Dichiaro le variabili del prezzo base e quello finale
let prezzoFinale;

// creo una funzione che parta al "click" del button

calcButton.addEventListener("click",

    function(){

        const prezzoFisso = userKilometer.value * 0.21;

        // Stampo in pagina nel biglietto il nome dell'utente
        passengerName.innerHTML = userName.value

        
        // Se l'utente ha meno di 18 anni verrà applicato
        // uno sconto del 20%
        if( userAge.value < 18){

            prezzoFinale = prezzoFisso - (prezzoFisso * 0.2);

            option.innerHTML = "Under 18";

            price.innerHTML = `${prezzoFinale}€`;

        } else if (userAge.value > 65){
            // Se l'utente ha più di 65 anni verrà applicato
            // uno sconto del 40%
            prezzoFinale = prezzoFisso - (prezzoFisso * 0.4);

            option.innerHTML = "Over 65";

            price.innerHTML = `${prezzoFinale}€`;

        } else {
            // Se nessuna delle due condizioni precedenti
            // non verrà soddisfatta non si applicherà nessuno sconto
            prezzoFinale = prezzoFisso;

            option.innerHTML = "Standard";

            price.innerHTML = `${prezzoFinale}€`;

        }

        // Scrivo il risultato con due cifre decimali
        prezzoFinale = prezzoFinale.toFixed(2)


        // Mostro il biglietto
        document.getElementById("risultato").style.display = "block";
    }

)