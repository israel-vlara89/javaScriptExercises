var person = new Object();

//computed member access operator (using square brackets and quotes)
person["firstname"] = "Israel";
person["lastname"] = "Lara";

var firstNameProperty = "firstname";
var lastNameProperty = "lastname";

console.log(person);
console.log(person[firstNameProperty] + " " + person[lastNameProperty]);

//Member Access Operator, (the dot operator)
console.log(person.firstname);
console.log(person.lastname);

console.log(person.firstname + " " + person.lastname);

person.address = new Object();
person.phone = new Object();
person.email = new Object();

//a property for person with address has been created,
//when calling the object, the engine looks for a property
//called address then looks for the other properties like
//street, city, state and zipcode but they haven't been created
//but a value has been given so it automatically creates those
//properties.
person.address.street = "8880 SE Owen Dr";
person.address.city = "Happy Valley";
person.address.state = "OR";
person.address.zipcode = "97086";
person.phone = "503-754-5927";
person.email = "ividana1989@gmail.com";
console.log(person.address.street);
console.log(person['address']['city']);
