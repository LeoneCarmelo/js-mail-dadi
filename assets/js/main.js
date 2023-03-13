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
 
