// vettori con i caratteri che verranno usati
var generateBtn=document.querySelector("#generate");
var lowercaseChars="abcdefghijklnopqrstuvwxyz";
var uppercaseChars="ABCDEFGHIJKLONPQURSTUVWXYZ";
var numberChars="1234567890";
var specialChars="=+!@#$%^&*()[]";
var password="";

// info psw
function generateSinglePassword(length, lowerCase, upperCase, numbers, special) {
    var selectedChars="";

    // scelte
    if (lowerCase){
        selectedChars+=lowercaseChars;
    }
    if (upperCase){
        selectedChars+=uppercaseChars;
    }
    if (numbers){
        selectedChars+=numberChars;
    }
    if (special){
        selectedChars+=specialChars;
    }

    // vero e proprio psw gen
    var generatedPassword="";
    for (var i=0; i<length; i++) {
        generatedPassword += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
    }

    return generatedPassword;
}

// funzione gen
function generatePassword() {
    // info per la generazione
    var passwordLength=prompt("Quanto lunga deve essere la password? Minimo 8 caratteri e massimo 128 caratteri.");
    if (passwordLength<8 || passwordLength>128 || isNaN(passwordLength)) {
        alert("La lunghezza deve essere compresa tra 8 e 128 caratteri.");
        return;
    }

    var lowerCase=confirm("Minuscole?");
    var upperCase=confirm("Maiuscole?");
    var numbers=confirm("Numeri?");
    var special=confirm("Caratteri speciali?");

    // almeno una scelta!!!
    if (!(lowerCase || upperCase || numbers || special)) {
        alert("Almeno una scelta! Stai programmando in Whitespace??");
        return;
    }

    // alert num psw
    var numberOfPasswords = prompt("Quante password vuoi generare?");
    if (numberOfPasswords===null || isNaN(numberOfPasswords) || numberOfPasswords<1) {
        alert("Inserisci un numero valido di password da generare.");
        return;
    }

    var generatedPasswords="";
    // ciclo per generare il numero di password
    for (var j=0; j<numberOfPasswords; j++) {
        generatedPasswords += generateSinglePassword(passwordLength, lowerCase, upperCase, numbers, special)+"\n";
    }

    // restituisci psw generate
    var passwordText=document.querySelector("#password");
    passwordText.textContent = generatedPasswords;
}

// indice per il tasto genera
generateBtn.addEventListener("click", generatePassword);
