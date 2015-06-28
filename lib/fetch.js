// Fakes an async call, returning a random int
// 1/3 of the time returns an error instead

// Callback version
// module.exports = function (max, errorRate, cb) {
//   process.nextTick(function () {
//     if (Math.random() < errorRate) {
//       cb(new Error('error retrieving random int'));
//     } else {
//       cb(null, Math.floor(Math.random() * max));
//     }
//   });
// }

// Promise version
module.exports = function (max, errorRate) {
  return new Promise(function (resolve, reject) {
    process.nextTick(function () {
      if (Math.random() < errorRate) {
        reject(new Error('error retrieving random int'));
      } else {
        resolve(Math.floor(Math.random() * max));
      }
    });
  });
};