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

function addLargeNumbers(a, b) {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  // Loop through both strings from right to left
  while (i >= 0 || j >= 0 || carry > 0) {
    // Get current digits or 0 if index is out of range
    const digitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const digitB = j >= 0 ? parseInt(b[j], 10) : 0;

    // Calculate the sum of the digits and carry
    const sum = digitA + digitB + carry;
    result = (sum % 10) + result; // Add the current digit to the result
    carry = Math.floor(sum / 10); // Update carry for next iteration

    i--; // Move to the next digit in string `a`
    j--; // Move to the next digit in string `b`
  }

  // Output the result
  document.write("<h3>Result of adding " + a + " and " + b + ":</h3>");
  document.write("<p>" + result + "</p>");

  return result;
}