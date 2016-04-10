//long running function


var ms = 3000 + new Date().getTime();


function waitThreeSeconds(){
  while (new Date() < ms){}
  console.log('finished function');
}

function clickHandler(){
  console.log('click event!');
  var time = 2000 + new Date().getTime();
  while (new Date() < time){}
  document.querySelector('h1').innerHTML = "Hello World";
  console.log("innerHTML change applied!")
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
