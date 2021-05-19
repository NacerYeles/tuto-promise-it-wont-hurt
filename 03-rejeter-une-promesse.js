'use strict';

var promise = new Promise((fulfill, reject) => {
    reject(new Error(`REJET !`))
});

function onReject(error){
    console.log(error.message);
}
setTimeout(() => {
    promise.then((value) => {
        
    }, (erreur) => {
        onReject(erreur)
    })
}, 300);;


/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// # RÉUSSI

// Votre solution pour Rejeter une promesse fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     // Crée la promesse
//     var promise = new Promise(function (fulfill, reject) {
//       // Une fois atteint le timeout de 300ms, on rejette la
//       // promesse avec un objet `Error` dont le message est « REJET ! ».
//       setTimeout(reject, 300, new Error('REJET !'))
//     })

//     // Crée la fonction qui affichera `error.message` à l’aide
//     // de `console.log`.

//     function onReject (error) {
//       console.log(error.message);
//     }

//     // Passe cette fonction comme gestionnaire de rejet à la méthode
//     // `then` de la promesse (le 2e argument).

//     promise.then(null, onReject);


// ────────────────────────────────────────────────────────────────────────────────

