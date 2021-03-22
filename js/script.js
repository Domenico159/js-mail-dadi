
// Esercizio 1

// Funcion
function mail() {
    var user= (document.getElementById('user').value).toLowerCase();
    var allUser =['boolean@gmail.com' , 'pincopallino@gmail.com' , 'user159@libero.it']
    var countMax = allUser.length;
    var userFound = false;

    if(isNaN(user)){
        for (var i = 0; i < countMax; i++){
            // console.log(countMax);
    
            if((allUser[i] === user) && (isNaN)) {
                userFound=true;
                // console.log('trovato');
            }
        }
    
        if(userFound === true){
            document.getElementById('result').innerHTML = 'Account verificato correttamente';
        }else{
            document.getElementById('result').innerHTML = 'Account non trovato o non corretto , per favore riprovare.';
        }
    }else{
        alert('Attenzione , caratteri non corretti o inesistenti , per vafore inserire un formato letterario, grazie.');
    }
}


// Esercizio numero 2

function gioco() {
    var user1 = document.getElementById("user1").innerHTML = Math.floor(Math.random() * 6) + 1;
    var computer = document.getElementById("computer").innerHTML = Math.floor(Math.random() * 6) + 1;

    if(user1 > computer){
        document.getElementById('risultato').innerHTML = 'HA VINTO IL GIOCATORE USER1';
    }else if (user1 < computer) {
        document.getElementById('risultato').innerHTML = 'HA VINTO IL COMPUTER';
    }else{
        document.getElementById('risultato').innerHTML = 'PARTITA FINITA CON UN PAREGGIO';
    }

}