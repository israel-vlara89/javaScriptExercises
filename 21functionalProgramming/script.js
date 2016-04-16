//functional programming
function mapForEach(arr, fn){
    //start with empty array
    var newArr = [];
    //loop through i while i is less than array's length
    for (var i = 0; i < arr.length; i++){
        //add the function passed as a parameter to the newArr array
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

//start with an array of 1, 2, and 3
var arr1 = [1,2,3];
console.log(arr1);

//set a limiter, function accepts a limiter and random item and 
//returns boolean to see if item is greater than the limiter 
//which is defaulted to 1
var checkPastLimit = function(limiter, item){
    return item > limiter;
}

//invoke the mapForEach function, pass arr1 as parameter and 
//checkPastLimit function as parameter as well while creating
//a copy of that function with the first parameter(limiter) defaulted
//to 1
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
};


var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);


/*
var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});

//for (var i = 0; i < arr1.length; i++){
//    arr2.push(arr1[i] * 2);
//}
console.log(arr3);
*/










/*
function eachName(list, fn){

    var addedNames = [];
    for (var i = 0; i < list.length; i++){
        addedNames.push(
            fn(list[i])
        )
    };
    return addedNames
}

var names = ['John', 'James', 'Jim'];

var finishedNames = eachName(names, function(item){
    var lastName = 'Johnson';
    return item + ' ' + lastName;
});

console.log(finishedNames);




function addTen(list, fn){
    var numberList = [];
    for (var i = 0; i < list.length; i++){
        numberList.push(
            fn(list[i])
        )
    };
    return numberList;
}

var numbersToAdd = [33, 44, 12];

var timeToAdd = addTen(numbersToAdd, function(item){
    return item + 10;
});

console.log(timeToAdd);
*/






