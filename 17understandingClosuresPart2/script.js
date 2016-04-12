/*
function buildFunctions(){
  var arr = [];

  for (var i = 0; i < 3; i++){
    arr.push(function(j){
        return function(){
          console.log(j);
        }
    }(i));

  }//for loop ends here

  return arr;

}//buildFunctions ends here

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();


function greet(){
  var greets = [];
  var neither = 3;
  for (var i = false; i < neither; i++){
    if (i == false){
      greets.push('hi ');
    }else if (i == true){
      greets.push('hello ');
    }else if (i === 2){
      greets.push('howdy');
    }else {
      console.log('nothing else to push');
    }
    //console.log(greets[i]);
  }
  return greets;
}
var ds = greet();
console.log(ds[0] + ds[1] + ds[2]);
*/

function buildMoreFunctions(){

  var greets = [];

  for (var i = 0; i < 4; i++){

    greets.push(function(k){
        return function(){
          console.log(k);
        }
    }(i));

  }//end for loop
  return greets;
}

var jr = buildMoreFunctions();
jr[0]();
jr[1]();
jr[2]();
jr[3]();

function addNames(){

  var names = [];
  var name1 = 'Israel';
  var name2 = 'John';
  var name3 = 'James';
  for (var i = 0; i < 3; i++){
    if (i === 0){
      names.push(function(n){
        n = n || 'no name';
        return function(){
          console.log(n);
        }
      }(name1));
    }else if (i === 1){
      names.push(function(l){
        l = l || 'no name';
        return function(){
          console.log(l);
        }
      }(name2));
    }else if (i === 2){
      names.push(function(m){
        m = m || 'no name';
        return function(){
          console.log(m);
        }
      }(name3));
    }else{
      console.log('nothing else left');
    }
  }
  return names;
}

var an = addNames();
an[0]();
an[1]();
an[2]();
