var arr = [
  1,
  false,
  {
    name : 'Israel',
    address: '8880 SE Owen Dr'
  },
  function(name){
    var greeting = 'Hello';
    console.log(greeting + " " + name);
  },
  "Hello"
];
console.log(arr);
arr[3](arr[2].name);
