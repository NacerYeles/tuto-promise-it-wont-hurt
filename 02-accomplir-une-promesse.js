
'use strict';

var promise = new Promise((fulfill, reject) => {
    fulfill('ACCOMPLIE !')
});

setTimeout(() => {
    promise.then((value) => {
        console.log(value);
    })
}, 300);;

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// # RÉUSSI

// Votre solution pour Accomplir une promesse fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     // Crée la promesse
//     var promise = new Promise(function (fulfill, reject) {
//       // Une fois atteint le timeout de 300ms, on accomplit la
//       // promesse avec la valeur « ACCOMPLIE ! ».
//       setTimeout(fulfill, 300, 'ACCOMPLIE !')
//     })

//     // Ajout d’un gestionnaire pour l’accomplissement de la promesse.
//     // `console.log` sera appelée avec la valeur passée à `fulfill`, à
//     // savoir « ACCOMPLIE ! ».  Remarquez que cette instruction sera
//     // TOUJOURS appelée avec que `fulfill` soit appelée (nous y reviendrons
//     // dans les leçons qui suivent).

//     promise.then(console.log);


// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 11 défis.
// Tapez 'promise-it-wont-hurt' pour afficher le menu.
