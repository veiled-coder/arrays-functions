






bb


// console.log("hello world");
// var arr = [5, 4, 3, 2, 1];
// var poppedVal = arr.pop();
// console.log(arr);
// console.log(poppedVal);

// function secondFunction() {
//   console.log("happy");
//   return "happyezzz";
// }

// let rt = secondFunction();
// console.log(rt);

// function isOverPointFive() {
//   return Math.random() > 0.5;
// }
// let gh = isOverPointFive();
// console.log(gh);

// // globalVariable = "I live in the global scope";

// // console.log(globalVariable);

// // function makeNewScope() {
// //  functionScopeVariable = "I live in the scope of the makeNewScope function";

// // }
// // makeNewScope()
// // console.log('-----the first value--------');
// // console.log(functionScopeVariable);

// // function anotherscope() {
// //   functionScopeVariable = "i have been changed in another function";

// // }
// // anotherscope()

// // console.log('------after calling the new function-------');

// // console.log(functionScopeVariable);

// console.log("--------IIFE------");
    
// (function () {
//   console.log('i am an iffe')
// })();

// // var person = (function () {
// //     return {
// //         name: 'rahma',
// //         age: 25,
// //         sex: 'female',
        
// //     }
// // })();

// // console.log(person.name);


// let personObject = (function () {
//     var person='ELlie';
//     return {
//         getname: function () {
//             return person;
//         },
//         setname: function (newName) {
//           return  person = newName;
//         }
//     }
// })();

// console.log(personObject.getname())
// console.log(personObject.setname("maryam"));
// //console.log(person)//we can't access person directly,we can only chenge it by ccling those fnc
// //removing it () of iide brings erro,personobJECT.getname is not a function
// //page 32,how do we know the invokeRightAway function has fininshed running

// var instuctor;

// // Throws an error because undefined is not a function (we are using the type of
// //undefined and trying to invoke it - that's why we get a TypeError)
// var sayHi = function(name){
//  return "Hello " + name;
// }

 
// console.log(sayHi('matt'))

// var myName = "Tim";
// function returnMyName() {
//     console.log(myName);
//     var myName = 'matt';
// }
// returnMyName()