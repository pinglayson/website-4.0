// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [4, 6];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function hiiiifunc(name, age) {
  console.log('Hi '+ name + ' you are '+ age);
}

// hiiiifunc(...person);
// hiiiifunc(...personTwo);

var names = ['Mike', 'Ben'];
//var final = ['Andrew', ...names];

function loophi(final){
  final.forEach(function(value){
    console.log('Hi '+ value);
  });
}

loophi(names);
