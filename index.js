
/*
1)Mutating array methods are methods that alters the original array
while non-mutating array methods don't alter the original array,they return a new one

examples under each category:
mutating array methods:push(),pop(),unshift(),shift(),reverse()
non-mutating methods:slice(),concat(),map(),filter(),spread operator{....}
*/

//-----------------question 2----------------

let langs = ['C', 'JavaScript', 'Ruby', 'PHP', 'Python'];

let addKotlin=langs.push('Kotlint')
console.log(langs);

let addjava = langs.splice(3, 0, 'Java');
console.log(langs)

let removeC = langs.shift();
console.log(langs)

let addScalaSwift = langs.unshift('Scala','Swift');
console.log(langs)

let replacePhp = langs[3] = 'Go Rust';
console.log(langs)


//-----------------question 3----------------

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
changeFruit(fruit);
console.log(fruit);
//fruit=['apple,'mango,'orange'] 

//-----------------question 4----------------

function myMax(my_array ) {
    let maxResult = Math.max(...my_array);
    console.log(maxResult)
}

let my_array = [2, 4, 5, 6, 10, 37];

myMax(my_array);

//-----------------question 5----------------


function valTimesIndex(my_array) {
   my_array.map( function (arr, index){
        let result = arr * index;
        console.log(result);
    })
    
}
let indexMultiple = valTimesIndex([1, 1, 1, 1]);
console.log(indexMultiple);

