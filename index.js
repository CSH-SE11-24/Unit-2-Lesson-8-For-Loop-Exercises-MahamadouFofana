// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.

for(i = 1; i <= 10; i++){
  console.log(i)
} 


// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.

for(num = 15; num <= 40; num+= 2){
  console.log(num)
} 




// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.

let sum = 0
for (i = 10; i<= 20; i++){
  sum = sum + i
  console.log(sum)
}


// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.

let numArray = [1, 2, 3, 4, 5]
for (let i = 1; i <= numArray.length; i++)
console.log(i)


// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.

let result = 0

let numArray2 = [2,7,9,5,3,1]
for (i = 0; i <= numArray2 ; i++){

result = numArray2[i] + result
  console.log(result)
}





// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2

let arrayNum = [5,4,6,3,4,5,6,8,9,1,7,5,3]

let guess = prompt("Choose a number:")
guess = parseInt(guess)

for(let i = 0; guess == arrayNum.forEach; i++){
  console.log("This number appears "+ i +"times")
}