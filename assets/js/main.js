/* Mail
1 Chiedi all’utente la sua email
2 Controlla che sia nella lista di chi può accedere
3 Stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
 */

//Ask to the user to insert his/her email
const userEmail = prompt('Please insert your email')

//Create Email's list
const emailList = ['prima@gmail.com', 'seconda@gmail.com']

//Checking if the userEmail is in the EmailList
for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] == userEmail) {
        console.log('Welcome')
    } else {
        console.log('Your email is not in the list')
    }
}  





// Dices Game
/* Generare un numero random da 1 a 6 sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
 */

const userChoice = Math.ceil(Math.random()*6)
const computerChoice = Math.ceil(Math.random()*6)
if (userChoice > computerChoice) {
    console.log(userChoice, computerChoice)
    console.log('You won!')
} else {
    console.log(userChoice, computerChoice)
    console.log('You lost!')
}
