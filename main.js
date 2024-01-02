function Father() {}

Father.prototype.lastName = "Xiao";

function Son() {}

function inherit(Target, Origin) {
  function F() {}

  const f = new F();

  Target.prototype = new F();

  F.prototype = Origin.prototype;

  console.log("f", f.__proto__);

  Target.prototype.constructor = Target;
}

inherit(Son, Father);

window.son = new Son();

console.log("son", son, son.lastName);
