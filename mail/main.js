const listaMails = ['pumoiheijouzi-9999@yopmail.com','wuttoiffemmicra-9237@yopmail.com','mariorossi@gmail.com', 'xonoffobrouttei-1146@yopmail.com', 'flaviorodolfi@gmail.com', 'giorgioverdi@gmail.com', 'savexennauxe-4592@yopmail.com', 'trigretretoive-4150@yopmail.com'];

let mailUtente = prompt("Qual è la tua mail?")

if (listaMails.includes(mailUtente) == true) {
    alert('Accesso Consentito');
    document.getElementById('target').innerHTML = "Benvenuto nella Home Page!";
} else {
    alert('Accesso Negato')
};