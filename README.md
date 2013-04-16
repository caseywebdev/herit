underscore-inherit
==================

Add constructor extensibility to Underscore.js.

Install
-------

In the browser, simply include the script on the page (after `_` is defined).

In Node, all you need to do is `require('underscore-inherit')`.

Usage
-----

```js
var Animal = function () {};

_.extend(Animal.prototype, {
  name: 'Chupacabra',
  sound: 'roarmeowbarkmoo',
  sing: function () {
    alert(this.name + ' says ' + Array(5).join(this.sound));
  }
});

var Dog = _.inherit(Animal, {
  name: 'Gunner',
  sound: 'woof'
});

var Cat = _.inherit(Animal, {
  name: 'Mittens',
  sound: 'meow'
});

(new Animal()).sing();
(new Dog()).sing();
(new Cat()).sing();
```
