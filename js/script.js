// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//Chiedere numero di chilometri che vuole percorrere
var numeroChilometri = parseInt(prompt("Quanti km vuoi percorrere?"));
document.getElementById("km").innerHTML = numeroChilometri + " km";
console.log(numeroChilometri);
//Chiedere età del passeggero
var eta = parseInt(prompt("Quanti anni hai?"));
document.getElementById("eta").innerHTML = eta + " anni";
console.log(eta);
//Calcolo prezzo del viaggio
//Totale (0.21 € * km) 
var prezzoTotale = parseFloat(numeroChilometri * 0.21).toFixed(2);
console.log(prezzoTotale)
//Controllo età se inferiore di 18 anni sconto del 20% sul totale, anche se maggiore di 65 sconto del 40% sul totale
//Output di prezzo con solo due cifre decimali
var prezzoScontato1;
var prezzoScontato2;

if ( eta < 18) {
    console.log("il passeggero è minorenne");  
    document.getElementById("sconto").innerHTML = "Il passeggero è minorenne, ha ricevuto uno sconto del 20% sul totale: " + prezzoTotale +" €";
    prezzoScontato1 = parseFloat(prezzoTotale - (prezzoTotale * 0.2)).toFixed(2);
    document.getElementById("prezzo").innerHTML = prezzoScontato1 + " €";
}else if( eta >= 65 ){
    console.log("il passeggero è over 65");  
    prezzoScontato2 = parseFloat(prezzoTotale - (prezzoTotale * 0.4)).toFixed(2);
    document.getElementById("sconto").innerHTML = "Il passeggero è over 65, ha ricevuto uno sconto del 40% sul totale: " + prezzoTotale +" €";
    document.getElementById("prezzo").innerHTML = prezzoScontato2 +" €";
}else{
    console.log("il passeggero non è minorenne e non è over 65");
    document.getElementById("prezzo").innerHTML = prezzoTotale +" € ";
    document.getElementById("sconto").innerHTML = "Il passeggero non rientra in nessuna fascia d'età per ricevere uno sconto sul totale";
}





