//Always start a function constructor with a capital letter
function Person(firstname, lastname){

    console.log(this);
    
    this.firstname = firstname;
    this.lastname = lastname;
    
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}

//Always use the new keyword when creating new objects with functions
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function(){
    return this.lastname + ', ' + this.lastname;
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());