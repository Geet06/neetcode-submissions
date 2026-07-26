class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0
        let uniqueSet = [...new Set(nums)]
        let myArr = uniqueSet.sort((a, b) => a - b)
        let currMax = 1
        let myMax = 1;
        console.log('myArr', myArr)

        for (let i = 0; i < myArr.length ; i++) {
            if (myArr[i] == myArr[i + 1] - 1) {
                currMax = currMax + 1
            } else {
                myMax = Math.max(currMax, myMax)
                currMax = 1
            }
        }
        return myMax
    }
}
