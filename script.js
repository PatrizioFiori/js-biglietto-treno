/*
- Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


let kmPercorsi = parseInt(prompt("Quanti km devi percorrere ?"));
let eta = parseInt(prompt("Quanti anni hai ?"));

let costoBiglietto = kmPercorsi * 0.21;
let prezzoScontato;

if (eta < 18 ){
    let discount = 20;
    prezzoScontato = costoBiglietto * (1- discount/100);

} else if (eta >= 65) {
    let discount = 40;
    prezzoScontato = costoBiglietto * (1- discount/100);
}
else{
    prezzoScontato = costoBiglietto;
}

console.log(`Il costo totale è di ${prezzoScontato.toFixed(2)} €`);



