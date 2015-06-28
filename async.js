var fetch = require('./lib/fetch');

// Using callbacks
// fetch(100, 0, function (err, a) {
//   if (err) {
//     console.error(err);
//     return;
//   }
  
//   console.log('First number is', a);

//   fetch(100, 0, function (err, b) {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log('Second number is', b);

//     fetch(100, 0, function (err, c) {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       console.log('Third number is', c);

//       console.log('Sum of %s + %s + %s = %s', a, b, c, a + b + c);
//     })
//   })
  
// });


// Using promises
fetch(100, 0.2)
  .then(function (a) {
    console.log('First number is', a);
    return fetch(100, 0.2);
  })
  .then(function (b) {
    console.log('Second number is', b);
    return fetch(100, 0.2);
  })
  .then(function (c) {
    console.log('Third number is', c);
    console.log('Sum is', a + b + c);
  })
  .catch(function (err) {
    console.error(err);
  });


// Using promises nested
fetch(100, 0.2)
  .then(function (a) {
    console.log('First number is', a);
    return fetch(100, 0.2)
      .then(function (b) {
        console.log('Second number is', b);
        return fetch(100, 0.2)
          .then(function (c) {
            console.log('Third number is', c);
            console.log('Sum is', a + b + c);
          });
      });
  })
  .catch(function (err) {
    console.error(err);
  });


console.log('after the fetch');