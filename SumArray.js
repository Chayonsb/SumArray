function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  console.log(sumArray(arr));  // Output: 15
  