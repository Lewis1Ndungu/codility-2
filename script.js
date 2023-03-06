function brokenSequence(seq) {
    // Convert the input string into an array of numbers
    const nums = seq.split(' ').map(Number);
  
    // Check if any element in the array is NaN
    if (nums.some(isNaN)) {
      return 1;
    }
  
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    // Check if the array forms an ascending sequence of integers starting with 1, with an increment of 1
    if (nums[0] !== 1) {
      return 1;
    }
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1] + 1) {
        // If the array does not form such a sequence, find the lowest missing number in the sequence and return it
        return nums[i - 1] + 1;
      }
    }
  
    // If no number is missing, return 0
    return 0;
  }
  



