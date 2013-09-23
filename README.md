# underscore-inherit

[![Build Status](https://secure.travis-ci.org/caseywebdev/underscore-inherit.png)](http://travis-ci.org/caseywebdev/underscore-inherit)

Add constructor extensibility to Underscore.js.

## Install

In the browser, simply include the script on the page (after `_` is defined).

In Node, all you need to do is `require('underscore-inherit')`.

## Usage

```js
var Animal = _.inherit({
  name: 'Chupacabra',
  sound: 'roarmeowbarkmoo',
  sing: function () {
    alert(this.name + ' says ' + Array(5).join(this.sound));
  }
});

var HardWorker = _.inherit();

var Dog = _.inherit(Animal, HardWorker, {
  name: 'Gunner',
  sound: 'woof'
}, {staticProp: 'hello'});

var Cat = _.inherit(Animal, {
  name: 'Mittens',
  sound: 'meow'
});

(new Animal()).sing();
(new Cat()).sing();
(new Dog()).sing();

// (new Cat) instanceof Animal === true
// (new Cat) instanceof Cat === true

// Dog.staticProp === true
// (new Dog) instanceof Animal === true
// (new Dog) instanceof HardWorker === true
// (new Dog) instanceof Dog === true
```
