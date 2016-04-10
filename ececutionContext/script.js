/*
function b(){
  console.log("this is b");
}
function a(){
  console.log("function a");
  b();
}
a();
*/
/*
function a(){//2
  b(); //3
  var c;//6
}

function b(){//4
  var d;//5
}

a(); //1
var d;//7
*/

function b(one, two){ //8
  var myVar; //9
  console.log(myVar); //10
  one = one;
  two = two;
  console.log(one + two);
  function c(r, q){
    console.log("this");
    r = r;
    q = q;
    result = r * q;
    console.log(result);
    function d(a, b){
      a = a;
      b = b;
      result = a/b;
      console.log(result);
      function e(g,h){
        g = g;
        h = g;
        result = g - h;
        console.log(result);
        function f(e, n){
          e = e;
          n = n;
          result = e + " " + n;
          console.log(result);
          console.log(e[0]+n[0]);
        }
        f("Hello","World");
      }
      e(a,b);
    }
    d(r,q);
  }
  c(one, two);
}
function a(){ //4
  var myVar = 2; //5
  console.log(myVar); //6
  b(7, 8); //7
}
var myVar = 1; //1
console.log(myVar); //2
a(); //3
