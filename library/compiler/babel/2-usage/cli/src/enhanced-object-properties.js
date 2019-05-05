/* Shorter syntax for common object property definition idiom. */
var x = 0,
  y = 0;
obj = { x, y };

/* Support for computed names in object property definitions. */
let obj = {
  foo: 'bar',
  ['baz' + quux()]: 42
};
