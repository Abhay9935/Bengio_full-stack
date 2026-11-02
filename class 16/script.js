// //function declaretion
// function greet() {
//     console.log("Hello, class! Welcome to the JavaScript lesson.");
// }

// //function call
// greet();


// function greet(name) {
//     console.log(`Hello, ${name}! Welcome to the JavaScript lesson.`);
// }

// greet("John");
// greet("Abhay");


// console.log("Start")
// function printprice(name, price) {
//     let priceIninr = Math.round(price * 100);
//     console.log(`${name}: ${priceIninr} INR`);
// };

// printprice("Apple", 60);


// function add(a, b) {
//     const sum = a + b;
//     return sum;
// };

// let result = add(2, 3);
// console.log(result);
// console.log(add(10, 20) * 2);


// function add(a, b) {
//     const sum = a + b;
//     return sum;
// };

// let result = add(2, 3);
// console.log(result);
// console.log(add(10, 20) * 2);


// function factorial(n) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= n ) {
//         factorial *= i;
//         i++;
//     };
//     return factorial;
// };


// console.log(factorial(5));
// factorial(5); //do not print anything because we do not call it

// function introduce(name, city) {
// console.log(`${name} lives in ${city}`);
// };
// introduce("Ajay"); //city is undefined

// function introduce(name, city) {
// console.log(`${name} lives in ${city}`);
// };
// introduce("Ajay", "Delhi", "India"); // india is ignored



// function introduce(name = "Abhay", city = "Gorakhpur") {
// console.log(`${name} lives in ${city}`);
// }
// introduce("Ajay", "Delhi");
// introduce();
// introduce("Ajay", undefined);
// introduce(undefined, "Delhi"); // if any argument is undefined then it prints the default value.


// function sum(a, b) {
//     return(a + b);
// };
// function mul(a, b) {
//     return(a*b)
// };
// const a = sum(mul(3, 4), sum(2, 3));
// console.log(a);


// const sum = (a, b) => {
//     console.log(a + b);
// } // arrow functions

// const mul = (a, b) => {
//     console.log(a*b);
// };

// const sum = (a, b) => {
//     return(a + b);
// };



// function no_of_vovel(string) {
//     const vovel = "aeiou";
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         const ch = string[i].toLowerCase();
//         if (vovel.includes(ch)) {
//             count++;
//         }
//     };
//     return count;
// };

// console.log(no_of_vovel("abhay")); 
// console.log(no_of_vovel("AEIOU")); 
// console.log(no_of_vovel("xyz"));  



// function countVovels(str) {
//     let count = 0;
//     for (const chr of str.toLowerCase()) {
//         if (
//             chr === "a" ||
//             chr === "e" ||
//             chr === "i" ||
//             chr === "o" ||
//             chr === "u" 
//         ) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVovels("abc");


//forEach is higher order function it take another fuunction as a input
// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((Val, idx, arr) => {
//     console.log(Val.toUpperCase(), idx, arr);
// });




// let list = [2, 3, 4, 5, 6];

// list.forEach((val) => {
//     console.log(val**2)
// });





