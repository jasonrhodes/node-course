var util = require('util');


// format
var result = {
  name: 'Jane',
  fruits: ['apple', 'banana', 'kiwi']
};

console.log(util.format('%s has %d fruits', result.name, result.fruits.length));




// log and debuglog? -- util has a lot of old deprecated methods that were replaced
util.log(util.format('%s has %d fruits', result.name, result.fruits.length));

var debug = util.debuglog('FOO');

// requires file to be run with NODE_DEBUG=FOO node util.js
debug('Something DEBUG something FOO something');






// inspect
var deep = {
  name: 'Jane',
  fruits: ['apple', 'banana', 'kiwi'],
  thing: {
    deeper: {
      foo: 'bar',
      baz: {
        deepest: 'here'
      }
    }
  }
};
console.log(util.inspect(deep));
console.dir(deep);
console.log(util.inspect(deep, { depth: 3 }));



// deprecate
var old = {};
old.fn = util.deprecate(function () {
  console.log('an old deprecated function');
}, 'Warning: this is the deprecation notice');

old.fn();



// inherits
function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.getName = function () {
  return this.name;
}

function Car(name) {
  Vehicle.apply(this, arguments);
  this.wheels = 4;
}

util.inherits(Car, Vehicle);

var auto = new Car('Toyota Rav4');
console.log(util.inspect(auto, { depth: null }));
console.log(auto.getName());