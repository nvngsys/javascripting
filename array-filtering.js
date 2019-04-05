// .filter() is a method
// and in this case we are putting a function in the method parameters
// we could do this longer ways but this is nice!
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filter = numbers.filter( function evenNumbers(number){
    return number % 2 === 0;
} );

console.log(filter);