/*
Callback Function:
A function you give to another function, to be run
when the other function is finished
*/

function sayHiLater(){
  var greeting = 'Hi!';
  setTimeout(function(){
    console.log(greeting);
  }, 10000);
}

sayHiLater();

//JQuery uses function expressions and first-class functions
//$("button").click(function(){
//
//});

function tellMeWhenDone(callback){
  var a = 1000; // some work
  var b = 2000; // some work

  callback(); // the 'callback', it runs the function I give it as parameter
}

tellMeWhenDone(function(){
  console.log('All Done...');
});


tellMeWhenDone(function(){
  alert('I am done');
});
