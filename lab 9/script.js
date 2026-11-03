// function cubeNumber(n) {
//     return(n**3);
// }

// let number = (prompt("Enter the number"));
// alert(cubeNumber(number));



// function ageCheck(n) {
//     if(n >= 18){
//         return true;
//     }else {
//         return false;
//     }
// }

// let age = prompt("enter your age");
// alert(ageCheck(age));


// function BMI(weight, height) {
//     return(weight/height**2);
// }

// let w = prompt("enter your weight");
// let h = prompt("enter your height");
// alert(BMI(w, h));


// function gradeFromMarks(marks) {
//     let value = "";
//     if (marks >= 90) {
//         value = "A"
//     }else if(75 <= marks <= 89) {
//         value = "B"
//     }else if(50 <= marks <= 74) {
//         value = "C"
//     }else {
//         value = "F"
//     }
//     return value
// }

// let marks = prompt("enter your marks");
// alert(`Your Grade = ${gradeFromMarks(marks)}`);


// function applyDiscount(price, isMember = false) {
//     if (isMember = true) {
//         return(90/100*price);
//     }else{
//         return(price);
//     }
// }

// let price = prompt("Enter the price.");
// let member = prompt("if you are member type (true) else (flase).");
// alert(applyDiscount(price, member));


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


// let row = Number(prompt("enter no. of rows"));
// let column = Number(prompt("enter no. of columns"));
// let matrix = [];
// let i = 0;
// while (i < row) {
//     let rows = [];
//     let j = 0;
//     while (j < column) {
//         rows.push(Number(prompt(`enter value at [${i}][${j}]`)));
//         j++;
//     }
//     matrix.push(rows);
//     i++;
// }
// alert(matrix);
// console.log(matrix);

