(function() {
  'use strict';

  // Browser and Node.js friendly
  var node = typeof window === 'undefined';
  var _ = node ? require('underscore') : window._;

  // Define the mixin
  _.mixin({
    inherit: function (Parent, proto, static) {

      // `Child` is the passed in `constructor` proto property
      // or a default function that uses `Parent`'s constructor
      var Child =
        proto && _.has(proto, 'constructor') ?
        proto.constructor :
        function () { return Parent.apply(this, arguments); };

      // `Dummy` is a dummy function to ensure `Parent.constructor`
      // isn't actually called as it could have unintended
      // side effects
      function Dummy() { this.constructor = Child; };

      // Pass on convenience `__super__` and `static` properties
      _.extend(Child, Parent, {__super__: Parent.prototype}, static);

      // Set up inheritance and merge `proto` properties
      Dummy.prototype = Parent.prototype;
      Child.prototype = _.extend(new Dummy, proto);

      // Return the finished constructor
      return Child;
    }
  });
})();
