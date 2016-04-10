function a(){
  console.log(this);
  this.newVariable = 'hello';
}

var b = function(){
  console.log(this);
}

a();
console.log(newVariable);
b();


// In this case, this points to the object itself, c
// If you define a function inside a method inside an object
// the this keyword will point to the global environment and
// not c anymore, to get around this, inside the method log
// create a variable called 'self' and set it equals to 'this'
// and use self to keep pointing the the c object
var c = {
  name : 'The c object',
  log : function(){
    var self = this;

    self.name = 'Updated c object'; //mutate
    console.log(self);

    var setname = function(newname){
      self.name = newname;
    }
    setname('updated again! the c object');
    console.log(self);
  }
}

c.log();
