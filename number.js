"use strict";
// Basic arithmetic operations
let num1 = 10;
let num2 = 20;
let num3 = 30;
let total = num1 + num2 + num3; // Calculate total
console.log("Total is: " + total);
let average = total / 3; // Calculate average
console.log("Average is: " + average);
let max = Math.max(num1, num2, num3); // Find the maximum number
console.log("Max is: " + max);
let min = Math.min(num1, num2, num3); // Find the minimum number
console.log("Min is: " + min);
// Sum of first 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of first 10 numbers is: " + sum);
// Factorial of a number
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log("Factorial of 5 is: " + factorial);
// Fibonacci series up to 10 terms
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log("Fibonacci series up to 10 terms: " + fibonacci.join(", "));
// Prime numbers up to 100
let primeNumbers = [];
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(i);
    }
}
console.log("Prime numbers up to 100: " + primeNumbers.join(", "));
// Filter odd and even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = numbers.filter((num) => num % 2 !== 0); // Filter odd numbers
console.log("Odd numbers: " + oddNumbers.join(", "));
let evenNumbers = numbers.filter((num) => num % 2 === 0); // Filter even numbers
console.log("Even numbers: " + evenNumbers.join(", "));
// Map numbers to their squares and cubes
let squareNumbers = numbers.map((num) => num * num); // Square of numbers
console.log("Square numbers: " + squareNumbers.join(", "));
let cubeNumbers = numbers.map((num) => num * num * num); // Cube of numbers
console.log("Cube numbers: " + cubeNumbers.join(", "));
// Reduce numbers to calculate sum of squares and cubes
let sumOfSquares = numbers.reduce((acc, num) => acc + num * num, 0); // Sum of squares
console.log("Sum of squares: " + sumOfSquares);
let sumOfCubes = numbers.reduce((acc, num) => acc + num * num * num, 0); // Sum of cubes
console.log("Sum of cubes: " + sumOfCubes);
// Find max, min, sum, and average of numbers
let maxNumber = Math.max(...numbers); // Maximum number
console.log("Max number: " + maxNumber);
let minNumber = Math.min(...numbers); // Minimum number
console.log("Min number: " + minNumber);
let sumOfNumbers = numbers.reduce((acc, num) => acc + num); // Sum of numbers
console.log("Sum of numbers: " + sumOfNumbers);
let averageOfNumbers = sumOfNumbers / numbers.length; // Average of numbers
console.log("Average of numbers: " + averageOfNumbers);
// Sort and reverse numbers
let sortedNumbers = [...numbers].sort((a, b) => a - b); // Sort numbers in ascending order
console.log("Sorted numbers: " + sortedNumbers.join(", "));
let reversedNumbers = [...numbers].reverse(); // Reverse numbers
console.log("Reversed numbers: " + reversedNumbers.join(", "));
// Find unique and duplicate numbers
let uniqueNumbers = Array.from(new Set(numbers)); // Unique numbers
console.log("Unique numbers: " + uniqueNumbers.join(", "));
let duplicateNumbers = numbers.filter((num, index) => numbers.indexOf(num) !== index); // Duplicate numbers
console.log("Duplicate numbers: " + duplicateNumbers.join(", "));
// Convert string to number array and vice versa
let numberString = "1,2,3,4,5";
let numberArray = numberString.split(",").map(Number); // Convert string to number array
console.log("Number array from string: " + numberArray.join(", "));
let stringNumber = numbers.join(","); // Convert number array to string
console.log("String from number array: " + stringNumber);
// Object with numbers
let numberObject = { a: 1, b: 2, c: 3 }; // Object with key-value pairs
console.log("Number object: ", numberObject);
// Concatenate two arrays
let numberArray2 = [1, 2, 3, 4, 5];
let numberArray3 = [6, 7, 8, 9, 10];
let concatenatedArray = numberArray2.concat(numberArray3); // Concatenate arrays
console.log("Concatenated array: " + concatenatedArray.join(", "));
// Slice and splice arrays
let numberArray4 = [1, 2, 3, 4, 5];
let slicedArray = numberArray4.slice(1, 4); // Slice array
console.log("Sliced array: " + slicedArray.join(", "));
let numberArray5 = [1, 2, 3, 4, 5];
let splicedArray = numberArray5.splice(1, 3); // Splice array
console.log("Spliced array: " + splicedArray.join(", "));
// Find index and check inclusion
let numberArray6 = [1, 2, 3, 4, 5];
let indexOfNumber = numberArray6.indexOf(3); // Find index of a number
console.log("Index of number 3: " + indexOfNumber);
let numberArray7 = [1, 2, 3, 4, 5];
let lastIndexOfNumber = numberArray7.lastIndexOf(3); // Find last index of a number
console.log("Last index of number 3: " + lastIndexOfNumber);
let numberArray8 = [1, 2, 3, 4, 5];
let includesNumber = numberArray8.includes(3); // Check if number is included
console.log("Includes number 3: " + includesNumber);
// Find and filter numbers
let numberArray9 = [1, 2, 3, 4, 5];
let findNumber = numberArray9.find((num) => num > 3); // Find first number greater than 3
console.log("Find number greater than 3: " + findNumber);
let numberArray10 = [1, 2, 3, 4, 5];
let findIndexOfNumber = numberArray10.findIndex((num) => num > 3); // Find index of first number greater than 3
console.log("Find index of number greater than 3: " + findIndexOfNumber);
let numberArray11 = [1, 2, 3, 4, 5];
let filterNumbers = numberArray11.filter((num) => num > 3); // Filter numbers greater than 3
console.log("Filter numbers greater than 3: " + filterNumbers.join(", "));
// Array methods: every, some, forEach, reduce
let numberArray12 = [1, 2, 3, 4, 5];
let everyNumber = numberArray12.every((num) => num > 0); // Check if every number is greater than 0
console.log("Every number greater than 0: " + everyNumber);
let numberArray13 = [1, 2, 3, 4, 5];
let someNumber = numberArray13.some((num) => num > 3); // Check if some numbers are greater than 3
console.log("Some number greater than 3: " + someNumber);
let numberArray14 = [1, 2, 3, 4, 5];
let forEachResult = "";
numberArray14.forEach((num) => {
    forEachResult += num + " "; // Concatenate numbers using forEach
});
console.log("ForEach result: " + forEachResult);
let numberArray15 = [1, 2, 3, 4, 5];
let mapResult = numberArray15.reduce((acc, num) => {
    acc.push(num * 2, 0); // Multiply each number by 2 and push to result
    return acc;
}, []);
console.log("Map result using reduce: " + mapResult.join(", "));
