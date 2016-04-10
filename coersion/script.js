/*
user = prompt("Enter your name");
lastName = prompt("Enter your last name");
function greet(name,lastname){
	name = name || "no name";
	lastname = lastname || "no last name";
	console.log("Hello " + name + " " + lastname);
}
greet();
greet(user,lastName);


var a;

// script that goes to the internet and looks for a value 

a = 0;

if(a || a === 0){
	console.log("something was there.");
}else{
	console.log("nothing was found");
}
*/



/*
var a = 1 + '2'.length;
var b = a > 1;
console.log(b);
console.log(3 < 2 < 1); // true, 3 < 2 is false = 0, 0 < 1 = true
console.log(1 < 2 < 3);
 var a = 0;
 var b = false;
 if (a === b){
 	console.log("They are equal!");
 }else{
 	console.log("Not equal");
 }
*/

function main(){
	var z = prompt("Enter either pingpong or fizzbuzz");

	if (z == "pingpong"){
		pingpong();
		}else if (z == "fizzbuzz"){
		fizzbuzz();
		}else{
		console.log("invalid input");
	}
}

function pingpong(){
	for (var i = 0; i <= 100; i++){
		if(i % 3 == false && i % 5 == false){
			document.write('<h1 class="headings1">Pingpong!</h1><hr>');
		}else if (i % 3 == false){
			document.write("<h3 class='headings2'>ping</h3><hr>");
		}else if(i % 5 == false){
			document.write("<h3 class='headings3'>pong</h3><hr>");
		}else{
			document.write("<h3 class='headings4'>"+i+"<h3>");
		}
	}
}


function fizzbuzz(){
	for (var i = 0; i <= 100; i++){
		if(i % 3 == false && i % 5 == false){
			document.write("<h1 class='headings1'>FizzBuzz!</h1><hr>");
		}else if (i % 3 == false){
			document.write("<h3 class='headings2'>fizz</h3><hr>");
		}else if(i % 5 == false){
			document.write("<h3 class='headings3'>buzz</h3><hr>");
		}else{
			document.write("<h3 class='headings4'>" + i + "</h3>");
		}
	}
}
main();

//for(i=0;++i<101;console.log(i%5?x||i:x+'Buzz'))x=i%3?'':'Fizz'
