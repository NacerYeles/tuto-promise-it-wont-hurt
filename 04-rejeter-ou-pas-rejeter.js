var promise = new Promise((fulfill, reject) => {
    fulfill(`J'AI ETE APPELEE`);
    reject(new Error(`JE N'AI PAS ETE APPELEE`));
});

function onReject(error){
    console.log(error.message);
}

promise.then((valeur) => {
console.log(valeur);
}, (err) => {
    onReject(err)
})

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// ✓ Vos résultats correspondent à ceux attendus
// ✓ A utilisé la constructeur Promise
// ✓ A utilisé la méthode reject avec un objet Error
// ✓ A utilisé la méthode reject après avoir appelé fulfill
// ✓ Vous avez utilisé la méthode `.then` avec ses deux fonctions de rappel

// # RÉUSSI

// Votre solution pour Rejeter ou ne pas rejeter fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     var promise = new Promise(function (fulfill, reject) {
//       fulfill("J'AI ETE APPELEE");
//       reject(new Error("JE N'AI PAS ETE APPELEE"));
//     });

//     function onReject (error) {
//       console.log(error.message);
//     }

//     promise.then(console.log, onReject);


// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 9 défis.
// Tapez 'promise-it-wont-hurt' pour afficher le menu.