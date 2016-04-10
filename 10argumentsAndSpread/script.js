function greet(firstname ,lastname, language){

  //default values
  firstname = firstname || 'no name';
  lastname = lastname || 'no last name';
  language = language || 'english';

  if (arguments.length === 0){
    console.log('Missing parameters!');
    console.log('------------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('arg 0: ' + arguments[0]);
  console.log('-----------');
}
greet();
greet('israel');
greet('israel', 'lara');
greet('israel','lara','spanish');
