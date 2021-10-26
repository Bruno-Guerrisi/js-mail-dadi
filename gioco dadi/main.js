/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const playGame = document.getElementById('playGame');


playGame.addEventListener('click' , function() {

    /* primo numero con validazioni */
    let numOne = Math.floor(Math.random() * 7);;

    alert(`Il numero generato per il player è: (${numOne})`);

    /* secondo numero da computer*/
    let numTwo = Math.floor(Math.random() * 7);;

    /* numero maggiore */
    if(numOne > numTwo){

        alert(`vince il PLAYER con il numero: (${numOne}), è maggiore del numero del COMPUTER: (${numTwo})`);
    } 
    else if(numOne < numTwo){

        alert(`vince il COMPUTER con il numero: (${numTwo}), è maggiore del numero del PLAYER: (${numOne})`);
    } 
    else{

        alert(`Hai pareggiato con il COMPUTER, il numero scelto da entrambi è: (${numOne})`);
    }
});