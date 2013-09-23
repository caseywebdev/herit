var _ = require('underscore');
require('..');
var expect = require('chai').expect;

describe('A simple "class"', function () {
  var Klass = _.inherit({
    constructor: function () { this.instanceProp = 'a'; },
    protoProp: 'b'
  }, {
    staticProp: 'c'
  });

  it('is a function', function () {
    expect(Klass).to.be.a('function');
  });

  it('is inherited by its child', function () {
    expect(new Klass()).to.be.instanceof(Klass);
  });

  it('copies static properties', function () {
    expect(Klass).to.have.property('staticProp', 'c');
  });

  it('copies prototype properties', function () {
    expect(Klass.prototype).to.have.property('protoProp', 'b');
  });

  it('equals the special constructor property', function () {
    expect(Klass.prototype.constructor).to.equal(Klass);
  });

  it('invokes the constructor on instance creation', function () {
    expect(new Klass()).to.have.property('instanceProp', 'a');
  });
});

describe('Single inheritance', function () {
  var KlassA = _.inherit({
    aProtoMethod: function () {}
  }, {
    aStaticMethod: function () {}
  });

  var KlassB = _.inherit(KlassA);

  it('works with instanceof', function () {
    expect(new KlassB()).to.be.instanceOf(KlassA);
  });

  it("inherits the parent class's static methods", function () {
    expect(KlassB).to.have.property('aStaticMethod');
  });

  it("inherits the parent class's prototype methods", function () {
    expect(KlassB.prototype).to.have.property('aProtoMethod');
  });
});

describe('Multiple inheritance', function () {
  var KlassA = _.inherit({
    theProtoMethod: function () {}
  });

  var KlassB = _.inherit({
    theProtoMethod: function () {}
  });

  var KlassC = _.inherit(KlassA, KlassB);

  it('works with instanceof', function () {
    expect(new KlassC()).to.be.instanceOf(KlassA).and.instanceOf(KlassB);
  });

  it("inherits the most recent parent class's prototype methods", function () {
    expect(KlassB.prototype).to.have
      .property('theProtoMethod', KlassB.theProtoMethod);
  });
});
