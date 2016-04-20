// Construct objects via functions
function Person(firstname, lastname){
    
    //this is just an empty object 
    console.log(this);
    
    //the this operator nowo points to the new object
    //and adds firstname and lastname to the empty object
    
    this.firstname = firstname;
    this.lastname = lastname;
    
    //check to see if function is actually invoked 
    console.log('This function is invoked.');
    
    //return { greeting : 'I got in the way' };
    
}

//new operator creates an empty object then invokes the Person function
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

//Function Constructors:
/*
A normal function that is used to construct objects.
The 'this' variable points to a new empty object, and that 
object is returned from the function automatically.
*/