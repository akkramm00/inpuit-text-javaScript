// Opération ciblage des variables :
let username = document.getElementById('username');
let description = document.getElementById('description');

// Vérification des cibles dans la console :
 console.log(username);
 console.log(description);
// => cette opération permet d'afficher les elements du DOM dans la console.

// pour afficher plus d'information sur les objets qui sont representés dérière ces éléments du Dom/
// Dans ce cas on peut utiliser à la place du mot 'log' le mot "dir" :
console.dir(username);
console.dir(description);

// => cette opération permet d' afficher toutes les propriétés des objets de Dom en javaScript:
//les consoel.dir ne sont affichés qu'une seule fois au chargement de la page .et ils ne permettent pas d'afficher les value aprés 
// on rajoute un value a l'élément "username" en html.

console.log(username.value); // ca remet a jour la valeur du champ;et affiche 'test' dans la console.

// Add un eventListener a username :permet d'afficher les valeurs saisis directement sur le champ "value":
username.addEventListener('input' ,() => {
    console.log(username.value);
});
// On  peut méme assigner une valeur direct au champ username avec: ".value":
 description.value = 'bonjour...!'; //===EXMPLE===\\

 // "En JavaScript, on utilise l'événement "input" pour détecter les changements de valeur d'un champ de saisie en temps réel.
 // Cet événement se déclenche chaque fois que l'utilisateur modifie le contenu d'un champ de saisie, y compris lorsqu'il ajoute, supprime
 // ou modifie le texte."

// "focus" l'événemnt qui permet de détécter qu'un champ a été cliqué ;EXEMPLE/

let inputElements = document.querySelectorAll('input,textarea');

inputElements.forEach((inputElement) => {
    inputElement.addEventListener('focus', () {
        console.log(`L'utilisateur est entré dans l'input: s{event.target.name}`)
    });
});

// on peut forcer sur le champ de saisi directement avec le ".focus()"
username.focus();