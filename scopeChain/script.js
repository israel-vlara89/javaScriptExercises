/*
function b(){
  console.log(myVar);
}

function a(){
  var myVar = 2;
  console.log(this.myVar);
  function c(){
    var self = this;
    var sequel = "star trek";
    console.log(myVar);
    console.log(sequel);
    var movie = self.sequel;
    console.log(movie);
  }
  c();
  b();
}
var sequel = "star wars";
var myVar = 1;
a();
*/


function a() {

  function b(){
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();


synchronous = one at a time
asynchronous = more than one at a time
