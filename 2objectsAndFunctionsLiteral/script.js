//Object Literals
var israel = {
  firstname : 'Israel',
  lastname : 'Lara',
  address : {
    street: '8880 SE Owen Dr',
    city: 'Happy Valley',
    state: 'Oregon',
    zip: '97086'
  }
};

//Same as typing
// var person = new Object();
// person.firstname = "Israel";
// person.lastname = "Lara";




israel.address2 = {
  street : '333 Second st.',
  city : 'San Antonio',
  state : 'Texas'
};

function greet(person){
  console.log('hi ' + person.firstname + ' ' + person.lastname);
  console.log('You live at ' + person.address2.street);
}

greet(israel);

// creating an object at execution of function
greet({
  firstname:'John', lastname: 'Doe'
});
/*
console.log(person.firstname + " " + person.lastname + "\n" + person.address.street);
console.log(person.address.street);
console.log(person.members.firstname);
*/
