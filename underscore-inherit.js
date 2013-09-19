(function () {
  'use strict';

  // Browser and Node.js friendly
  var node = typeof window === 'undefined';
  var _ = node ? require('underscore') : window._;

  // Define the mixin
  _.mixin({
    inherit: function () {
      var protoProps;
      var staticProps;
      var Parent = _.reduce(arguments, function (Parent, arg) {
        if (_.isFunction(arg)) {
          if (!Parent) return arg;
          return _.inherit(arg, {constructor: Parent});
        }
        if (_.isObject(arg)) {
          if (!protoProps) {
            protoProps = arg;
          } else if (!staticProps) {
            staticProps = arg;
          }
        }
        return Parent;
      }, null) || function () {};

      // `Child` is the passed in `constructor` proto property
      // or a default function that uses `Parent`'s constructor
      var Child =
        protoProps && _.has(protoProps, 'constructor') ?
        protoProps.constructor :
        function () { return Parent.apply(this, arguments); };

      // `Dummy` is a dummy constructor to ensure `Parent.constructor`
      // isn't actually called as it could have unintended
      // side effects
      var Dummy = function () { this.constructor = Child; };

      // Pass on static properties
      _.extend(Child, Parent, staticProps);

      // Set up inheritance and merge prototype properties
      Dummy.prototype = Parent.prototype;
      Child.prototype = _.extend(new Dummy(), protoProps);

      // Return the finished constructor
      return Child;
    }
  });
})();
