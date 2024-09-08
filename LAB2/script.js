// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  document.write(27, ". Tạo một hàm sẽ nhận một mảng số làm đối số và sẽ trả về một mảng mới với các phần tử riêng biệt:");
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  document.write(" mang nhap vao: ", numbers);
  const uniqueNumbers = removeDuplicates(numbers);
    document.write(" mang sau khi loai bo phan tu trung lap: ", uniqueNumbers);
 

