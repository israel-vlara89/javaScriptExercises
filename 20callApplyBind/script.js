var person = {
  firstname: 'john',
  lastname: 'doe',
  getFullName: function(){
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2){
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------');
}//.bind(person); this works too

//bind creates a copy of the logName function
var logPersonName = logName.bind(person);

//logNAme();
logPersonName('en', 'es');

//call executes the function
logName.call(person, 'en', 'es');

//works the same way as call, but instead it wants an array of parameters
logName.apply(person, ['en', 'es']);

//creating a function on the fly and invoking it using apply
(function(lang1, lang2){

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------');

}).apply(person,['es', 'en']);

//function borrowing
var person2 = {
  firstname: 'jane',
  lastname: 'doe'
}

console.log(person.getFullName.apply(person2));

//function currying
//Creating a copy of a function but with some preset params
//very useful in mathematical situations
function multiply(a, b){
  return a * b;
}
//sets 2 as the default first parameter and creates a copy of the function
var multipleByTwo = multiply.bind(this, 2);
//calls the function with 4 as the second parameter
console.log(multipleByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5));
