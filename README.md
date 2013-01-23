underscore-inherit
==================

This underscore mixin adds constructor extensibility.

Install
-------

In the browser, simply include the script on the page (after `_` is defined).

In Node, all you need to do is `require('underscore-inherit')`.

Usage
-----

```js
var Animal = function () {};

_.extend(Animal.prototype, {
  sound: 'roarmeowbarkmoo',
  sing: function () {
  alert(Array(5).join(this.sound));
});

var Dog = _.inherit(Animal, {
  sound: 'woof'
});

var Dog = _.inherit(Animal, {
  sound: 'meow'
});

(new Animal()).sing();
(new Dog()).sing();
(new Cat()).sing();
```
