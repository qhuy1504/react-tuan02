// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
document.write(27, ". Tạo một hàm sẽ nhận một mảng số làm đối số và sẽ trả về một mảng mới với các phần tử riêng biệt:");
const numbers = [1, 2, 2, 3, 4, 4, 5];
document.write(" mang nhap vao: ", numbers);
const uniqueNumbers = removeDuplicates(numbers);
document.write(" mang sau khi loai bo phan tu trung lap: ", uniqueNumbers);
// 28. Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
function sumOf100Primes() {
  let sum = 0;
  let primes = [];
  for (let i = 2; primes.length < 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
      sum += i;
    }
  }
  return ({ sum, primes });
}
function disPlaysumOf100Primes() {
  document.write(28, "<br>" + "28. Tính tổng 100 số nguyên tố đầu tiên và trả về chúng dưới dạng mảng:");
  const { sum, primes } = sumOf100Primes();
  document.write("<br>" + "tong 100 so nguyen to dau tien: ", sum);
}
//29. Print the distance between the first 100 prime numbers
function distanceBetween100Primes() {
  let primes = [];
  for (let i = 2; primes.length < 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  let distances = primes.map((num, i) => primes[i + 1] - num).slice(0, -1);
  document.write("<br>" + "29. Print the distance between the first 100 prime numbers");
   return document.write( "<br>" +distances);
}
//30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function addLargeNumbers(num1, num2) {
  let carry = 0;
  let result = [];

  // Reverse the numbers to make addition easier (start from the right-most digit)
  let arr1 = num1.split('').reverse();
  let arr2 = num2.split('').reverse();

  let maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    // Parse current digits, or treat missing digits as 0
    let digit1 = i < arr1.length ? parseInt(arr1[i]) : 0;
    let digit2 = i < arr2.length ? parseInt(arr2[i]) : 0;

    // Sum the digits and the carry
    let sum = digit1 + digit2 + carry;

    // Push the single digit to the result and update the carry
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  // If there's a carry left at the end, push it to the result
  if (carry > 0) {
    result.push(carry);
  }

  // Reverse the result and join it into a string
  return result.reverse().join('');
}
function displayAddLargeNumber() {
  let num1 = "123456789123456789123456789";
  let num2 = "987654321987654321987654321";
  document.write("<br>" + "30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.");
  document.write(addLargeNumbers(num1, num2)); // Output: "1111111111111111111111111110"
}
//31. Create a function that will return the number of words in a text
function countWords(text) {
  // Trim leading/trailing spaces, split the text by spaces, and filter out empty strings
  const words = text.trim().split(/\s+/);
  return words.filter(word => word.length > 0).length;
}

// Example usage
function disPlayCountWords() {
  const text = "This is an example sentence with several words wfwfwfwf.";
  document.write("<br>" + "31. Create a function that will return the number of words in a text " + "<br>");
  document.write(countWords(text)+"<br>"); // Output: 7
}
//32. Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
  return text.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}
function disPlayCapitalizeWords() {
  const sentence = "this is a sample sentence.";
  document.write("<br>" + "32. Create a function that will capitalize the first letter of each word in a text " + "<br>");
 document.write((capitalizeWords(sentence))); // Output: "This Is A Sample Sentence."
}
//33. Calculate the sum of numbers received in a comma delimited string
function sumOfNumbers(inputString) {
  return inputString.split(',').reduce((sum, num) => sum + parseFloat(num), 0);
}
function disPlaySumOfNumbers() {
  const numbers = "1.5, 2.3, 3.1, 4.7";
  document.write("<br>" + "33. Calculate the sum of numbers received in a comma delimited string " + "<br>");
  document.write(sumOfNumbers(numbers)); // Output: 11.6
}
//34. Create a function that returns an array with words inside a text.
function getWords(text) {
  return text.trim().split(/\s+/);
}
function disPlayGetWords() {
  const text = "This is a sample sentence.";
  document.write("<br>" + "34. Create a function that returns an array with words inside a text." + "<br>");
  document.write(getWords(text)); // Output: ["This", "is", "a", "sample", "sentence."]
}
//35. Create a function to convert a CSV text to a “bi-dimensional” array
function csvToArray(csvText) {
  return csvText.trim().split('\n').map(row => row.split(','));
}
function disPlayCsvToArray() {
  // Example usage
  const csvText = `name,age,city
John,25,New York
Alice,30,Los Angeles
Bob,22,Chicago`;
  const array = csvToArray(csvText);
  document.write("<br>" + "35. Create a function to convert a CSV text to a “bi-dimensional” array" + "<br>");
 document.write(array);
}
//36. Create a function that converts a string to an array of characters
function stringToCharArray(str) {
  return str.split('');
}
function displayStringToCharArray() {
  const text = "hello, World!";
  document.write("<br>" + "36. Create a function that converts a string to an array of characters" + "<br>");
  document.write(stringToCharArray(text)); // Output: ["h", "e", "l", "l", "o"]
}
//37. Create a function that will convert a string in an array containing the ASCII codes of each character
function stringToAsciiArray(str) {
  return str.split('').map(char => char.charCodeAt(0));
}
function displayToASCIIArray() {
  const text = "hello";
  document.write("<br>" + "37. Create a function that will convert a string in an array containing the ASCII codes of each character" + "<br>");
  document.write(stringToAsciiArray(text)); // Output: [104, 101, 108, 108, 111]
}
//38. Create a function that will convert an array containing ASCII codes in a string
function asciiArrayToString(arr) {
  return arr.map(code => String.fromCharCode(code)).join('');
}
function displayASCIIArrayToString() {
  const asciiArray = [104, 101, 108, 108, 111];
  document.write("<br>" + "38. Create a function that will convert an array containing ASCII codes in a string" + "<br>");
  document.write(asciiArrayToString(asciiArray)); // Output: "hello"
}
// 39. Implement the Caesar cypher
function caesarCipher(text, shift) {
  return text.split('').map(char => {
    // Get the character code
    let code = char.charCodeAt(0);

    // Uppercase letters
    if (code >= 65 && code <= 90) {
      code = ((code - 65 + shift) % 26) + 65;
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      code = ((code - 97 + shift) % 26) + 97;
    }

    return String.fromCharCode(code);
  }).join('');
}
function displayCaesarCipher() {
  const text = "Hello, World!";
  const shift = 5;
  document.write("<br>" + "39. Implement the Caesar cypher" + "<br>");
  document.write(caesarCipher(text, shift)); // Output: "Mjqqt, Btwqi!"
}
//40. Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
function displayBubbleSort() {
  const numbers = [4, 2, 5, 1, 3];
  document.write("<br>" + "40. Implement the bubble sort algorithm for an array of numbers" + "<br>");
  document.write(bubbleSort(numbers)); // Output: [1, 2, 3, 4, 5]
}