# herit

[![Build Status](https://secure.travis-ci.org/caseywebdev/herit.png)](http://travis-ci.org/caseywebdev/herit)

Easy to use JavaScript "Class" inheritance with support for "instance" and
"static" properties.

## Install

In the browser, simply include the script on the page.

In Node, all you need to do is `var herit = require('herit')`.

## Usage

```js
var Animal = herit({
  name: 'Chupacabra',
  sound: 'roarmeowbarkmoo',
  sing: function () {
    alert(this.name + ' says ' + Array(5).join(this.sound));
  }
});

var HardWorker = herit();

var Dog = herit(Animal, HardWorker, {
  name: 'Gunner',
  sound: 'woof'
}, {staticProp: 'hello'});

var Cat = herit(Animal, {
  name: 'Mittens',
  sound: 'meow'
});

(new Animal()).sing(); // alert('Chupacabra says roarmeowbarkmooroarmeowbarkmooroarmeowbarkmooroarmeowbarkmooroarmeowbarkmoo')
(new Cat()).sing(); // alert('Mittens says meow')
(new Dog()).sing(); // alert('Gunner says woof')

// (new Cat) instanceof Animal === true
// (new Cat) instanceof Cat === true

// Dog.staticProp === 'hello'
// (new Dog) instanceof Animal === true
// (new Dog) instanceof HardWorker === true
// (new Dog) instanceof Dog === true
```
