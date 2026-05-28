function twoSum(nums: number[], target: number): number[] {
  // Brute force - O(n^2) complexity
  // for(let i = 0; i < nums.length - 1; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         if(nums[i] + nums[j] === target) {
  //             return [i, j];
  //         }
  //     }
  // }

  // Hash map - O(n) complexity
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let numberToAdd = target - currentNumber;

    if (map[numberToAdd] !== undefined) {
      return [map[numberToAdd], i];
    }

    map[currentNumber] = i;
  }

  return [];
}
