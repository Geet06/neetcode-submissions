class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let arr = []
        nums.sort((a,b)=>a-b)
        console.log('nums',nums)
        for (let stat = 0; stat < nums.length; stat++) {
            if (stat > 0 && nums[stat] === nums[stat - 1]) {
                continue;
            }
            let leftPtr = stat + 1;
            let rightPtr = nums.length - 1;
            while (leftPtr < rightPtr) {
                let currSum = nums[stat] + nums[leftPtr] + nums[rightPtr]
                if (currSum == 0) {
                    arr.push([nums[stat], nums[leftPtr], nums[rightPtr]])
                    leftPtr++;
                    rightPtr--
                    while (leftPtr < rightPtr && nums[leftPtr] === nums[leftPtr - 1]) {
                        leftPtr++;
                    }

                    while (leftPtr < rightPtr && nums[rightPtr] === nums[rightPtr + 1]) {
                        rightPtr--;
                    }
                } else if (currSum < 0) {
                    leftPtr++
                } else {
                    rightPtr--
                }
            }
        }
        return arr
    }
}
