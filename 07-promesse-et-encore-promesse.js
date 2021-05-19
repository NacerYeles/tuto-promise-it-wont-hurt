// var first = new Promise((fulfill, reject) => {
//     fulfill(`VALEUR DE LA PROMESSE`);
// });

first().then((value) => {
    return second(value);
}).then((value) => {
    onFulfilled(value);
})

function onFulfilled(e){
    console.log(e);
}


/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// ✓ Vos résultats correspondent à ceux attendus
// ✓ `first().then` a bien renvoyé une promesse
// ✓ A utilisé la méthode second

// # RÉUSSI

// Votre solution pour Des promesses et encore des promesses fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     /* global first, second */

//     var firstPromise = first();

//     var secondPromise = firstPromise.then(function (val) {
//       return second(val);
//     });

//     secondPromise.then(console.log);

//     // Une autre possibilité aurait été :
//     // first().then(second).then(console.log);


// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 6 défis.
// Tapez 'promise-it-wont-hurt' pour afficher le menu.
