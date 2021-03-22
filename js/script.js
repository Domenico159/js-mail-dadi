
// Funcion
function mail() {
    var user= (document.getElementById('user').value).toLowerCase();
    var allUser =['boolean@gmail.com' , 'pincopallino@gmail.com' , 'user159@libero.it']
    var countMax = allUser.length;
    var userFound = false;

    for (var i = 0; i < countMax; i++){
        console.log(countMax);

        if(allUser[i] === user){
            userFound=true;
            console.log('trovato');
        }
    }

    if(userFound === true){
        document.getElementById('result').innerHTML = 'Account verificato correttamente';
    }else{
        document.getElementById('result').innerHTML = 'Account non trovato o non corretto , per favore riprovare.';
    }
}