greet();


function greet(){
  console.log('hi');
}

//function expression
var anonymousGreet = function(){
  console.log('hi');
}
anonymousGreet();

function log(a){
  a('israel','lara');
}

log(function(name, lastname){
  name = name
  lastname = lastname;
  console.log(name + " " + lastname);
});
