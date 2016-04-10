// IIFE
(function(global, name){

  var greeting = 'Hello';
  //override var greeting = 'Hola';
  this.greeting = 'Hi';
  console.log(this.greeting + ' ' + name);

}(this, 'Israel'));
console.log(greeting);



/*
var newObj = {

  name: 'Israel',
  greeting: 'Hello',
  greetings: function(){

    //var self = this;
    console.log(this.greeting + ' ' + this.name);
    //returns Hello Israel

    var newFunc = function(){
      console.log(this.greeting + ' ' + this.name);
      //returns Hola John because a function inside a function that is inside
      //an object points to the global execution context and not the object
      //function execution context anymore
    }
    newFunc();

  }
};
newObj.greetings();
*/
