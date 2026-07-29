class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftPtr=0;
        let rightPtr=numbers.length-1;
        while (leftPtr < rightPtr) {
            const sum = numbers[leftPtr] + numbers[rightPtr];

            if (sum === target) {
                return [leftPtr + 1, rightPtr + 1];
            } else if (sum > target) {
                rightPtr--;
            } else {
                leftPtr++;
            }
        }
    }
}
