//-----------------------------------------------------------------------------23.08.2018.---------------------------------------------------------------------------------
// biežāk izmantot funkciju 'funtcion'

// function foo (a,b){
// return a+b;
// }
// console.log(foo(1,2));

//-------------------------------------------------------------------------------------------------------

// isEven
// true or false

// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     } 
//         return false;
//     }

// console.log('number 2 is even' + isEven(2));
// console.log('number 3 is even' + isEven(3));
// console.log('number 4 is even' + isEven(4));
// console.log('number 5 is even' + isEven(5));

// // vai 
// function isEven(number) {
//     return number % 2==0;
// }
// console.log('number 2 is even' + isEven(2));
// console.log('number 3 is even' + isEven(3));
// console.log('number 4 is even' + isEven(4));
// console.log('number 5 is even' + isEven(5));

// // vai 

// function isEven(number) {
//     return number % 2==0 ? 'is even': 'is odd';
// }
// console.log('number 2 is even' + isEven(2));
// console.log('number 3 is even' + isEven(3));
// console.log('number 4 is even' + isEven(4));
// console.log('number 5 is even' + isEven(5));

// function fizbaz(number) {
//     return number % 2 == 0 ? 'Fiz' : 'Baz';
// }

// console.log('number 2' + fizbaz(2));
// console.log('number 3' + fizbaz(3));
// console.log('number 4' + fizbaz(4));
// console.log('number 5' + fizbaz(5));


// function fizzBazz(number) {
//     var output = '';
//     if (number % 2 === 0) {
//         output = 'Fizz';
//     }
// if (number % 3 === 0) {
//     output += ' Bazz';
// } if (output === '') {
//     output = number;
// } return output;
// }
//-----------------------------------------------------------------------------
// var isEven2 = function(number){
// return number % 2 == 0? 'is even': 'is odd';
// }
// console.log('number 2 ' + isEven2(2));
// console.log('number 3 ' + isEven2(3));
// console.log('number 4 ' + isEven2(4));
// console.log('number 5 ' + isEven2(5));

// var cat ={
//     name:'Muris',
//     hunger:10,
//     feed: function(){
//         this.hunger--;
//     }
// }
// console.log(cat);
// cat.feed();
// cat.feed();
// cat.feed();
// cat.feed();
// cat.feed();
// console.log(cat);

// result { name: 'Muris', hunger: 10, feed: [Function: feed] }
//{ name: 'Muris', hunger: 5, feed: [Function: feed] }


//--------------------------------------------------------------------------------

// console.log(Math.pow(2, 3));
// matemātiska funkcija, kāpināšana
//---------------------------------------------------DATUMI-----------------------------------------------

// var now = new Date();
// console.log(now);

//--------------------------------------------------------------------------------------------------------
//vārds bannana - apgriezt otrādi, stringu apgriezt kā māsīvu un masīvu apgriezt otrādi String metode
// var foo = 'bar' 
// console.log(foo.split(''));
// console.log("apple".split('').reverse()
//------------------------------------------------------------------------END-------------------------------------------------------------------------------------------------
// Home work
function reverseWord(word) {
    // var wordSplitted = word.split(''); // converts word into array
    // console.log(wordSplitted);
    // var reversedArray = wordSplitted.reverse(); // reverses the array
    // console.log(reversedArray);
    // var joinedArray = reversedArray.join('');
    return word.split('').reverse().join('');
}

function isPalindrom(word) {
    return word == reverseWord(word);
}
// console.log(reverseWord('Jānis'));
// console.log(reverseWord('alus ari ira sula'));

console.log(isPalindrom('Jānis'));
console.log(isPalindrom('eye'));
console.log(isPalindrom('alus ari ira sula'));
console.log(isPalindrom('racecar'));