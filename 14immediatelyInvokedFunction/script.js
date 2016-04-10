//function statement
//placed in memory initially
function greet(name){
  console.log('Hello ' + name);
}

greet('Israel');

//using function expression (creating function on the fly)
//not placed in memory initially
var greetFunc = function(){
    console.log('Hello ' + name);
};

greetFunc('Israel');

//immediately invoked function expression (IIFE)
var greeting = function(name){

  return 'Hello ' + name;

}('Israel');

console.log(greeting);

//valid javaScript syntax
3;

//valid javaScript syntax
'I am a string';

//invalid function expression
function(name){

  return 'Hello ' + name;

}

//valid function expression just sitting there
//doing nothing
(function(name){

  return 'Hello ' + name;

});

//only expressions that return a value can be placed inside parenthesis
//conditional statements cannot be placed inside parenthesis

//Another immediately invoked function expression
var firstname = 'Israel';
(function(name){

  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);

}(firstname)); // IIFE
