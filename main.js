/* Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo. */


const playEmail = document.getElementById('playEmail');


playEmail.addEventListener('click' , function() {

    let containerMail = [ 'cicciobaciccio@gmail.com','pippoepluto@gmail.com', 'giovanniplayer@gmail.com' ];

    let emailUser = prompt ('Inserire la propria email').trim().toLowerCase();

    let userfound = false;

    for(i = 0; i < containerMail.length; i++){

        if(containerMail[i] === emailUser){
            userfound = true;
            break;
        }
    }

    if(userfound == true){

        alert("l'email inserita è corretta");
    }

    else {

        alert("ATTENZIONE l'email inserita non è stata trovata nel nostro database");
    }
});