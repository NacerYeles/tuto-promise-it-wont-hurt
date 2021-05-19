var promise = new Promise((fulfill, reject) => {
    fulfill(`VALEUR DE LA PROMESSE`);
});


promise.then((valeur) => {
    console.log("PROGRAMME PRINCIPAL");
    console.log(valeur);
})

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/

// # RÉUSSI

// Votre solution pour Toujours asynchrone fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     var promise = new Promise(function (fulfill, reject) {
//       fulfill('VALEUR DE LA PROMESSE');
//     });

//     // À ce stade, la valeur de la promesse est déjà connue.

//     // Si la promesse n’est pas toujours asynchrone, `console.log`
//     // sera appelée avec 'VALEUR DE LA PROMESSE' ci-après.  Ce
//     // n’est toutefois pas le cas.

//     promise.then(console.log);

//     console.log('PROGRAMME PRINCIPAL');


// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 8 défis.
// Tapez 'promise-it-wont-hurt' pour afficher le menu.
