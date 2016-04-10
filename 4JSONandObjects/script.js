var objectLiteral = {
  firstname : 'Mary',
  isAProgrammer : true,
  isInIT : true
}

// converting object to JSON string
console.log(JSON.stringify(objectLiteral));

// converting JSON string back to an object
var jsonValue = JSON.parse('{"firstname" : "Mary", "isAProgrammer" : true}');

console.log(jsonValue);

/*
var objectLiteral2 = {
  firstname : "John",
  isAProgrammer : false,
  isInIT : false
}

function checkIfIsAProgrammer(person){
  if (person.isAProgrammer || person.isInIT){
    console.log(person.firstname + " is either a programmer or in IT");
  }else{
    console.log(person.firstname + " is neither a programmer or in IT");
  }
}

checkIfIsAProgrammer(objectLiteral2);
*/
//console.log(objectLiteral);
