let numeroUtente = ((((Math.random() / 2) * 10) + 1).toFixed(0));
console.log(numeroUtente);
let numeroPC = ((((Math.random() / 2) * 10) + 1).toFixed(0));
console.log(numeroPC);

if (numeroUtente < numeroPC) {
    document.getElementById('target').innerHTML = "Numero Utente : " + numeroUtente + ", Numero PC : " + numeroPC + ", HAI PERSO!"
} else if (numeroUtente > numeroPC) {
    document.getElementById('target').innerHTML = "Numero Utente : " + numeroUtente + ", Numero PC : " + numeroPC + ", HAI VINTO!"
} else {
    document.getElementById('target').innerHTML = "Numero Utente : " + numeroUtente + ", Numero PC : " + numeroPC + ", PAREGGIO!"
}