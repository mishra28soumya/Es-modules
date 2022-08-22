/** Array */

var Lodash = require('lodash');
var numbers = [1, 2, 3, 4];
var listOfNumbers = '';
Lodash.each(numbers, function(x) { listOfNumbers += x + ' ' });
// console.log(listOfNumbers);


//concat
let newArray = Lodash.concat(numbers,[5,6,7])
// console.log(newNum)

//fill
newArray = Lodash.fill(numbers,0,[start=0],[end=3])
// console.log(newArray)

//join
let res = Lodash.join(numbers, ' ')
// console.log(res)


//reverse
newArray = Lodash.reverse(numbers)
// console.log(newArray)


//slice
newArray = Lodash.slice(numbers,0,2)
// console.log(newArray)

//take
newArray = Lodash.take(numbers,1)
// console.log(newArray)

//unique
newArray = Lodash.uniq(numbers)
// console.log(newArray)


/** Collection */

//every
var list = [
    { 'user': 'Joe', 'age': 36, 'active': false },
    { 'user': 'Jake', 'age': 40, 'active': false }
 ];
  
 var result = Lodash.every(list, ['active', false]);
//  console.log(result);


 //find
 var list = [
    { 'user': 'Joe', 'age': 36, 'active': true },
    { 'user': 'Jake', 'age': 40, 'active': true }
 ];
  
 var result = Lodash.find(list, function(user) { return user.active; });
//  console.log(result);


 // inclues
 var list = [1 ,2, 3, 4];
 
var result = Lodash.includes(list, 1);
// console.log(result);

result = Lodash.includes('one', 'ne');
// console.log(result);


/** Date */

//now -> number of milliseconds since 1 January 1970)
date = Lodash.now();
// console.log(date)


/** Function */

//once
var create = function(name){ console.log('Hello', name)};
var init = Lodash.once(create);
// init("Soumya");
// init("Mishra");
// create("Soumya");
// create("Mishra");


//before
var _ = require('lodash');
var raiseAlarm = _.before(3, function(){ console.log('Alarm raised.')});

//Alarm raised will be called two times
// raiseAlarm();
// raiseAlarm();
// raiseAlarm();
// raiseAlarm();



/** Lang */

//isArray
// console.log(_.isArray([1, 2, 3]));
// console.log(_.isArray('abc'));


//isFinite
// console.log(_.isFinite(3));
// console.log(_.isFinite(Infinity));
// console.log(_.isFinite('3'));



/** Math */

//max
// console.log(_.max([ 4, 6, 1, 5]));

//sum
var values = [1, 2, 3, 4, 5];
var result = _.sum(values);

// console.log(result);



/** Number */


//inRange
var result = _.inRange(-12, -22, 2);

// console.log(result);

result = _.inRange(12, -22, 2);
// console.log(result);


// random
var result = _.random( 1, 4);

// console.log(result);



/** Object */

//findKey
var users = {
    'Joe': { 'age': 36, 'active': true },
    'Robert': { 'age': 40, 'active': false },
    'Stefan': { 'age': 10,   'active': true }
 };
 
 var result = _.findKey(users, function(o) { return o.age < 40; });
//  console.log(result);


//invert
var object = { 'a': 1, 'b': 2, 'c': 1 }; 
var result = _.invert(object);

console.log(result);





