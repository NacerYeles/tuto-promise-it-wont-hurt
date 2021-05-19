// Pour une promesse qui va etre resolue, le then car il a un premier parametre de retour positif
// var promiseResolve = Promise.resolve("VALEUR SECRETE");

// promiseResolve.then((value) => {
//     console.log(value);
// })

// Pour une promesse qui va etre rejeter, le catch est utile au lieu de faire le then 
var promiseReject = Promise.reject(new Error("OH LE SOUCI"));

promiseReject.catch((err) => {
    console.log('IL Y A UN SOUCI !');
    console.log(err.message);
})

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/

// # PASS

// Your solution to Shortcuts passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     var message;
//     var promise;

//     function randomBytes(n) {
//       return (Math.random() * Math.pow(256, n) | 0).toString(16);
//     }

//     message =
//       'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
//       randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
//       'terminated in 3 seconds.';

//     promise = Promise.reject(new Error(message));

//     promise.catch(function (err) {
//       var i = 3;

//       process.stderr.write(err.message);

//       setTimeout(function boom() {
//         process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
//         if (!i) {
//           process.stderr.write('\n..... . . . boom . . . .....\n');
//         } else {
//           setTimeout(boom, 1000);
//         }
//       }, 1000);
//     });


// ────────────────────────────────────────────────────────────────────────────────

// You have 7 challenges left.
// Type 'promise-it-wont-hurt' to show the menu.

