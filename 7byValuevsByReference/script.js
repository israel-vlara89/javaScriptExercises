// by value (primitives)
// creates a new copy, allocates additional memory for variable b.
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects(including functions))
// var d points to the same location in memory to where
// c is stored.
var c = {greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; //mutate means to change something, immutable means it can't be changed

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj){
  obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting : 'howdy'};
console.log(c);
console.log(d);

//summary
//all primitive types are passed by value
//all objects are passed by reference
